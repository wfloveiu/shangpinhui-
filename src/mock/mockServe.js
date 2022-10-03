//先引入mock模块
import Mock from 'mockjs'
//json格式的数据不需要对外暴露
import banner from './banner.json'
import floor from './floor.json'
//mock数据：第一个参数是请求地址 ，第二个是请求数据
Mock.mock("/mock/banner", { code: 200, data: banner })
Mock.mock("/mock/floor", { code: 200, data: floor })