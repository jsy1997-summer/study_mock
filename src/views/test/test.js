/*
 * @Author: jiasuyin
 * @Date: 2022-08-30 09:26:42
 * @LastEditors: jiasuyin
 * @LastEditTime: 2022-09-19 15:38:15
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \study_mock\src\views\test\test.js
 */
import React, { useState, useEffect, useRef } from "react"
import axios from 'axios'

export default function Test() {
    function getdata() {
        axios.post('/getdata', { a: 1, b: 2 })
            .then(res => {
                console.log('数据：', res)
            })
            .catch(err => {
                console.log('error:', err)
            })
    }
    function mockfunction() {
        axios.post('/mockmock', {
            a: 'hello',
            b: ' world'
        })
            .then(res => {
                console.log('mockmock：', res)
            })
            .catch(err => {
                console.log('errormockmock:', err)
            })
    }
    function mocktemplate() {
        axios.post('/mocktemplate')
            .then(res => {
                console.log('template：', res)
            })
            .catch(err => {
                console.log('errortemplate:', err)
            })
    }
    function basic() {
        for (var i = 0; i < 100; i++) {
            axios.post('/boolean')
                .then(res => {
                    console.log('res', res.data.data)
                })
                .catch(err => {
                    console.log('err', err)
                })

        }


        // axios.post('/natural')
        //     .then(res => {
        //         console.log('res1', res)
        //     })
        axios.post('/num')
            .then(res => {
                console.log('num', res)
            })
    }
    function data() {
        axios.post('/date')
            .then(res => {
                console.log('date', res)
            })
    }
    function image() { }
    function color() { }
    function text() { }
    function name() { }
    function web() { }
    function address() { }
    function helper() { }
    function Miscellaneous() { }
    function valid() { }
    function toJSONSchema() { }
    const [flag, setFlag] = useState(false)
    var interval1
    function cycle1() {
        const inter = setInterval(() => {
            console.log('执行了')
            axios.post('/mocktemplate')
                .then(res => {
                    if (res.data.flag) {
                        console.log(res.data.flag, 'res.data.flag')
                        clearInterval(inter)
                    }
                    console.log(res, '执行结果')
                })
        }, 1000)
    }
    useEffect(() => {
        //重新模拟点击事件
        if (flag) {
            cycle1()
        }
        //更新时清除掉interval
        return () => clearInterval(interval1)
    }, [flag])
    var intervall
    function cycle2() {
        setTimeout(() => {
            console.log('执行了')
            axios.post('/mocktemplate')
                .then(res => {
                    if (res.data.flag) {
                        console.log(res.data.flag, 'res.data.flag')
                        return res.data.flag
                    } else {
                        cycle2()
                    }
                    console.log(res, '执行结果')
                })
        }, 1000)
    }
    //1、怎么解决同步执行
    //2、怎么解决立即执行一次
    //3、怎么解决set不生效的问题
    const [flow, setFlow] = useState(null)
    function cycle3() {
        // var flag = 1
        var num = 0

        const interval = setInterval(function fun() {

            console.log(num, 'num')
            console.log('执行')
            const p = request()
            p.then(res => {
                setFlow(res.data.data.data)

                if (num === 1) {
                    //提高num的值，避免得到最终值之后中再次进入
                    num = 5
                }
                console.log('结果：', res.data.data.data)
                if (res.data.data.data) {
                    num = num + 1
                    clearInterval(interval)
                    console.log('得到最终结果', res.data.data.data)
                }
            })
            console.log('此时flag', flow)



            return fun //注意需要在函数中返回自身，否则只会执行一次
        }(), 2000)
    }
    const flag1 = useRef()

    function cycle4(){
        setInterval(()=>{
            setFlow(true)
            console.log(flow,'flow')
            flag1.current = true
            console.log(flag1.current,'flag1.current')
        },2000)
    }


    function cycle5(){
        flag1.current = false
        console.log(flag1,'flag1')

        setFlow(false)
    }
    console.log(flow,'外部变化')
    useEffect(() => {
        console.log('检测到变化')
    }, [flow])

    async function request() {
        return await axios.post('https://dev.usemock.com/6315607ead2611a740134726/bool')
    }

    // const [count, setCount] = useState(1)
    // useEffect(() => {
    //     setInterval(() => {
    //         console.log(count)
    //     }, 1000)
    //     //闭包陷阱
    // }, [])
    // const handleClick = () => {
    //     setCount(count + 1)
    // }
    // const [count, setCount] = useState(1)

    // useEffect(() => {
    //     setInterval(() => {
    //         console.log(count)
    //     }, 1000)
    //     //闭包陷阱
    // }, [])

    // const handleClick = () => {
    //     setCount((prevState) => {
    //         //浅拷贝
    //         return Object.assign(prevState, {
    //             name: 'ssdsd',
    //         })
    //     })
    // }

    // return (
    //     <div onClick={handleClick}>
    //         click to add, count: {count.a}, name:{count.name}
    //     </div>
    // )




    return (
        <div>
            {/* <div onClick={handleClick}>
                click to add, count: {count}
            </div> */}
            <button onClick={cycle1}>循环1</button>
            <button onClick={cycle2}>循环2</button>
            <button onClick={cycle3}>循环3</button>
            <button onClick={cycle4}>循环4</button>
            <button onClick={cycle5}>循环5</button>



            <button onClick={getdata}>数据获取</button>
            <div>Mock.mock()：
                <button onClick={mockfunction}>mockfunction</button>
                <button onClick={mocktemplate}>mocktemplate</button>
            </div>
            <div>Mock.random()：
                <button onClick={basic} disabled={flow}>basic</button>
                <button onClick={data}>data</button>
                <button onClick={image}>image</button>
                <button onClick={color}>color</button>
                <button onClick={text}>text</button>
                <button onClick={name}>name</button>
                <button onClick={web}>web</button>
                <button onClick={address}>address</button>
                <button onClick={helper}>helper</button>
                <button onClick={Miscellaneous}>Miscellaneous</button>
            </div>
            <div>Mock.valid()：
                <button onClick={valid}>valid</button>
            </div>
            <div>Mock.toJSONSchema()：
                <button onClick={toJSONSchema}>toJSONSchema</button>
            </div>
        </div>
    )
}