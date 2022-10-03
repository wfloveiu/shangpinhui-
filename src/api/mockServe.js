//axios进行二次封装
import axios from "axios"
//引入nprogress
import nprogress from "nprogress";
//start方法：进度条开始，done方法：进度条结束

//引入进度条样式
import "nprogress/nprogress.css";

//1.利用axios对象方法create,去创建一个axios实例
//2.request就是axios.不过需要配置

const requests = axios.create({
    //基础路径，发请求时，就会自动加上
    baseURL: "/mock",
    timeout: 5000
})

//在发请求之前：请求拦截器可以检测到，可以做一些事情

requests.interceptors.request.use((config) => {

    //请求拦截器捕获到时，进度条开始
    nprogress.start();
    //config:配置对象，里边的header很重要
    return config;
});

//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, () => {
    //终止promise链
    return Promise.reject(new Error('faile'));
})


export default requests;