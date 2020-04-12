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
                info: "Utilising node.js frameworks such as Express, I've written services including REST APIs with connecting to data base such as mongodb, mysql. also working with socket.io and with new technologies of the server side.",
                img: backend
            }
        ]
    }
    handleEnter = (link) => {
        eventBusService.emit('scrolling', link);
    }
    render() {
        return (
            <Waypoint
                fireOnRapidScroll={false}
                scrollableAncestor={window}
                bottomOffset='90%'
                topOffset='25%'
                onEnter={this.handleEnter.bind(null, 'service')}>
                <section id="service" className="service flex align-center ">
                    <div className="container">
                    <div className="wrapper  flex column align-center ">
                        <h2 className="titles">what i do</h2>
                        <img className="underline" src={span} alt={span} width="60" />
                        <ServiceList services={this.state.services} />
                    </div>
                    </div>
                   
                </section>
            </Waypoint>
        )
    }
}
