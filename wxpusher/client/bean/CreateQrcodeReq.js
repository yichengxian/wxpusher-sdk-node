/**
 * @author ycx
 * @description 带参数app 的临时二维码
 */
class CreateQrcodeReq {
    /**
     * 应用app token
     * @type {string}
     */
    appToken;
    /**
     * 附带数据
     * @type {string}
     */
    extra
    /**
     * 二维码有效时间，s为单位，最大30天
     * @type {number}
     */
    validTime
}

module.exports = CreateQrcodeReq
