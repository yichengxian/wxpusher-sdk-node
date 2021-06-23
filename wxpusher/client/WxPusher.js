const Result = require('./bean/result/Result');
const ResultCode = require('./bean/result/ResultCode');
const HttpUtil = require('./HttpUtil');
const StrUtil = require('./util/StrUtil');
const WxPusherError = require('./error/WxPusherError');

/**
 * @author ycx
 * @description
 */
class WxPusher {

    /**
     * @type {string}
     */
    appToken;

    /**
     *
     * @param appToken {string}
     */
    constructor(appToken) {
        this.appToken = Object.freeze(appToken);
    }

    /**
     * 获取token
     */
    getToken() {
        if (StrUtil.isEmpty(this.appToken)) {
            throw new WxPusherError('appToken为空或未赋值');
        }
        return this.appToken;
    }

    /**
     * 发送消息
     * @param message {Message}
     * @return {Promise<Result>}
     */
    send(message) {



        return new Promise(resolve => {
            //设置token
            message.appToken = this.getToken();
            let result = this.verify(message);
            if (null !== result) {
                resolve(result);
                return;
            }

            HttpUtil.post(message, '/api/send/message', (res) => {
                resolve(res);
            });
        });

    }


    /**
     * 查询消息状态
     * @param messageId {number} 消息id
     * @return {Promise<Result>}
     */
    queryMessageStatus(messageId) {
        return new Promise(resolve => {
            if (undefined === messageId || null == messageId || 0 >= messageId) {
                resolve(new Result(ResultCode.BIZ_FAIL, "messageId为空"));
                return;
            }
            HttpUtil.get(null, '/api/send/query/' + messageId, (res) => {
                resolve(res);
            });
        });
    }

    /**
     * 创建带参数的app临时二维码
     * @param createQrcodeReq {CreateQrcodeReq} qr参数
     * @return {Promise<Result<CreateQrcodeResp>>}
     */
    createAppTempQrcode(createQrcodeReq) {


        return new Promise(resolve => {
            createQrcodeReq.appToken = this.getToken();
            //
            HttpUtil.post(createQrcodeReq, '/api/fun/create/qrcode', (res) => {
                resolve(res)
            });
        });

    }

    /**
     * 查询关注你App的微信用户
     * @param wxUserReqParam {WxUserReqParam}  获取关注用户请求参数
     * @return {Promise<Result<Page<WxUser>>>}
     */
    queryWxUser(wxUserReqParam) {


        return new Promise(resolve => {

            wxUserReqParam.appToken = this.getToken();
            if (undefined === wxUserReqParam.page || 0 >= wxUserReqParam.page) {
                resolve(new Result(ResultCode.BIZ_FAIL, "page不合法"));
                return;
            }
            if (undefined === wxUserReqParam.pageSize || 0 >= wxUserReqParam.pageSize) {
                resolve(new Result(ResultCode.BIZ_FAIL, "pageSize不合法"));
                return;
            }
            //
            let dataJson = {
                'appToken': wxUserReqParam.appToken,
                'page': wxUserReqParam.page,
                'pageSize': wxUserReqParam.pageSize,
            }
            //如果存在用户就传参数
            if (wxUserReqParam.uid) {
                dataJson.uid = wxUserReqParam.uid;
            }
            HttpUtil.get(dataJson, '/api/fun/wxuser', (res) => {
                resolve(res)
            })

        });


    }


    /**
     *
     * 校验数据合法性
     * @param message {Message}
     * @return {Result | null}
     */
    verify(message) {
        if (!message) {
            return new Result(ResultCode.BIZ_FAIL, '消息不能为空');
        }
        if (!message.content) {
            return new Result(ResultCode.BIZ_FAIL, 'content不能为空');
        }
        return null;
    }

    /**
     * 查询App的关注用户V2
     * 一个微信用户，如果同时关注应用，主题，甚至关注多个主题，会返回多条记录
     * @param wxUserV2ReqParam {WxUserV2ReqParam} 查询App的关注用户V2的参数
     * @return {Promise<Result<>>}
     */
    queryWxUserByV2(wxUserV2ReqParam) {

        return new Promise(resolve => {

            wxUserV2ReqParam.appToken = this.getToken();

            if (undefined === wxUserV2ReqParam.page || 0 >= wxUserV2ReqParam.page) {
                resolve(new Result(ResultCode.BIZ_FAIL, "page不合法"));
                return;
            }
            if (undefined === wxUserV2ReqParam.pageSize || 0 >= wxUserV2ReqParam.pageSize) {
                resolve(new Result(ResultCode.BIZ_FAIL, "pageSize不合法"));
                return;
            }
            //
            HttpUtil.get(wxUserV2ReqParam, '/api/fun/wxuser/v2', (res) => {
                resolve(res)
            })

        });
    }

    /**
     * 删除用户
     * @param userId {string} 用户id 通过用户查询接口可以获取
     * @return {Promise<Result>}
     */
    removeUser(userId) {
        return new Promise(resolve => {

            if (StrUtil.isEmpty(userId)) {
                resolve(new Result(ResultCode.BIZ_FAIL, "userId不能为空"));
                return;
            }
            const dataJson = {
                appToken: this.getToken(),
                id: uid
            }

            HttpUtil.delete(dataJson, '/api/fun/remove', (res) => {
                resolve(res)
            })

        });
    }

    /**
     * 拉黑用户
     * @param userId {string} 用户id 通过用户查询接口可以获取
     * @param isReject {boolean} 是否拉黑，true表示拉黑，false表示取消拉黑
     * @return {Promise<Result>}
     */
    rejectUser(userId, isReject) {

        return new Promise(resolve => {

            if (StrUtil.isEmpty(userId)) {
                resolve(new Result(ResultCode.BIZ_FAIL, "userId不能为空"));
                return;
            }
            //
            const dataJson = {
                appToken:this.getToken(),
                reject: isReject,
                id: uid
            }

            HttpUtil.put(dataJson, '/api/fun/reject', (res) => {
                resolve(res)
            })

        });
    }


}

module.exports = WxPusher

