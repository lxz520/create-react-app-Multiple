import React from 'react';
// import logo from './logo192.png';
// import './App.css';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import '../rem.js';
 import styles from '../App.less'
// import 'antd-mobile/dist/antd-mobile.css';
import {observable} from 'mobx'

    // 先引入组件
// import { loginClick } from '../Api';
class TestStore {
  // 被观察者
  @observable name; 
  constructor() {
      this.name = '浮云先生'
  }
}
const person= new TestStore()
class App extends React.Component{
  componentDidMount(){
  }
   render(){
     return(
       <div style={{width:'100%',height:"1.5rem"}}>
<Button type="primary" inline style={{ marginRight: '4px' }}>按钮</Button>
{/* <div style={{width:'2rem',height:"1.5rem",background:'red'}}>
  nsjahkdf
</div> */}
 <div className={styles.name}>hshdhskhdkndsjalkjckder
<div className={styles.num}>123</div>
<div className={styles.num2}>hjdh sdk fd</div>
</div> 
<div>
  {/* <img src={logo} alt=""/> */}
</div>


       </div>
       
     )
   }
}

export default App;
