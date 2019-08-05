// import Button from './button';
// import Xxd from './xxd';
import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';

ReactDOM.render(
    <div>
        <Icon name="file" onClick={(e)=>{console.log(e.target)}} />
        <Icon name="chart" />
        <Icon name="file" />
    </div>,
    document.getElementById('root')
);

