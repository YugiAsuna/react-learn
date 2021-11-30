import React, {Component} from 'react';
import './Ball.css'

class Ball extends Component {

    constructor(props) {
        super(props);
        this.state = {
            left: this.props.left || 0,
            top: this.props.top || 0,
            xSpeed: this.props.xSpeed / 1000 * 60 || 0,
            ySpeed: this.props.ySpeed / 1000 * 60 || 0
        }
        this.move()
    }

    move(){
        const container = document.getElementById('root')
        const newLeft = this.state.left + this.state.xSpeed
        const newTop = this.state.top + this.state.ySpeed
        newLeft >= container.clientWidth - this.props.size
            ? this.setState({left: container.clientWidth, xSpeed: -this.state.xSpeed * 1.1})
            : this.setState({left: newLeft})
        newLeft <= 0
            ? this.setState({left: 0, xSpeed: -this.state.xSpeed * 1.1})
            : this.setState({left: newLeft})
        newTop >= container.clientHeight - this.props.size
            ? this.setState({top: container.clientHeight, ySpeed: -this.state.ySpeed * 1.1})
            : this.setState({top: newTop})
        newTop <= 0
            ? this.setState({top: 0, ySpeed: -this.state.ySpeed * 1.1})
            : this.setState({top: newTop})
        requestAnimationFrame(() => {this.move()})
    }

    render() {
        return (
            <div className="ball" style={{
                width: this.props.size,
                height: this.props.size,
                left: this.state.left,
                top: this.state.top,
                backgroundColor: this.props.bgColor
            }}></div>
        );
    }
}

export default Ball;