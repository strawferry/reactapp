import React, { Component } from 'react';


import  Footer  from '../../components/Footer';

export default class App extends Component {

    constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
    }


    handleClick() {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        this.props.history.push('/wap/me');
    }

    render() {

        return(
            <div>
                <div>hello wap app</div>
                <div onClick={()=>{
                    this.handleClick();
                }}>push to me</div>
                <Footer selected={1} onTab={(e)=>{this.props.history.push(e);}} />
            </div>
        );
    }
}