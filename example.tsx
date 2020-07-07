
import *as React from 'react';
import *as ReactDOM from 'react-dom'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
// import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import PieEchartExample from './lib/pie/pieEchart.example';
import {Layout,Aside, Content, Footer, Header} from './lib/layout/layout';

// @ts-ignore
import logo from './logo.png';

import './example.scss';
import IconDemo from './lib/icon/icon.demo';
import FormExample from './lib/form/form.example';

// console.log(logo);
// const logo=require('./logo.png');

// require 支持开启自定义加载方式
// !! 表示开启自定义加载方式

ReactDOM.render((
  <Router>
    <Layout className='page'>
      <Header className='pageHeader'>
        <div className="logo">
            <img width={32} height={32} src={logo} alt='logo'/>
        </div>
        <div>unicomeui</div>
      </Header>
      <Layout>
        <Aside className='pageAside'>
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">dialog(对话框)</NavLink>
            </li>
            <li>
              <NavLink to="/layout">layout(布局)</NavLink>
            </li>
            <li>
              <NavLink to="/pie">echarts饼图</NavLink>
            </li>
            <li>
              <NavLink to="/form">表单</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className='pageContent'>
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/pie" component={PieEchartExample}/>
          <Route path="/form" component={FormExample}/>
        </Content>
      </Layout>
      <Footer className='pageFooter'>footer</Footer>
    </Layout>
  </Router>
), document.getElementById('root'));

