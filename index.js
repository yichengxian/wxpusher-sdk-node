const WxPusher = require('./wxpusher/client/WxPusher');
const Message = require('./wxpusher/client/bean/message/Message');
const CreateQrcodeReqParam = require('./wxpusher/client/bean/qr/CreateQrcodeReqParam');
const WxUserV2ReqParam = require('./wxpusher/client/bean/user/WxUserV2ReqParam');
const WxUserReqParam = require('./wxpusher/client/bean/user/WxUserReqParam');

module.exports = {
    WxPusher,
    Message,
    CreateQrcodeReqParam,
    WxUserV2ReqParam,
    WxUserReqParam
};




