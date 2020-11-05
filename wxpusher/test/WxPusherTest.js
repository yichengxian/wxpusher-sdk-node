const wxPusher = require('../client/WxPusher');
const Message = require("../client/bean/message/Message");
const CreateQrcodeReq = require("../client/bean/CreateQrcodeReq");

/**
 * @author ycx
 * @description: 代码测试
 */
class WxPusherTest {


    /**
     * 测试发送消息
     * @return {Promise<void>}
     */
    static async testSend() {
        const message = new Message();
        message.appToken = '';
        message.content = '使用nodejs 模仿java的写法是可取的';
        message.topicIds = Array.of(123)
        // console.log(message)
        const result = await wxPusher.send(message);

        console.log(result);
        console.log('==========执行send测试============');
    }

    /**
     * 测试查询消息状态
     * @return {Promise<void>}
     */
    static async testQueryMessageStatus() {

        const result = await wxPusher.queryMessageStatus(1223443);
        console.log(result);
        console.log('==========执行QueryMessageStatus测试============');
    }

    /**
     * 测试创二维码
     * @return {Promise<void>}
     */
    static async testCreateAppTempQrcode() {
        const qrcodeReq = new CreateQrcodeReq();
        qrcodeReq.appToken = '';
        qrcodeReq.extra = 'key';
        qrcodeReq.validTime = 60;
        const result = await wxPusher.createAppTempQrcode(qrcodeReq);

        console.log(result);
        console.log('==========执行CreateAppTempQrcode测试============');
    }

    /**
     * 测试查询wx 关注列表
     * @return {Promise<void>}
     */
    static async testQueryWxUser() {
        const appToken = 'xxx';
        const uid = 'xxxx';
        const page = 1;
        const pageSize = 10;
        const result = await wxPusher.queryWxUser(appToken, uid, page, pageSize);
        console.log(result);
        console.log('==========执行QueryWxUser测试============');

    }

}

WxPusherTest.testSend()
