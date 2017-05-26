

import React, { Component } from 'react';


export default class me extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    render() {
        return(
            <div>
                me
                <div onClick={()=>{this.props.history.goBack()}}> goback </div>
            </div>
        );
    }
}
