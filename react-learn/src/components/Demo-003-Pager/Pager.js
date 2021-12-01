import React, {Component} from 'react';
import PageBtn from "./PageBtn";

class Pager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: props.page || 1,
            pageMax: Math.floor((props.total + props.pageSize - 1) / props.pageSize)
        }
        this.pages = this.getPages(this.state.page, this.props.pageCount)
    }

    getPages(currentNum, count) {
        let pageArr = this.getNumbers(this.state.page, this.props.pageCount)
        return pageArr.map((item, index) => <PageBtn key={index} type="number" number={item}></PageBtn>)
    }


    getNumbers(currentNum, count, numArr = []) {
        // 当前页码传参丢失
        if (!currentNum) {
            return
        }
        let c = count
        let pageArr = [...numArr]
        // 当前所需页码获取完毕
        if (c <= 0) {
            return pageArr
        }
        // 初始化页码数组
        if (pageArr.length === 0) {
            c = count - 1
            pageArr = [currentNum]
        }
        // 取当前最大页码，在右侧添加页码
        const rightNum = this.addRight(pageArr[pageArr.length - 1], c)
        if (rightNum) {
            pageArr = [...pageArr, rightNum]
            c--
        }
        // 取当前最小页码，在左侧添加页码
        const leftNum = this.addLeft(pageArr[0], c)
        if (leftNum) {
            pageArr = [leftNum, ...pageArr]
            c--
        }
        if(!rightNum && !leftNum){
            c = 0
        }
        return this.getNumbers(currentNum, c, pageArr)
    }

    addRight(currentNum, count) {
        if (count <= 0) {
            return null
        }
        // 若页码超出当前最大页数，则不在右侧继续添加
        return currentNum + 1 <= this.state.pageMax ? currentNum + 1 : null
    }

    addLeft(currentNum, count) {
        if (count <= 0) {
            return null
        }
        // 若最小页码已经为 1，则不在左侧继续添加
        return currentNum - 1 > 0 ? currentNum - 1 : null
    }

    render() {
        return (
            <div>
                {this.pages}
            </div>
        );
    }
}

export default Pager;