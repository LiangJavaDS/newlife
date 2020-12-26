import { request } from 'umi'
import { message } from 'antd';
import { extend } from 'umi-request';
import { SingleUserType, FormValues } from '@/pages/users/data.d';

const errorHandler = function (error:any) {
    const codeMap = {
        '021': 'An error has occurred',
        '022': 'It’s a big mistake,',
    };
    if (error.response) {
        if (error.response.status > 400) {
            message.error(error.data.message ? error.data.message : error.data)
        }
        console.log(error.response.status);//code，错误提示4xx
        console.log(error.data);//错误的body
    } else {
        message.error('网络错误')
    }
    // throw error; // If throw. The error will continue to be thrown.
};
const extendRequest = extend({ errorHandler });

export const getRemoteList = async () => {
    //这个return一定要加，最外层的函数体{}应该有个return
    return extendRequest('api/users', {
        method: 'get',
    })  //reponse返回的就是body，主题内容
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return false
        });
}

export const editRecord = async (id:number,values:FormValues) => {
    //这个return一定要加，最外层的函数体{}应该有个return
    return extendRequest(`api/users/${id}`, {
        method: 'put',
        data: values
    })
        .then(function (response) {
            return true
        })
        .catch(function (error) {
            return false
        });
}

export const deleteRecord = async (id:number) => {
    //这个return一定要加，最外层的函数体{}应该有个return
    return extendRequest(`api/users/${id}`, {
        method: 'delete',
    })
        .then(function (response) {
            return true
        })
        .catch(function (error) {
            return false
        });
}

export const addRecord = async (values:FormValues) => {
    //这个return一定要加，最外层的函数体{}应该有个return
    return extendRequest(`api/users`, {
        method: 'post',
        data: values
    })
        .then(function (response) {
            return true
        })
        .catch(function (error) {
            return false
        });
}