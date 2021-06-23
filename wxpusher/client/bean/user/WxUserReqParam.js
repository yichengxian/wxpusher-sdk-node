/**
 * 获取关注用户请求参数
 */
class WxUserReqParam {


    /**
     * 过滤的用户uid
     * @type {string}
     */
    uid;

    /**
     * 页码
     * @type {number}
     */
    page = 1;

    /**
     * 每页大小
     * @type {number}
     */
    pageSize = 20;

    constructor() {
    }

}

module.exports = WxUserReqParam
