/**
 * @author ycx
 * @description
 */
class Message {
    static CONTENT_TYPE_TEXT = 1;
    static CONTENT_TYPE_HTML = 2;
    static CONTENT_TYPE_MD = 3;


    /**
     * token
     * @type {string}
     */
    appToken;
    /**
     * 发送列表
     * @type {Array<string>}
     */
    uids = [];
    /**
     * @type {Array<number>}
     */
    topicIds = [];

    /**
     * @type {number}
     */
    contentType;

    /**
     * @type {string}
     */
    content;

    /**
     * @type {string}
     */
    summary;
    /**
     * 针对text消息类型有效
     * @type {string}
     */
    url

    /**
     *
     * @param appToken {string}
     * @param uids {Array<number>}
     * @param topicIds {Array<number>}
     * @param contentType {number}
     * @param content {string}
     * @param summary {string}
     * @param url {string}
     */
    constructor(appToken, uids, topicIds, contentType, content, summary, url) {
        this.appToken = appToken;
        this.uids = uids;
        this.topicIds = topicIds;
        this.contentType = contentType;
        this.content = content;
        this.summary = summary;
        this.url = url;
    }
}

module.exports = Message
