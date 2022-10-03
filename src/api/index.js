//所有的api接口进行统一管理
//引入axios文件
import requests from './request';
import mockRequests from './mockServe';
//三级联动接口

//对外暴露函数名
export const reqCategoryList = function () {
    return requests({
        method: 'GET',
        url: '/api/product/getBaseCategoryList',
    })
    //返回的是个promise
}
//对外暴露mock相关的请求
//函数写法
export const reqGetBannerList = () => mockRequests.get('/banner');
//获取floor的数据
export const reqFloorList = () => mockRequests.get('/floor');
// 搜索商品的接口，POST请求
//对象写法
//params参数至少是一个空对象
export const reqGetSearchInfo = (params) =>
    requests({
        method: 'POST',
        url: '/api/list',
        data: params
    })
export const reqGetDetail = (skuId) => requests({
    method: 'GET',
    url: `/api/item/${skuId}`,
    data: skuId
})

export const reqGetcode = (phone) => requests({
    url: `/api/user/passport/sendCode/${phone}`,
    method: 'GET',
})
