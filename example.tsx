import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import PieEchartExample from './lib/pie/pieEchart.example';

ReactDOM.render((
  <Router>
    <div>
      <header>
        <div className="logo">
          XXD1994 UI
        </div>
      </header>
      <div>
        <aside>
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
        </aside>
        <main>
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/pie" component={PieEchartExample}/>
        </main>
      </div>
    </div>
  </Router>
), document.getElementById('root'));

