import React, {Component} from 'react';
import Student from "./Student";

class StudentsList extends Component {
    render() {
        // props.students 传递学生数组
        // 获取组件数组
        const students = this.props.students.map(item => <Student {...item}></Student>)
        return (
            <ul>
                {students}
            </ul>
        );
    }
}

export default StudentsList;

