import { request } from 'umi'
import { message } from 'antd';

export const getRemoteList = async (params) => {
    //这个return一定要加，最外层的函数体{}应该有个return
    return request('api/users', {
        method: 'get',
    })
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const editRecord = async (id, values) => {
    //这个return一定要加，最外层的函数体{}应该有个return
    return request(`api/users/${id}`, {
        method: 'put',
        data: values
    })
        .then(function (response) {
            message.success('修改成功！')
        })
        .catch(function (error) {
            message.error('修改失败！')
        });
}

export const deleteRecord = async (id) => {
    //这个return一定要加，最外层的函数体{}应该有个return
    return request(`api/users/${id}`, {
        method: 'delete',
    })
        .then(function (response) {
            message.success('删除成功！')
        })
        .catch(function (error) {
            message.error('删除失败！')
        });
}

export const addRecord = async (values) => {
    //这个return一定要加，最外层的函数体{}应该有个return
    return request(`api/users`, {
        method: 'post',
        data: values
    })
        .then(function (response) {
            message.success('新增成功！')
        })
        .catch(function (error) {
            message.error('新增失败！')
        });
}