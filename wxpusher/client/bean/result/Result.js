const ResultCode = require('./ResultCode');

/**
 * 统一封装 请求类
 */
class Result {
    code;
    msg;
    data;

    /**
     * 构造
     * @param code
     * @param msg
     * @param data
     */
    constructor(code, msg, data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    /**
     *  成功标志
     * @return {boolean}
     */
    isSuccess() {
        return this.code === ResultCode.SUCCESS;
    }
}

module.exports = Result
