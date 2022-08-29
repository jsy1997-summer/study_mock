import React from "react"
import axios from 'axios'

export default function Test(){
    function getdata(){
        axios.post('/getdata',{a:1,b:2})
        .then(res=>{
            console.log('数据：',res)
        })
        .catch(err=>{
            console.log('error:',err)
        })
    }
    
    return(
        <div>
            <button onClick={getdata}>数据获取</button>
        </div>
    )
}