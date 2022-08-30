/*
 * @Author: jiasuyin
 * @Date: 2022-08-30 09:26:42
 * @LastEditors: jiasuyin
 * @LastEditTime: 2022-08-30 11:31:52
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \study_mock\src\views\test\test.js
 */
import React from "react"
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

    return (
        <div>
            <button onClick={getdata}>数据获取</button>
            <div>Mock.mock()：
                <button onClick={mockfunction}>mockfunction</button>
                <button onClick={mocktemplate}>mocktemplate</button>
            </div>
        </div>
    )
}