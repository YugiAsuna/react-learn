import React, {Component} from 'react';
import './Pager.css'
class Pager extends Component {
    /**
     * 添加功能按钮
     * @param currentNum 当前页码
     * @param count 页码按钮数量
     * @returns {(JSX.Element|*)[]}
     */
    addFunctions(currentNum, count){
        return [
                <span key="prev" className={`page-btn prev`}><span className="icon"></span></span>,
                this.getPages(currentNum, count),
                <span key="next" className={`page-btn next`}><span className="icon"></span></span>
            ]
    }

    // 获取页码元素数组
    getPages(currentNum, count) {
        let pageArr = this.getNumbers(this.props.currentPage, this.props.pageCount)
        return pageArr.map((item, index) => (
            <span key={index}
                  className={`page-btn ${item === this.props.currentPage ? 'active' : ''}`}
                  onClick={() => this.props.changePage(item)}
            >{item}</span>
        ))
    }

    // 获取页码数字数组
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
        const pageMax = Math.ceil(this.props.total / this.props.pageSize)
        if (count <= 0) {
            return null
        }
        // 若页码超出当前最大页数，则不在右侧继续添加
        return currentNum + 1 <= pageMax ? currentNum + 1 : null
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
                {this.addFunctions(this.props.currentPage, this.props.pageCount)}
            </div>
        );
    }
}

export default Pager;