import React, {Component} from 'react';
import './PageBtn.css'

class PageBtn extends Component {
    render(props) {
        if(this.props.type === 'number'){
            return (
                <span className="page-btn">{this.props.number}</span>
            );
        }
    }
}

export default PageBtn;