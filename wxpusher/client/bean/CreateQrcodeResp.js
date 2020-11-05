/**
 * @author ycx
 *
 * 定义二维码生成参数规范调用提示
 */
class CreateQrcodeResp {

    /**
     * @type{number}
     */
    expires

    /**
     * @type {string}
     */
    code;

    /**
     * @type {string}
     */
    shortUrl;

    /**
     * @type {string}
     */
    url;

    /**
     * @type {string}
     */
    extra

}

module.exports = CreateQrcodeResp
