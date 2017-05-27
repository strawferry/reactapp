import React, { Component } from 'react';

export default class NotMatch extends Component {


    render() {

        return(
            <div>
                <div>当前页面不存在</div>
                <div onClick={()=>{
                    this.props.history.goBack();
                }}>返回上一页</div>
                <div onClick={()=>{
                    this.props.history.replace('/');
                }}>返回主页</div>
            </div>
        );
    }
}