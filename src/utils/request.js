//公共加密方法
import React from 'react';
import ReactDOM from 'react-dom';
import * as CryptoJS from 'crypto-js';
// import $ from "jquery";
import axios from 'axios';
import './md5.js';
import $ from "jquery";
import { Toast } from 'antd-mobile';

function request( configObj) {
    /**
     * 返回的Promise对象含有then、catch方法
     */
    return new Promise(function (resolve, reject) {
        axios({
            url:'*************',
            method:"post",
            // params: params,
            data:configObj ,
            // timeout: timeout,
            headers: {
                'Content-Type': 'application/json',
                // 'token': window.sessionStorage.getItem('token') || ''
            }
        }).then(function (response) {
            if(response){
                if (response.data && response.data.code) {
                    // resolve(response);
                    resolve(response);
                }else {
                    // Toast.fail(
                      //  '返回的数据格式有误'
                    //     {
                    //     key,
                    //     message: '操作失败',
                    //     description: '返回的数据格式有误'
                    // }
                    // );
                    resolve(response);
                }
            }else {
                //处理特殊的情况就是response返回什么也没有
                // Toast.fail(
                //     '服务器错误'
                //     {
                //     key,
                //     message: '操作失败',
                //     description: '服务器错误'
                // }
               // );
                resolve(response);
            }
        }).catch(function (error) {
            Toast.fail(
                '网络异常,请稍后重试'
            //     {
               
            //     key,
            //     message: '操作失败',
            //     description: '网络异常,请稍后重试'
            // }
            );
            reject(error);
        })
    })
}

// // 登录
// export function loginClick(configObj) {
//     return getDataFromServer(apiUrl.LOGIN, configObj);
// }








export default request;