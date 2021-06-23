/**
 * @author ycx
 * @description 消息
 */
class Message {
    /**
     * 文本
     * @type {number}
     */
    static CONTENT_TYPE_TEXT = 1;
    /**
     * html
     * @type {number}
     */
    static CONTENT_TYPE_HTML = 2;
    /**
     * md
     * @type {number}
     */
    static CONTENT_TYPE_MD = 3;


    /**
     * 发送目标的UID，是一个数组。注意uids和topicIds可以同时填写，也可以只填写一个
     * @type {Array<string>}
     */
    uids = [];
    /**
     * 发送目标的topicId
     * 是一个数组！！！，也就是群发，使用uids单发的时候， 可以不传
     * @type {Array<number>}
     */
    topicIds = [];

    /**
     * 内容类型 1表示文字  2表示html(只发送body标签内部的数据即可，不包括body标签) 3表示markdown
     * @type {number}
     */
    contentType;

    /**
     * 内容
     * @type {string}
     *
     */
    content;

    /**
     * 消息摘要
     * @type {string}
     */
    summary;

    /**
     * 原文链接，可选参数
     * @type {string}
     */
    url

}

module.exports = Message
