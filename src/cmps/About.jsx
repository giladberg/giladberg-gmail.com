import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint';

import eventBusService from "../services/eventBusService.js";
import span from '../imgs/span.png'
import cv from '../files/giladcv.docx'
export default class About extends Component {
    handleEnter=(link)=>{
        eventBusService.emit('scrolling' ,link );
    }
    
   
    render() {
        return (
            <Waypoint 
            scrollableAncestor={window}
            bottomOffset='90%'
            topOffset='5%'
            fireOnRapidScroll={false}
            onEnter={this.handleEnter.bind(null,'about')}>
                <section id="about" className="about flex column align-center container">
                    <h2  className="titles">About</h2>
                    <img className="underline" src={span} alt={span} width="60" />
                    <p  >I'm a full-stack developer, specializing in React and Node.JS.
                    I have a serious passion for front-end & back-end.
                    I believe in elegant solutions for complex problems.
                    If you are seeking for a developer contact me.</p>
                    <a href={cv} download>download my cv</a>
                </section>
            </Waypoint>
        )
    }
}
//