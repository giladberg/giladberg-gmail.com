import React, { Component } from 'react'
import Navbar from './Navbar'
import { Waypoint } from 'react-waypoint';
import Elevator from 'elevator.js'

import eventBusService from "../../services/eventBusService.js";
export default class Header extends Component {
    handleEnter = (link) => {
        eventBusService.emit('scrolling', link);
    }
    move=(link)=>{
        link = '#' + link
        let elevator = new Elevator({
            targetElement: document.querySelector(link),
        });
        elevator.elevate()
    }
    render() {
        return (
            <Waypoint scrollableAncestor={window}
                bottomOffset='50%'
                topOffset='100%'
                onEnter={this.handleEnter.bind(null, 'home')}>
                <header id="home" className="header flex container ">
                    <div className="square-narrow"></div>
                    <div className="first  flex column">
                        <Navbar />
                        <div className="box">
                            <div className="square"></div>
                            <h1>gilad bergmann</h1>
                            <h3>Full Stack Developer</h3>
                            <div className="buttons">
                                <button onClick={this.move.bind(null,'contact')} className="hire-me">hire me</button>
                                <button onClick={this.move.bind(null,'about')} className="explore-more">explore more</button>
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
