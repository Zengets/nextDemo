/**
 * Created by kurosaki on 2018/7/7.
 */
import React, { Component } from 'react';
import Header from './Header';
//封装公用组件Layout

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header cur={props.cur}/>
        {props.children}
    </div>
)

export default Layout