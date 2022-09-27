/*
 * @Author: jiasuyin
 * @Date: 2022-08-30 11:21:37
 * @LastEditors: jiasuyin
 * @LastEditTime: 2022-09-19 14:11:40
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \study_mock\src\mock\mock\mockTemplate.js
 */
import Mock from 'mockjs'
var random = Mock.Random
// Mock.mock( rurl, rtype, template )
// 记录数据模板。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。
export default Mock.mock('/mocktemplate','post',{ 
    'data|1-10':[{}],
    flag:random.boolean(7,4,true)
})
.setup({
    timeout:5000
})