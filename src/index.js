import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive'; // 移动端适配
import 'lib-flexible';
import './index.css';
import AppPc from './Pc/AppPc';
import AppMb from './Mb/AppMb'


ReactDOM.render(
    <div>
        <MediaQuery query='(min-device-width:1224px)'>
            <AppPc />
        </MediaQuery>
        <MediaQuery query='(max-device-width:1224px)'>
            <AppMb/>
        </MediaQuery>
    </div>, 
    document.getElementById('root'));