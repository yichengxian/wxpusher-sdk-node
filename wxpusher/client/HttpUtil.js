const http = require('http');
const qs = require('querystring');
const Result = require('./bean/result/Result');
const ResultCode = require('./bean/result/ResultCode');

/**
 * @author ycx
 * @description http请求工具类
 */
class HttpUtil {

    /**
     * base url
     * @type {string}
     */
    static BASE_URL = 'wxpusher.zjiecode.com';

    /**
     * charset name
     * @type {string}
     */
    static CHARSET_NAME = 'UTF-8';

    /**
     * Content-Type
     * @type {string}
     */
    static CONTENT_TYPE = 'application/json';

    static PORT = 80;

    /**
     * post 请求
     * @param data {Object} 数据
     * @param path {string}  路径
     * @param callback {{function(Result):void} } 回调
     */
    static post(data, path, callback) {

        if (null === data || undefined === data) {
            callback(new Result(ResultCode.UNKNOWN_ERROR, '数据为空'));
        }

        const dataStr = JSON.stringify(data);
        const options = {
            hostname: this.BASE_URL,
            port: this.PORT,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': this.CONTENT_TYPE
            }
        };
        //
        const req = http.request(options, res => {
            res.setEncoding(this.CHARSET_NAME);
            res.on('data', chunk => callback(JSON.parse(chunk)));
        });

        req.on('error', err => {
            console.error('err with request:', err.stack);
            callback(new Result(ResultCode.NETWORK_ERROR, '发送请求异常'))
        });
        req.write(dataStr)
        req.end();

    }

    /**
     * get 请求
     * @param data {Object} 数据
     * @param path  {string}路径
     * @param callback {{function(Result):void} } 回调
     */
    static get(data, path, callback) {

        const options = {
            hostname: this.BASE_URL,
            port:this.PORT,
            path: path + '?' + qs.stringify(data),
            method: 'GET',
        };
        const req = http.request(options, res => {
            res.setEncoding(this.CHARSET_NAME);
            res.on('data', chunk => {
                console.log(chunk)
                callback(JSON.parse(chunk));
            });
        });

        req.on('error', err => {
            console.error('err with request:', err.stack);
            callback(new Result(ResultCode.NETWORK_ERROR, '发送请求异常'))
        });
        req.end()
    }


}


module.exports = HttpUtil
