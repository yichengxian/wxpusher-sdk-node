## WxPusher SDK for nodeJS
微信消息实时推送服务[WxPusher]，可以通过API实时给个人微信推送消息.http://wxpusher.zjiecode.com/admin



## 功能介绍说明
请直接访问官方说明文档http://wxpusher.zjiecode.com/docs



## 内容说明

- nodeJS SDK的源代码目录
- 基于官方java源码构建。

## nodeJS版本

最低要求nodeJS 8以上



## 实现列表

- 发送消息
- 查询消息状态
- 创建二维码
- 查询关注列表
- 查询App的关注用户V2版本
- 移除用户
- 拉黑用户

## 使用说明

参考**WxPusherTest**

```javascript
//导入
const {wxPusher,Message,CreateQrcodeReq,WxUserReqParam,WxUserV2ReqParam} = require('wxpusher');

/**
 * @author ycx
 * @description: 代码测试
 */
class WxPusherTest {


    static wxPusher = new WxPusher('你的apptoken')

    /**
     * 测试发送消息
     * @return {Promise<void>}
     */
    static async testSend() {
        const message = new Message();
        message.content = '使用nodejs 模仿java的写法是可取的';
        // message.topicIds = Array.of(123);
        message.uids = ['UID_l7Ab9Lg0ajiJ27tGvdrMJe8rrbmX']
        // console.log(message)
        const result = await this.wxPusher.send(message);

        console.log(result);
        console.log('==========执行send测试============');
    }

    /**
     * 测试查询消息状态
     * @return {Promise<void>}
     */
    static async testQueryMessageStatus() {

        const result = await this.wxPusher.queryMessageStatus(187372335);
        console.log(result);
        console.log('==========执行QueryMessageStatus测试============');
    }

    /**
     * 测试创建二维码
     * @return {Promise<void>}
     */
    static async testCreateAppTempQrcode() {
        const qrcodeReq = new CreateQrcodeReq();
        qrcodeReq.extra = 'key';
        qrcodeReq.validTime = 60;
        const result = await this.wxPusher.createAppTempQrcode(qrcodeReq);

        console.log(result);
        console.log('==========执行CreateAppTempQrcode测试============');
    }

    /**
     * 测试查询wx 关注列表
     * @return {Promise<void>}
     */
    static async testQueryWxUser() {

        const wxUserReqParam = new WxUserReqParam();

        wxUserReqParam.page = 1;
        wxUserReqParam.pageSize = 50;
        const result = await this.wxPusher.queryWxUser(wxUserReqParam);
        console.log(JSON.stringify(result));
        console.log('==========执行QueryWxUser测试============');

    }

    /**
     * 测试 查询App的关注用户V2
     * @return {Promise<void>}
     */
    static async testQueryWxUserByV2() {
        const wxUserV2ReqParam = new WxUserV2ReqParam();
        wxUserV2ReqParam.page = 1;
        wxUserV2ReqParam.pageSize = 50;
        const result = await this.wxPusher.queryWxUserByV2(wxUserV2ReqParam);
        console.log(JSON.stringify(result));
        console.log('==========执行QueryWxUserByV2测试============');
    }

    /**
     * 测试移除用户
     * @return {Promise<void>}
     */
    static async testRemoveUser() {
        //98018
        const result = await this.wxPusher.removeUser('98018');
        console.log(JSON.stringify(result));
        console.log('==========执行RemoveUser测试============');
    }

    /**
     * 测试拉黑用户
     * @return {Promise<void>}
     */
    static async testRejectUser(){
        const result = await this.wxPusher.rejectUser('98018',true);
        console.log(JSON.stringify(result));
        console.log('==========执行RejectUser测试============');
    }


}

//WxPusherTest.testSend()
//WxPusherTest.testQueryMessageStatus();
//WxPusherTest.testCreateAppTempQrcode()
//WxPusherTest.testQueryWxUser();
//WxPusherTest.testQueryWxUserByV2();
//WxPusherTest.testRemoveUser();
//WxPusherTest.testRejectUser();
```



## 版本

1.0.4

## 代码模型
[官方java code](https://github.com/wxpusher/wxpusher-sdk-java/)

## 其他说明


