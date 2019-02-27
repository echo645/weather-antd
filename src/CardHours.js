import React, { Component } from 'react';
import { List, Card,Row,Icon } from 'antd';
import './CardHours.css';
class CardHours extends Component{
    render() {
        const cardHourInfo = this.props.characterDataHour;
        var dataHour = [
            {
                title: '',
                temperature: '',
                weather: '',
                code:''
            },
            {
                title: '',
                temperature: '',
                weather: '',
                code:''
            },
            {
                title: '',
                temperature: '',
                weather: '',
                code:''
            },
            {
                title: '',
                temperature: '',
                weather: '',
                code:''
            },
            {
                title: '',
                temperature: '',
                weather: '',
                code:''
            },
            {
                title: '',
                temperature: '',
                weather: '',
                code:''
            },
            {
                title: '',
                temperature: '',
                weather: '',
                code:''
            },
            {
                title: '',
                temperature: '',
                weather: '',
                code:''
            }
        ];
        if (!cardHourInfo){
        }else{
            let j = 0;
            for(let i = 0;i < 23;i+=3){
                dataHour[j].title = cardHourInfo.results[0].hourly[i].time.slice(11,16);
                dataHour[j].temperature = cardHourInfo.results[0].hourly[i].temperature;
                dataHour[j].weather = cardHourInfo.results[0].hourly[i].text;
                if(cardHourInfo.results[0].hourly[i].code<=38){
                    dataHour[j].code = cardHourInfo.results[0].hourly[i].code;
                }else{
                    dataHour[j].code = '39';
                }
                j++;
            }
        }
        const imgArr = [require('./3d_60/0.png'),require('./3d_60/1.png'),require('./3d_60/2.png'),require('./3d_60/3.png'),
                        require('./3d_60/4.png'),require('./3d_60/5.png'),require('./3d_60/6.png'),require('./3d_60/7.png'),
                        require('./3d_60/8.png'),require('./3d_60/9.png'),require('./3d_60/10.png'),require('./3d_60/11.png'),
                        require('./3d_60/12.png'),require('./3d_60/13.png'),require('./3d_60/14.png'),require('./3d_60/15.png'),
                        require('./3d_60/16.png'),require('./3d_60/17.png'),require('./3d_60/18.png'),require('./3d_60/19.png'),
                        require('./3d_60/20.png'),require('./3d_60/21.png'),require('./3d_60/22.png'),require('./3d_60/23.png'),
                        require('./3d_60/24.png'),require('./3d_60/25.png'),require('./3d_60/26.png'),require('./3d_60/27.png'),
                        require('./3d_60/28.png'),require('./3d_60/29.png'),require('./3d_60/30.png'),require('./3d_60/31.png'),
                        require('./3d_60/32.png'),require('./3d_60/33.png'),require('./3d_60/34.png'),require('./3d_60/35.png'),
                        require('./3d_60/36.png'),require('./3d_60/37.png'),require('./3d_60/38.png'),require('./3d_60/99.png')];
        return (
                <List
                    grid={{ gutter: 16, column: 8 }}
                    dataSource={dataHour}
                    renderItem={item => (
                    <List.Item>
                        <Card title={item.title} style={{ fontSize: 22}}>

                            <Row className="weather-section-temperature">
                                <span className="Temperature-hour">{item.temperature}</span>
                                <span >℃</span>
                            </Row>
                            <div><img src={imgArr[item.code]} /></div>
                            <div>{item.weather}</div>
                        </Card>
                    </List.Item>
                    )}
                />
        );
    }
}
export default CardHours;