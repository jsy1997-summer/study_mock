/*
 * @Author: jiasuyin
 * @Date: 2022-08-30 09:26:42
 * @LastEditors: jiasuyin
 * @LastEditTime: 2022-09-27 10:21:16
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
    function basic(){
        axios.post('/basic')
            .then(res => {
                console.log('res', res)
            })
            .catch(err => {
                console.log('err', err)
            })
    }
    function data(){}
    function image(){
        axios.post('/image').then(res=>{
            console.log(res,'image')
        })
        axios.post('/image1').then(res=>{
            console.log(res,'image1')
        })
    }
    function color(){}
    function text(){
        axios.post('/text').then(res=>{
            console.log(res,'text')
        }) 
    }
    function name(){
        axios.post('/name').then(res=>{
            console.log(res,'text')
        }) 
    }
    function web(){}
    function address(){}
    function helper(){}
    function Miscellaneous(){}
    function valid(){}
    function toJSONSchema(){}
    function data(){}
    function image(){}
    function color(){}
    function text(){}
    function name(){}


    return (
        <div>
            <div>修改测试</div>
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