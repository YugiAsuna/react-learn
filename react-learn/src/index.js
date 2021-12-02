import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import PagerContainer from "./components/Demo-003-Pager/PagerContainer";


ReactDOM.render(
    (
        <>
            <PagerContainer currentPage={1} pageSize={10} total={500} pageCount={5}></PagerContainer>
            <PagerContainer currentPage={6} pageSize={10} total={500} pageCount={5}></PagerContainer>
            <PagerContainer currentPage={12} pageSize={10} total={500} pageCount={5}></PagerContainer>
            <PagerContainer currentPage={10} pageSize={10} total={500} pageCount={10}></PagerContainer>
            <PagerContainer currentPage={17} pageSize={10} total={500} pageCount={10}></PagerContainer>
            <PagerContainer currentPage={33} pageSize={10} total={500} pageCount={10}></PagerContainer>
        </>
    ),
    document.getElementById('root')
)
;


