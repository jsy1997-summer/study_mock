import Mock from 'mockjs'


var random = Mock.Random

export default Mock.mock('/basic','post',{
    data:random.boolean(90,9,'nihao')
})
