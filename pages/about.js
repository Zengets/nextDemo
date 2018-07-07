/**
 * Created by kurosaki on 2018/7/7.
 */
import React, { Component } from 'react';
import Link from 'next/link'
import Layout from './public/Layout'

class About extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Layout cur="about">
                <p>
                    {this.props.url.query.title}
                </p>
            </Layout>

        )
    }
}
export default About