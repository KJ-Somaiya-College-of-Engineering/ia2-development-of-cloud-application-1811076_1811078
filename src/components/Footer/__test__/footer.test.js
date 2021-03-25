import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './../Footer';
import {isTSAnyKeyword} from '@babel/types';

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Footer></Footer>, div);
})