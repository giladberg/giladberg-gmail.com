import React, { Component } from 'react'
import Navbar from './Navbar'
import { Waypoint } from 'react-waypoint';

import eventBusService from "../../services/eventBusService.js";
export default class Header extends Component {
    handleEnter = () => {
       // console.log('Header')
      //  eventBusService.emit('scrolling' , 'home');
    }
    render() {
        return (
            <Waypoint scrollableAncestor={window}  onEnter={this.handleEnter}>
                <header id="home" className="header flex container ">
                    <div className="square-narrow"></div>
                    <div className="first  flex column">
                        <Navbar />
                        <div className="box">
                            <div className="square"></div>
                            <h1>gilad bergmann</h1>
                            <h3>Full Stack Developer</h3>
                            <div className="buttons">
                                <button className="hire-me">hire me</button>
                                <button className="explore-more">explore more</button>
                            </div>
                        </div>
                    </div>
                    <div className="second ">
                        {/* <div className="blend-mode"></div> */}
                    </div>
                </header>
            </Waypoint>
        )
    }
}
