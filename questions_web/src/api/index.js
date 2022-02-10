import requests from './request'

// export const test = () => {
//     return requests({
//         url: '',
//         method: 'GET'
//     })
// }
// 注册请求
export const reqRegister = (data)=>{
    console.log(data);
    return requests({url : "/user" ,method : "post",data});
}
// 登录请求
export const reqLogin = (data)=>{
    console.log(data);
    return requests({url : "/login" ,method : "post",data});
}