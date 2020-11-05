## WxPusher SDK for nodeJS
微信消息实时推送服务[WxPusher]，可以通过API实时给个人微信推送消息.http://wxpusher.zjiecode.com/admin



## 功能介绍说明
请直接访问官方说明文档http://wxpusher.zjiecode.com/docs



## 内容说明

- nodeJS SDK的源代码目录
- 基于官方java源码构建,初学node一个月多。



## nodeJS版本

最低要求nodeJS 8以上

## 使用说明

参考**WxPusherTest**

```javascript
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
```



## 版本

1.0.0



## 其他说明

本项目未传npm，暂还没搞明白如何使用