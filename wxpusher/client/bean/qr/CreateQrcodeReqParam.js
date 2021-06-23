/**
 * @author ycx
 * @description 定义二维码生成参数规范调用提示
 */
class CreateQrcodeReqParam {

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

module.exports = CreateQrcodeReqParam
