import React from 'react';
import ReactDOM from 'react-dom';
import StudentsList from "./components/StudentsList";

const s = [
        {
                name: '鸡哥',
                email: '102',
                sex: 1,
                birth: '777'
        },
        {
                name: '鸡哥',
                email: '102',
                sex: 1,
                birth: '777'
        },
        {
                name: '鸡哥',
                email: '102',
                sex: 1,
                birth: '777'
        },
        {
                name: '鸡哥',
                email: '102',
                sex: 1,
                birth: '777'
        }
]

ReactDOM.render(
    <div>
            <StudentsList students={s}></StudentsList>
    </div>,
    document.getElementById('root')
);



// ReactDOM.render(
//     // 与 Vue template 相同, 为<React.Fragment></React.Fragment> 语法糖
//     <>
//         <h1>Hello World <span>span 标签</span></h1>
//     </>,
//     document.getElementById('root')
// );

// const img = (<img src="https://img0.baidu.com/it/u=3913504614,534122190&fm=26&fmt=auto" alt=""/>)
// ReactDOM.render(img, document.getElementById('root'))
//

// JSX 表达式中 null undefined false 将不会显示