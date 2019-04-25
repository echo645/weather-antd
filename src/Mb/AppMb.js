import React, { Component } from 'react';
import {
    Layout,Button,Row,Select
} from 'antd';

import CardHours from './CardHours.js';
import Time from './Time.js'
import CardWeek from './CardWeek.js';
import IconFont from './IconFont.js';
import {provinceData,cityData} from './City';


const {
    Header, Footer, Content,
} = Layout; 
const Option = Select.Option;

class AppMb extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            nowInfo: '',
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0],
            second:cityData[provinceData[0]],
            cardHourInfo: '',
            cardWeekInfo: '',
        };
    }
    componentDidMount() {
        var url = '/now.json?key=Sw45kFrqNlAsy2rj_&location=beijing&language=zh-Hans&unit=c'
        //var url = '/now.json?key=swihhsackqxv9rtp&location=北京&language=zh-Hans&unit=c'
        this.getData(url)
        var urlHour = '/hourly.json?key=Sw45kFrqNlAsy2rj_&location=北京&language=zh-Hans&unit=c&start=0&hours=24'
        this.getHourData(urlHour)
        var urlWeek = '/daily.json?key=Sw45kFrqNlAsy2rj_&location=北京&language=zh-Hans&unit=c&start=0&days=7'
        this.getWeekData(urlWeek)
    }
    getData = (url) => {
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
        if(responseJson.status_code === 'AP010010'){
            alert('该城市暂无数据')
        }else{
            this.setState({
            nowInfo: responseJson
            //now: responseJson.results[0].location.name,
            });
            //console.log(responseJson.results[0].location.name)
        }
        })
    }
    getHourData = (url) => { 
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
        if(responseJson.status_code === 'AP010010'){
        }else{
            this.setState({
            cardHourInfo: responseJson
            });
        }
        })
    }
    getWeekData = (url) => { 
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
        if(responseJson.status_code === 'AP010010'){
        }else{
            this.setState({
            cardWeekInfo: responseJson
            });
        }
        })
    }
    handleProvinceChange = (value) => {
        this.setState({
        cities: cityData[value],
        secondCity: cityData[value][0],
        second:cityData[value]
        });
    }
    onSecondCityChange = (value) => {
        this.setState({
        secondCity: value,
        });
    }
    render() {
        var dataSource = '';
        var bgNum = 6;
        if (!this.state.nowInfo){
        dataSource = {
            city:'Loading',
            temperature:'',
            weatherInfo:'',
            feelsLike:'',
            windDirection:'Loading',
            windScale:'Loading'
        };
        }else{
        bgNum = this.state.nowInfo.results[0].now.code;
        dataSource = {
            city:this.state.nowInfo.results[0].location.name,
            temperature:this.state.nowInfo.results[0].now.temperature,
            weatherInfo:this.state.nowInfo.results[0].now.text,
            feelsLike:this.state.nowInfo.results[0].now.feels_like,
            windDirection:this.state.nowInfo.results[0].now.wind_direction,
            windScale:this.state.nowInfo.results[0].now.wind_scale
        };
        }
        if(!dataSource.feelsLike){
        dataSource.feelsLike = 'Loading'
        dataSource.windDirection = 'Loading'
        dataSource.windScale = 'Loading'
        }
        //console.log(bgNum)
        return (
        <div className='AppMb'>--
            <Layout >
            <Header style={{backgroundImage: "url(" + require("../img/" + bgNum + ".png") + ")", marginBottom:20,minHeight: 260}} >           
                <div className='title' style={{backgroundColor:'rgba(255,255,255,0.2)',fontSize: 45,fontWeight: 650,color:'#fff',width:'100%',textAlign:"center"}}>万象天气</div>
                <div style={{backgroundColor:'rgba(255,255,255,0.2)',width:'100%',fontSize: window.innerWidth/30,fontWeight:600, color:'#000' }}>
                    <Row className="weather-data" type="flex" justify="start" align="middle" style={{ fontWeight: 600}}>
                        <IconFont type = "icon-palce1" />
                        <strong id="palce-id">{dataSource.city}</strong>
                        <Button size = "small" onClick={this.openDiv} style={{ }}>[切换]</Button>
                        <Time/>
                    </Row>
                    <div id="city-select-id" style={{ width: 200, minHeight: 30,display: 'none',position: 'absolute',backgroundColor:'#8B8989',textAlign: 'center',paddingTop: 8}}>
                        <form>
                            <Row type="flex" justify="center" align="middle">
                                <Select
                                    defaultValue={provinceData[0]}
                                    style={{ width: 80 }}
                                    onChange={this.handleProvinceChange}
                                >
                                    {provinceData.map(province => <Option key={province}>{province}</Option>)}
                                </Select>
                                <Select
                                    id="city-select-value"
                                    style={{ width: 80,marginLeft:5 }}
                                    value={this.state.secondCity}
                                    onChange={this.onSecondCityChange}
                                >
                                {this.state.second.map(city => <Option key={city}>{city}</Option>)}
                                </Select>
                            </Row>
                            <div style={{ marginTop: 5 }}>
                                <Button size='small' id="submit-btn" onClick={this.closeDivSubmit}>确定</Button>
                                <Button size='small' id="cancel-btn" onClick={this.closeDivCancel} style={{marginLeft:5 }}>取消</Button>
                            </div>
                        </form>
                    </div>
                    <Row className="Temperature-Info" type="flex" align="bottom" style={{ fontWeight: 650}}>
                        <Row className="Temperature-And-Circle" type="flex" >
                            <span id="temperature-id" style={{ fontSize: 45 }}>{dataSource.temperature}</span>
                            <span style={{ fontSize: 45 }}>°</span>
                            <div id="weather-info-id" style={{ fontSize: 15,paddingTop:10}}>{dataSource.weatherInfo}</div>
                        </Row>
                    </Row>
                    <Row type="flex" style={{ fontSize: 15,fontWeight: 600 }}>
                        <span className="air-info">体感温度&nbsp;</span>
                        <span>{dataSource.feelsLike}</span>
                        <span>℃</span>
                        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                        <span id="wind-id">{dataSource.windDirection}</span>
                        <span>风&nbsp;</span>
                        <span>{dataSource.windScale}</span>
                        <span>&nbsp;级</span>
                    </Row>
                </div>
                </Header>
                <Content style={{ margin: '0 auto',width:'95%'}}>
                    <div style={{ padding: 5,backgroundColor:'rgba(255,255,255,0.5)', minHeight: 600,fontSize:20}}>
                        <CardHours characterDataHour={this.state.cardHourInfo} style={{ width:1300}}/>
                        <CardWeek characterDataWeek={this.state.cardWeekInfo} style={{ width:'100%'}}/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center' }}>
                天气预报网页版
                </Footer>
            </Layout>
        </div>
        );
    }
    //点击切换按钮打开城市切换窗口
    openDiv = () => {
        document.getElementById('city-select-id').style.display = 'block';
    };
    //切换城市加载该城市天气数据
    changeCity = (cityValue) => {
        var changeUrl = '/now.json?key=Sw45kFrqNlAsy2rj_&location=' + cityValue + '&language=zh-Hans&unit=c';
        this.getData(changeUrl);
        var changeHourUrl = '/hourly.json?key=Sw45kFrqNlAsy2rj_&location=' + cityValue + '&language=zh-Hans&unit=c&start=0&hours=24'
        this.getHourData(changeHourUrl)
        var changeWeekUrl = '/daily.json?key=Sw45kFrqNlAsy2rj_&location=' + cityValue + '&language=zh-Hans&unit=c&start=0&days=7'
        this.getWeekData(changeWeekUrl)
    };
    //点击确认按钮，关闭城市切换窗口
    closeDivSubmit = () => {
        document.getElementById('city-select-id').style.display = 'none';
        this.changeCity(this.state.secondCity);
    };
    //点击取消按钮，关闭城市切换窗口
    closeDivCancel = () => {
        document.getElementById('city-select-id').style.display = 'none';
    };
    }
    export default AppMb;