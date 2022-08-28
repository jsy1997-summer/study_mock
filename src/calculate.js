var list = ["a", "b", "c", "d",], routers = [];
var asyncRoutes = [
    {
        name: "a",
        children: [
            { name: "b", }, { name: "c", }, { name: "d", }, { name: "e", }, { name: "f", },
        ],
    },
];
// 如何遍历出来 
// asyncRoutes = [{ name: "a", children: [{ name: "b", }, { name: "c", }, { name: "d", }], },]  

// 我是这样的写法，不能得到 children里面的数据
// console.log(asyncRoutes[0].children)
list.forEach((key) => {
    routers.push(
        (asyncRoutes.filter(item=>{return item.name==key}))||
        (asyncRoutes[0].children.filter((item) => {
            return item.name === key;
        }))
    );
});
console.log(routers)
