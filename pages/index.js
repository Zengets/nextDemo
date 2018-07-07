/**
 * Created by kurosaki on 2018/7/7.
 */
import React, { Component } from 'react';
import Link from 'next/link'
import Layout from './public/Layout'

export default class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Layout cur="index">
                <p>
                    {this.props.url.query.title?this.props.url.query.title:"Welcome holyshit"}
                </p>
            </Layout>

        )
    }
}