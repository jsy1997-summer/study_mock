import logo from './logo.svg';
import './App.css';
import '../src/mock/mock'
import axios from 'axios'


function App() {
  function testclick() {
    axios.get('/getdata1', {
      params: {
        id: '123'
      }
    })
    // axios({
    //   type: 'post',
    //   url: '/getdata',
    //   data: {
    //     'data': '123456'
    //   },
    //   dataType: 'jsonp',
    //   header: {
    //     'Content-Type': 'application/json;charset=utf-8'  //如果写成contentType会报错
    //   }
    // })
    //   .then(res => {
    //     console.log(res, 'res')
    //   })
    //   .catch(Error => {
    //     console.log(Error)
    //   })

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={testclick}>点击</button>
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
