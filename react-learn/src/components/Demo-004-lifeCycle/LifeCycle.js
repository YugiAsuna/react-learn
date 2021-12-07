import React, {Component} from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 1
        }
        console.log('constructor 构造函数')
    }

    componentWillMount() {
        console.log('componentWillMount 组件即将挂载')
    }

    componentDidMount() {
        console.log('componentDidMount 组件挂载完毕')
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps 组件接收到新的属性值')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate 组件是否应该重新渲染')
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate 组件即将重新渲染')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate 组件重新渲染完毕')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount 组件即将销毁')
    }


    render() {
        console.log('render 组件渲染')
        return (
            <div>
                {this.state.n}
            </div>
        );
    }
}

export default LifeCycle;