import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
class clock extends React.Component{
  constructor(props){
    super(props);
    this.setState = {
      data:"new year"
    }
  }
  //挂载：clock组件第一次被渲染到dom中的时候执行
  componentDidMount(){
    this.setState({
      data:"abc"
    })
  }
  //卸载：clock组件被删除的时候执行
  componentWillUnmount(){}
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
