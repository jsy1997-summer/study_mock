/*
 * @Author: jiasuyin
 * @Date: 2022-08-30 13:36:32
 * @LastEditors: jiasuyin
 * @LastEditTime: 2022-08-30 13:36:41
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \study_mock\src\mock\random\kuozhan.js
 */
Random.extend({
    constellation: function(date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})
Random.constellation()
// => "水瓶座"
Mock.mock('@CONSTELLATION')
// => "天蝎座"
Mock.mock({
    constellation: '@CONSTELLATION'
})
// => { constellation: "射手座" }