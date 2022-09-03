/*
 * @Author: jiasuyin
 * @Date: 2022-08-30 13:36:04
 * @LastEditors: jiasuyin
 * @LastEditTime: 2022-09-03 19:24:05
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \study_mock\src\mock\random\basic.js
 */
import Mock from 'mockjs'

var random = Mock.Random
// Random.boolean( min?, max?, current? )
// 以min / (min + max)概率返回current
const boolean =  Mock.mock('/boolean','post',{
    data:random.boolean(3,7,true)
})

// Random.natural( min?, max? )
// 返回一个随机的自然数（大于等于 0 的整数），可以指示最大最小值,默认最大值：9007199254740992（即2的53次方）。
const natural = Mock.mock('/natural','post',{
    data:random.natural()
})

// Random.integer( min?, max? )
// 返回一个随机的整数。可以指示最大最小值,默认[ -9007199254740992, 9007199254740992]
const integer = Mock.mock('/num', 'post', {
    natural:random.natural(),
    integer:random.integer(1,10),
    float:random.float(2,5,1,1),
    char:random.character('hello world',2,6),
    lower:random.character('lower'),
    upper:random.character('upper'),
    number:random.character('number'),
    symbol:random.character('symbol'),
    str:random.string('hello world', 3,7),
    arr:random.range(1,10,2)

})

export default {
    boolean,
    natural,
    integer,
}
