/**
 *
 */
class StrUtil {


    /**
     *  是不是空的
     * @param str {string}检测的字符串
     * @return {boolean}
     */
    static isEmpty(str) {

        return undefined === str || null == str || 0 === str.length
    }

}

module.exports = StrUtil
