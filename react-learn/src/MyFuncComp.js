import React from 'react'


// 函数组件首字母必须大写，必须返回一个React元素，首字母小写将会被认为是一个普通的 html 元素
export default function MyFuncComp(prop){
    return <h1>组件内容, 当前传递数字为: {prop.number}</h1>
}
