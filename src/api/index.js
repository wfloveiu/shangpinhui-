//所有的api接口进行统一管理
//引入axios文件
import requests from './request';

//三级联动接口

//对外暴露函数名
export const reqCategoryList = function () {
    return requests({
        method: 'GET',
        url: '/api/product/getBaseCategoryList',
    })
    //返回的是个promise
}