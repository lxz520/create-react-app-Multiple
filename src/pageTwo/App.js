import React from 'react';

// import './App.css';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import '../rem.js';
 import styles from '../App.less'
// import 'antd-mobile/dist/antd-mobile.css';
import {observable} from 'mobx'
import first1 from '../../public/images/pageOne/first1.png'
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
{/* <Button type="primary" inline style={{ marginRight: '4px' }}>按钮</Button> */}
{/* <div style={{width:'2rem',height:"1.5rem",background:'red'}}>
  nsjahkdf
</div> */}
2222222222222222222222

<div>
  <img src={first1} alt=""/>
</div>


       </div>
       
     )
   }
}

export default App;
