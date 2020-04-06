import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint';

import eventBusService from "../services/eventBusService.js";



export default class Contact extends Component {
    handleEnter = (link) => {
        eventBusService.emit('scrolling', link);
    }
    render() {
        return (
            <Waypoint
            scrollableAncestor={window}
            onLeave={this.handleEnter.bind(null, 'portfolio')}
            onEnter={this.handleEnter.bind(null, 'contact')}>
            <section id="contact" className="contact container">
             contact   
            </section>
            </Waypoint>
        )
    }
}
