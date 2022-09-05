import Mock from 'mockjs'


var random = Mock.Random

Mock.mock('/image','post',{
    data:random.image('300x250','#fb0a2a','#ffcc33','png','hello world')
})

Mock.mock('/image1','post',{
    data:random.dataImage('300x250','你好世界')
})