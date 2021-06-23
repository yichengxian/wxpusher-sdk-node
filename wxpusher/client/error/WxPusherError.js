/**
 * 异常错误类
 */
class WxPusherError extends Error {

    name = 'WxPusherError';

    code = 999;

    message;


    constructor(message) {
        super();
        this.message = message;
    }
}

module.exports = WxPusherError
