import React, {Component} from 'react';
import {getRandom} from "../../utils";
import Ball from "../Demo-002-Ball/Ball";

const container = document.getElementById('root')

class BallList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ballInfoList: []
        }
        container.onclick = () => {
            this.addBall()
        }
    }

    addBall() {
        const info = {
            size: getRandom(10, 50),
            top: getRandom(0, 500),
            left: getRandom(0, 500),
            xSpeed: getRandom(0, 50),
            ySpeed: getRandom(0, 50),
            bgColor: `rgba(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
        }
        this.setState({
            ballInfoList: [...this.state.ballInfoList, info]
        })
    }

    render() {
        const balls = this.state.ballInfoList.map((item, index) => <Ball key={index} {...item}></Ball>)
        return (
            <>
                {balls}
            </>
        );
    }
}

export default BallList;