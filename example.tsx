import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import PieEchartExample from './lib/pie/pieEchart.example';
import {Layout,Aside, Content, Footer, Header} from './lib/layout/layout';

// @ts-ignore
import logo from './logo.png'

import './example.scss'
console.log(logo);
// const logo=require('./logo.png');
ReactDOM.render((
  <Router>
    <Layout className='page'>
      <Header className='pageHeader'>
        <div className="logo">
            <img width={32} height={32} src={logo} alt='logo'/>
        </div>
        <div>XXD1994 UI</div>
      </Header>
      <Layout>
        <Aside className='pageAside'>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">dialog(对话框)</Link>
            </li>
            <li>
              <Link to="/layout">layout(布局)</Link>
            </li>
            <li>
              <Link to="/pie">echarts饼图</Link>
            </li>
          </ul>
        </Aside>
        <Content className='pageContent'>
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/pie" component={PieEchartExample}/>
        </Content>
      </Layout>
      <Footer className='pageFooter'>footer</Footer>
    </Layout>
  </Router>
), document.getElementById('root'));

