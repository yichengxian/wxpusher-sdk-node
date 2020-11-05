/**
 * @author ycx
 * @description 返回编码
 */
class ResultCode {

    static SUCCESS = 1000; // 成功

    static BIZ_FAIL = 1001; //业务异常

    static UNAUTHORIZED = 1002; //未认证

    static SIGN_FAIL = 1003; //签名错误

    static NOT_FOUND = 1004; //接口不存在

    static INTERNAL_SERVER_ERROR = 1005; //服务器内部错误

    static WEIXIN_ERROR = 1006; //和微信交互异常

    static NETWORK_ERROR = 1007; // 网络异常

    static DATA_ERROR = 1008;//数据异常

    static UNKNOWN_ERROR = 1009; //未知异常

}

module.exports = ResultCode