/*
 * @Author: jiasuyin
 * @Date: 2022-08-29 17:41:36
 * @LastEditors: jiasuyin
 * @LastEditTime: 2022-08-30 11:22:16
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \study_mock\src\App.js
 */
import logo from './logo.svg';
import './App.css';
import '../src/mock/mock'
import '../src/mock/mock/mockfunction'
import '../src/mock/mock/mockTemplate'

import Test from './views/test/test';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test></Test>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
