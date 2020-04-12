import React, { Component } from 'react'
import Elevator from 'elevator.js'

import eventBusService from "../../services/eventBusService";
import NavPreview from './NavPreview';
import Logo from '../../imgs/logo.png'

export default class NavList extends Component {
    eventKiller = null;
    state = {
        links: ['home', 'about', 'skills', 'service', 'portfolio', 'contact'],
        currClicked: 'home',
        currClickedMode: true
    }

    changeCurrClickedMode = (status) => {
        this.setState({currClickedMode:status})
    }
    componentDidMount() {
        this.eventKiller = eventBusService.on('scrolling', (link) => {
            let index = this.state.links.indexOf(link)
            let currClicked = this.state.links[index]
            this.setState({ currClicked })
        })
    }
    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }
    move = (link) => {
        if (link === this.state.currClicked) return
        link = '#' + link
        let elevator = new Elevator({
            targetElement: document.querySelector(link),
        });
        elevator.elevate()
    }
    render() {
        return (
            <ul

                className={`navbar-list clean-list flex ${this.props.openMenu}`}>
                <span onClick={this.props.closeMenue} className="icon-cross close-menu"></span>
                
                {this.state.links.map((link, index) => {
                    return <NavPreview
                        onOpenMenu={this.props.onOpenMenu}
                        currClickedMode={this.state.currClickedMode}
                        changeCurrClickedMode={this.changeCurrClickedMode}
                        currClicked={this.state.currClicked}
                        key={index}
                        link={link}
                        move={this.move} />
                })}
                <img className="logo" src={Logo} alt={Logo}/>
            </ul>
        )
    }
}
