import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Pager from "./components/Demo-003-Pager/Pager";


ReactDOM.render(
    (
        <>
            <Pager page={1} pageSize={10} total={500} pageCount={5}></Pager>
            <Pager page={6} pageSize={10} total={500} pageCount={5}></Pager>
            <Pager page={12} pageSize={10} total={500} pageCount={5}></Pager>
            <Pager page={10} pageSize={10} total={500} pageCount={10}></Pager>
            <Pager page={17} pageSize={10} total={500} pageCount={10}></Pager>
            <Pager page={33} pageSize={10} total={500} pageCount={10}></Pager>
        </>
    ),
    document.getElementById('root')
)
;


