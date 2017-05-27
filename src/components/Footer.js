import React from 'react';


export default class Footer extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        };
        this.handleClick = this.handleClick.bind(this);
    }
    static defaultProps = {
        selected: 0,
        onTab: (e)=>{console.log('onTab: ' + e)}
    };
    static propTypes = {

    };
    chose = (e)=>{
        switch (e){
            case 0:
                return '/wap';
            case 1:
                return '/wap/app';
            case 2:
                return '/wap/me';
            default:
                return '/wap';
        }
    };
    handleClick(e){
        if(this.props.selected === e){
        }else{
            this.props.onTab(this.chose(e));
        }
    };
    render() {
        return (
            <div className="footer">
                <div onClick={()=>this.handleClick(0)} className={`footer-wrap ${this.props.selected === 0 ? 'selected': null}`} >
                    {this.props.selected !== 0 ? <div style={{
                        width: '0.42rem',
                        height: '0.42rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />:<div style={{
                    width: '0.42rem',
                    height: '0.42rem',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
                />}
                    <span className={this.props.selected === 0 ? 'selected': null}>首页</span>
                </div>
                <div onClick={()=>this.handleClick(1)} className={`footer-wrap ${this.props.selected === 1 ? 'selected': null}`} >
                    {this.props.selected !== 1 ? <div style={{
                        width: '0.42rem',
                        height: '0.42rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />:<div style={{
                        width: '0.42rem',
                        height: '0.42rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />}
                    <span className={this.props.selected === 1 ? 'selected': null}>消息</span>
                </div>
                <div onClick={()=>this.handleClick(2)} className={`footer-wrap ${this.props.selected === 2 ? 'selected': null}`} >
                    {this.props.selected !== 2 ? <div style={{
                        width: '0.42rem',
                        height: '0.42rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />:<div style={{
                        width: '0.42rem',
                        height: '0.42rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />}
                    <span className={this.props.selected === 2 ? 'selected': null}>我的</span>
                </div>
            </div>
        )
    }
}
