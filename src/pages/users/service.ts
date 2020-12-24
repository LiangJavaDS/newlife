import { request } from 'umi'

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
            console.log('ok');
        })
        .catch(function (error) {
            console.log(error);
        });
}