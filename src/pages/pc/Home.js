
import React, { Component } from 'react';


export default class Home extends Component {

    constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
    }

    handleClick(e) {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        this.props.history.push(e);
    }

    render() {

        return(
            <div>
                <div>hello , this is in pc home</div>
                <div onClick={()=>{this.handleClick('/app')}}>
                    push to app
                </div>
                <div onClick={()=>{this.handleClick('/me')}}>
                    push to me
                </div>
                <div onClick={()=>{this.props.history.goBack()}}>
                    back
                </div>
            </div>
        );
    }
}