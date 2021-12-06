import React, {Component} from 'react';
import Pager from "./Pager";

class PagerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: props.currentPage || 1,
            pageSize: props.pageSize || 10,
            total: props.total || 0,
            pageCount: props.pageCount || 5
        }
    }
    handlePageChange = (currentPage) => {
        console.log(currentPage)
        this.setState({
            currentPage: currentPage
        })
    }
    render() {
        return (
            <div>
                <Pager {...this.state} changePage={this.handlePageChange}></Pager>
            </div>
        );
    }
}

export default PagerContainer;