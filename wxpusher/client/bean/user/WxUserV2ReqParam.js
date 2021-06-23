/**
 *  @author ycx
 *  @description 查询App的关注用户V2的参数
 */
class WxUserV2ReqParam {


    /**
     * 请求数据的页码
     * @type {number}
     */
    page = 1;

    /**
     * 分页大小，不能超过100
     * @type {number}
     */
    pageSize = 20;

    /**
     * 用户的uid，可选，如果不传就是查询所有用户，传uid就是查某个用户的信息
     * @type {string}
     */
    uid;

    /**
     * 查询拉黑用户，可选，不传查询所有用户，true查询拉黑用户，false查询没有拉黑的用户
     * @type {boolean}
     */
    isBlock;

    /**
     * 关注的类型，可选，不传查询所有用户，0是应用，1是主题
     * @type{number}
     */
    type;

    constructor() {
    }
}

module.exports = WxUserV2ReqParam
