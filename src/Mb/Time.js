import React, { Component } from 'react';
import {
    Row
} from 'antd';


class Time extends Component { 
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        };
        setInterval(()=> {
            this.setState({
                date: new Date()
            }); 
        }, 1000);
    }
    render() {
        let [h,m,s,year,month,daym,day] = [this.state.date.getHours(),this.state.date.getMinutes(),this.state.date.getSeconds(),this.state.date.getYear(),this.state.date.getMonth(),this.state.date.getDate(),this.state.date.getDay()];
        if(year < 1000)
            year += 1900;
        month += 1;
        [h, m, s] = [h, m, s].map(val => val < 10 ? '0' + val : val);
        let dayArray = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
        return (
            <Row type="flex" justify="start" align="middle" style={{ fontWeight: 600,minHeight:30 }}>
                
                <span id="date-txt">{year + "/" + month + "/" + daym}&nbsp;&nbsp;</span>
                <span id="week-day-txt">{dayArray[day]}</span>
                <span id="time-txt">&nbsp;&nbsp;{h + ":" + m + ":" + s}</span>
            </Row>
            
        );
    }
}
export default Time;