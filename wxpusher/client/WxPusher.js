const Result = require('./bean/result/Result');
const ResultCode = require('./bean/result/ResultCode');
const HttpUtil = require('./HttpUtil');

/**
 * @author ycx
 * @description
 */
class WxPusher {

    /**
     * 发送消息
     * @param message {Message}
     * @return {Promise<Result>}
     */
    static send(message) {
        return new Promise(resolve => {
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
    static queryMessageStatus(messageId) {
        return new Promise(resolve => {
            if (undefined === messageId || null === messageId || 0 >= messageId) {
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
    static createAppTempQrcode(createQrcodeReq) {

        return new Promise(resolve => {
            //
            HttpUtil.post(createQrcodeReq, '/api/fun/create/qrcode', (res) => {
                resolve(res)
            });
        });

    }

    /**
     * 查询关注你App的微信用户
     * @param appToken {string} 应用token
     * @param uid {string} 根据UID过滤用户
     * @param page {number} 页码
     * @param pageSize {number} 页面大小
     * @return {Promise<Result<Page<WxUser>>>}
     */
    static queryWxUser(appToken, uid, page, pageSize) {

        return new Promise(resolve => {
            if (undefined === appToken || 0 === appToken.length) {
                resolve(new Result(ResultCode.BIZ_FAIL, "appToken不能为空"));
                return;
            }

            if (undefined === page || 0 >= page) {
                resolve(new Result(ResultCode.BIZ_FAIL, "page不合法"));
                return;
            }
            if (undefined === pageSize || 0 >= pageSize) {
                resolve(new Result(ResultCode.BIZ_FAIL, "pageSize不合法"));
                return;
            }
            //
            let dataJson = {
                'appToken': appToken,
                'page': page,
                'pageSize': pageSize,
            }

            if (undefined !== uid) {
                dataJson.uid = uid;
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
    static verify(message) {
        if (null === message || undefined === message) {
            return new Result(ResultCode.BIZ_FAIL, '消息不能为空');
        }
        if (null === message.appToken || undefined === message.appToken) {
            return new Result(ResultCode.BIZ_FAIL, 'appToken不能为空');
        }
        if (null === message.content || undefined === message.content) {
            return new Result(ResultCode.BIZ_FAIL, 'content不能为空');
        }
        return null;
    }
}

module.exports = WxPusher

