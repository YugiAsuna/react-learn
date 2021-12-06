import React, {Component} from 'react';
import './Pager.css'

class Pager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageMax : Math.ceil(this.props.total / this.props.pageSize)
        }
    }
    /**
     * 添加功能按钮
     * @param currentNum 当前页码
     * @param count 页码按钮数量
     * @returns {(JSX.Element|*)[]}
     */
    addFunctions(currentNum, count) {
        // 首页按钮
        const firstBtn = <span key="first"
                               className={`page-btn first ${currentNum === 1 ? 'disabled' : ''}`}
                               onClick={() => {
                                   return currentNum > 1 ? this.toPage(1) : ''
                               }}
        ><span className="icon"></span>首页</span>
        // 上一页按钮
        const prevBtn = <span key="prev"
                              className={`page-btn prev ${currentNum <= 1 ? 'disabled' : ''}`}
                              onClick={() => {
                                  return currentNum > 1 ? this.toPage(currentNum - 1) : ''
                              }}
        ><span className="icon"></span></span>
        // 下一页按钮
        const nextBtn = <span key="next"
                              className={`page-btn next ${currentNum === this.state.pageMax ? 'disabled' : ''}`}
                              onClick={() => {
                                  return currentNum < this.state.pageMax ? this.toPage(currentNum + 1) : ''
                              }}
        ><span className="icon"></span></span>
        // 尾页按钮
        const lastBtn = <span key="last"
                               className={`page-btn last ${currentNum === this.state.pageMax ? 'disabled' : ''}`}
                               onClick={() => {
                                   return currentNum < this.state.pageMax ? this.toPage(this.state.pageMax) : ''
                               }}
        ><span className="icon"></span>尾页</span>

        if(this.props.total === 0){
            return null
        }
        if(this.props.pageCount >= this.state.pageMax){
            return [
                prevBtn,
                this.getPages(currentNum, count),
                nextBtn,
            ]
        } else {
            return [
                firstBtn,
                prevBtn,
                this.getPages(currentNum, count),
                nextBtn,
                lastBtn
            ]
        }
    }

    // 获取页码元素数组
    getPages(currentNum, count) {
        let pageArr = this.getNumbers(this.props.currentPage, this.props.pageCount)
        return pageArr.map((item, index) => (
            <span key={index}
                  className={`page-btn ${item === this.props.currentPage ? 'active' : ''}`}
                  onClick={() => this.toPage(item)}
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
            // 如果右侧可以添加页码，则计数 -1
            pageArr = [...pageArr, rightNum]
            c--
        }
        // 取当前最小页码，在左侧添加页码
        const leftNum = this.addLeft(pageArr[0], c)
        if (leftNum) {
            // 如果左侧可以添加页码，则计数 -1
            pageArr = [leftNum, ...pageArr]
            c--
        }
        if (!rightNum && !leftNum) {
            // 左右均无法添加页码时，计数清零
            c = 0
        }
        return this.getNumbers(currentNum, c, pageArr)
    }

    // 当前页右侧添加页码
    addRight(currentNum, count) {
        if (count <= 0) {
            return null
        }
        // 若页码超出当前最大页数，则不在右侧继续添加
        return currentNum + 1 <= this.state.pageMax ? currentNum + 1 : null
    }

    // 当前页左侧添加页码
    addLeft(currentNum, count) {
        if (count <= 0) {
            return null
        }
        // 若最小页码已经为 1，则不在左侧继续添加
        return currentNum - 1 > 0 ? currentNum - 1 : null
    }

    // 页码跳转
    toPage(page){
        if(page === this.props.currentPage){
            return
        }
        this.props.changePage && this.props.changePage(page)
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