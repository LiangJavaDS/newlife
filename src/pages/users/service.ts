import { request } from 'umi'

export const getRemoteList = async() => {
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