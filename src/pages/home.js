



import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTest } from '../actions/home';

class home extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    render() {
        return(
            <div>
                home
                <div onClick={()=>{
                    this.props.actions.setTest('dispatch 设置');
                }}>setStr: {this.props.home.str}</div>
                <div onClick={()=>{this.props.history.push('/me')}}> router to me</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    home: state.home
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        setTest
    }, dispatch),
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(home);