/*
 * @Author: jiasuyin
 * @Date: 2022-09-03 19:26:37
 * @LastEditors: jiasuyin
 * @LastEditTime: 2022-09-03 19:35:50
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \study_mock\src\mock\random\date.js
 */
import Mock, { Random } from 'mockjs'

var random = Mock.Random

const date =  Mock.mock('/date','post',{
    date:random.date('yyyy-MM-dd HH-mm-ss'),
    time:Random.time(),
    datetime:random.datetime(),
    now:random.now()
})

export default date