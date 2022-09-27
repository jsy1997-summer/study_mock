import Mock from 'mockjs'


var random = Mock.Random

Mock.mock('/text','post',{
    data:random.paragraph(2,9),
    data1:random.cparagraph(5),
    data3:random.sentence(4,8),
    data4:random.csentence(4,10),
    data5:random.word(4),
    data6:random.cword(2,7),
    data7:random.title(6),
    data8:random.ctitle(3,9)
})

Mock.mock('/name','post',{
    first:random.first(),
    last: random.last(),
    englishname: random.name(true),
    cfirst:random.cfirst(),
    clast:random.clast(),
    name:random.cname()
})