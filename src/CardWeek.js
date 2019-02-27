import React, { Component } from 'react';
import { Card,Button,Row } from 'antd';
import IconFont from './IconFont.js';

class CardWeek extends Component {
    constructor(props) {
        super(props)
        this.state = { showMore: false }
    }
    render() {
        const cardWeekInfo = this.props.characterDataWeek;
        let show_num = this.state.showMore ? 7 : 3;
        var dataWeek = [
        {
            day: '今天',
            date:'',
            weatherDay:'',
            weatherNight:'',
            temperatureLow: '',
            temperatureHigh:'',
        },
        {
            day: '明天',
            date:'',
            weatherDay:'',
            weatherNight:'',
            temperatureLow: '',
            temperatureHigh:'',
        },
        {
            day: '',
            date:'',
            weatherDay:'',
            weatherNight:'',
            temperatureLow: '',
            temperatureHigh:'',
        },
        {
            day: '',
            date:'',
            weatherDay:'',
            weatherNight:'',
            temperatureLow: '',
            temperatureHigh:'',
        },
        {
            day: '',
            date:'',
            weatherDay:'',
            weatherNight:'',
            temperatureLow: '',
            temperatureHigh:'',
        },
        {
            day: '',
            date:'',
            weatherDay:'',
            weatherNight:'',
            temperatureLow: '',
            temperatureHigh:'',
        },
        {
            day: '',
            date:'',
            weatherDay:'',
            weatherNight:'',
            temperatureLow: '',
            temperatureHigh:'',
        }
        ];
        if (!cardWeekInfo){
        }else{
            let dayArray = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
            console.log(cardWeekInfo.results[0].daily.length);
            for(let i = 0;i < cardWeekInfo.results[0].daily.length;i++){
                if(dataWeek[i].day){
                }else{
                    var setDate=new Date();
                    setDate.setFullYear(cardWeekInfo.results[0].daily[i].date.slice(0,4).valueOf(),cardWeekInfo.results[0].daily[i].date.slice(5,7).valueOf()-1,cardWeekInfo.results[0].daily[i].date.slice(8).valueOf());
                    /* console.log(cardWeekInfo.results[0].daily[i].date.slice(0,4).valueOf());
                    console.log(cardWeekInfo.results[0].daily[i].date.slice(5,7).valueOf());
                    console.log(cardWeekInfo.results[0].daily[i].date.slice(8).valueOf()); */
                    // console.log(setDate)
                    dataWeek[i].day = dayArray[setDate.getDay()];
                }
                //console.log(cardWeekInfo);
                dataWeek[i].date = cardWeekInfo.results[0].daily[i].date.slice(5);
                dataWeek[i].weatherDay = cardWeekInfo.results[0].daily[i].text_day;
                dataWeek[i].weatherNight = cardWeekInfo.results[0].daily[i].text_night;
                dataWeek[i].temperatureLow = cardWeekInfo.results[0].daily[i].low;
                dataWeek[i].temperatureHigh = cardWeekInfo.results[0].daily[i].high;
            }
        }
        return (
            <div style={{ fontSize:24 }}>
                {
                    (()=>{
                        
                        let html = []
                        //for (let i in [...Array(show_num).keys()]) {
                        for(let i = 0;i < show_num;i++){
                            html.push(
                            <Card size="small" style={{ width: 1250,marginTop: 20,fontSize:20 }}>
                                <Row type="flex" justify="space-around" align="middle" >
                                    <div style={{minWidth:200}}>
                                        <span>{dataWeek[i].day}</span>
                                        <span style={{ marginLeft: 10 }}>{dataWeek[i].date}</span>
                                    </div>
                                    <div style={{minWidth:200}}>
                                        <IconFont type = "icon-weatherday" style={{ fontSize: '25px' }}/>
                                        <span style={{ marginLeft: 10 }}>{dataWeek[i].weatherDay}</span>
                                    </div>
                                    <div style={{minWidth:200}}>
                                        <IconFont type = "icon-weathernight" style={{ fontSize: '25px' }}/>
                                        <span style={{ marginLeft: 10 }}>{dataWeek[i].weatherNight}</span>
                                    </div>
                                    <div style={{minWidth:200}}>
                                        <span>{dataWeek[i].temperatureLow}</span>
                                        <span>℃</span>
                                        <span>～</span>
                                        <span>{dataWeek[i].temperatureHigh}</span>
                                        <span>℃</span>
                                    </div>
                                </Row>
                            </Card>)
                        }
                        return html
                    })()
                }
                <div style={{ width: 1250,marginTop: 20,fontSize:20 }}>
                    <Button id="showmore-btn" onClick={()=>{this.setState({showMore: !this.state.showMore})}}>
                        {
                            this.state.showMore ? "点击收起更多"
                                : "点击加载更多"
                        }
                    </Button>
                </div>
            </div>
        );
    }
}
export default CardWeek;