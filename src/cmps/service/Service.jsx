import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint';

import eventBusService from "../../services/eventBusService.js";
import span from '../../imgs/span.png'
import frontend from '../../imgs/monitor.png'
import backend from '../../imgs/coding.png'
import ServiceList from './ServiceList'
export default class Service extends Component {
    state = {
        services: [
            {
                title: 'Front-end',
                info: 'As a javascript developer, I have experience in HTML5 and CSS3 techniques. working with react or more advanced javascript MVC frameworks such as angular',
                img: frontend
            },
            {
                title: 'Back-end',
                info: "Utilising node.js frameworks such as Express, I've written services including REST APIs with connecting with data base such as mongodb, mysql..",
                img: backend
            }
        ]
    }
    handleEnter = (link) => {
        console.log('service page')
        eventBusService.emit('scrolling', link);
    }
    render() {
        return (
            <Waypoint
                scrollableAncestor={window}
                bottomOffset='150px'
                topOffset='250px'
                onLeave={this.handleEnter.bind(null, 'skills')}
                onEnter={this.handleEnter.bind(null, 'service')}>
                <section className="service flex align-center">
                    <div id="service" className="wrapper  flex column align-center container">
                        <h2 className="titles">what i do</h2>
                        <img className="underline" src={span} alt={span} width="60" />
                        <ServiceList services={this.state.services} />
                    </div>
                </section>
            </Waypoint>
        )
    }
}
