/**
 * Created by kurosaki on 2018/7/7.
 */
import React, { Component } from 'react';
import Link from 'next/link'//客户端路由
import { routelist } from './routeList'
//css加载方式 css in js

const linkStyle = {
    display:"inline",
    float:"left",
    marginRight: 15,
    backgroundColor:"#009cff",
    color:"#fff",
    borderRadius:8,
    padding:12
}
//路由美化 Link标签
const PostLink = (props) => (
    <li style={linkStyle} className={props.cur?"cur":""} >
        <Link as={`/${props.id}`} href={`${props.route}?title=${props.title}`}>
            <a style={{}}>{props.title}</a>
        </Link>
        <style jsx>
            {`
              a {
                text-decoration: none;
                color: #fff;
              }
              li:hover {
                opacity: 0.6;
              }
              .cur{
                color:#000;
                background-color:#95de90 !important;
              }
              .cur a{
                text-decoration: none;
                color: #000;
              }
            `}
        </style>
    </li>
)


export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let cur = this.props.cur;
        return (
            <div className="set">
                <ul>
                    {
                        routelist.map((item,i)=>{
                            return(
                                <PostLink
                                  key={i}
                                  cur={cur==item.cur?true:false}
                                  route={item.route}
                                  id={item.cover}
                                  title={item.title}
                                />
                            )
                        })

                    }
                </ul>
                <style jsx>
                    {`
                       .set{
                         overflow:hidden;
                         clear:both
                       }
                       ul {
                            overflow: hidden;
                            padding: 0;
                            margin: 0;
                        }

                    `}
                </style>
            </div>
        )
    }
}

