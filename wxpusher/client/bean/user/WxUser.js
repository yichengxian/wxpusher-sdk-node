/**
 * @author ycx
 */
class WxUser {

    /**
     * uid 用户标志
     * @type {string}
     */
    uid;


    /**
     * 用户是否打开了消息开关
     * @type {boolean}
     */
    enable;

    /**
     * 用户关注应用的时间
     * @type {number}
     */
    createTime;

    /**
     * 昵称
     * @type {string}
     */
    nickName;

    /**
     * 头像
     * @type {string}
     */
    headImg;

}
module.exports =WxUser
