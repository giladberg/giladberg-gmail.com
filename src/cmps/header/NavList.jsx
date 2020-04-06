import React, { Component } from 'react'
import Elevator from 'elevator.js'

import eventBusService from "../../services/eventBusService";
import NavPreview from './NavPreview'

export default class NavList extends Component {
    eventKiller = null;
    state = {
        links: ['home', 'about', 'skills', 'service', 'portfolio', 'contact'],
        currClicked: 'home',
        currPageYOffset: 0,
        navbarClick: false
    }

    componentDidMount() {
        this.eventKiller = eventBusService.on('scrolling', (link) => {
            
            let indexOfCurrClicked = this.state.links.indexOf(this.state.currClicked)
            let indexOfLink = this.state.links.indexOf(link)
            if ((indexOfLink - indexOfCurrClicked === 1 && window.pageYOffset - this.state.currPageYOffset >= 0 ||
                indexOfCurrClicked - indexOfLink === 1 && this.state.currPageYOffset - window.pageYOffset >= 0) &&
                !this.state.navbarClick) {
                    console.log(this.state.navbarClick)
                this.setState({ currClicked: link })
            }
            this.setState({ currPageYOffset: window.pageYOffset })
        })
    }
    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }
    move = (link) => {
        this.setState({ currClicked: link })
        link = '#' + link
        let elevator = new Elevator({
            targetElement: document.querySelector(link)
        });
        this.setState({ navbarClick: true },
            () => {
                elevator.elevate()
                console.log('bb')
                this.setState({ navbarClick: false })
            }
        )


    }
    render() {
        return (
            <ul className={`navbar-list clean-list flex ${this.props.openMenu}`}>
                <span onClick={this.props.closeMenue} className="icon-cross close-menu"></span>
                {this.state.links.map((link, index) => {
                    return <NavPreview
                        currClicked={this.state.currClicked}
                        key={index}
                        link={link}
                        move={this.move} />
                })}

            </ul>
        )
    }
}
