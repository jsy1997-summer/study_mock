/*
 * @Author: jiasuyin
 * @Date: 2022-08-30 09:26:42
 * @LastEditors: jiasuyin
 * @LastEditTime: 2022-09-03 19:40:15
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \study_mock\src\views\test\test.js
 */
import React,{useState} from "react"
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
        axios.post('/boolean')
            .then(res => {
                console.log('res', res)
            })
            .catch(err => {
                console.log('err', err)
            })

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
    const [flag, setFlag] = useState(true)
    function cycle1(){
        const interval = setInterval(()=>{
            setFlag(true)
            console.log(flag,'flag')

            if(flag){
                console.log('执行了')
                clearInterval(interval)
            }

        })
    }
    function cycle2(){
        var flag = 1
        const interval = setInterval(()=>{
            

            if(flag === 1){
                console.log('执行了')
                clearInterval(interval)
            }

        })
        
    }



    return (
        <div>
            <button onClick={cycle1}>循环1</button>
            <button onClick={cycle2}>循环2</button>
            <button onClick={getdata}>数据获取</button>
            <div>Mock.mock()：
                <button onClick={mockfunction}>mockfunction</button>
                <button onClick={mocktemplate}>mocktemplate</button>
            </div>
            <div>Mock.random()：
                <button onClick={basic}>basic</button>
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