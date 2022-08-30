/*
 * @Author: jiasuyin
 * @Date: 2022-08-30 10:52:53
 * @LastEditors: jiasuyin
 * @LastEditTime: 2022-08-30 11:53:54
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \study_mock\src\mock\mock\mockfunction.js
 */
import Mock from 'mockjs'
// Mock.mock( rurl, rtype, function( options ) )
// rurl:表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。
// rtype: 表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等。
// function(options): 表示用于生成响应数据的函数。
// options:指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性，
// 记录用于生成响应数据的函数。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。
export default Mock.mock('/mockmock','post',function(props){
    console.log('props.url',props.url)
    console.log('props.type',props.type)
    console.log('props.body', props.body)
    const data = JSON.parse(props.body)
    
    return data.a + data.b
})