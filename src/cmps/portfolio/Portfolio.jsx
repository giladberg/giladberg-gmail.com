import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint';

import eventBusService from "../../services/eventBusService.js";
import PortfolioList from './PortfolioList'
import span from '../../imgs/span.png'
import taskit from '../../imgs/ttaskit.png'
import appsus from '../../imgs/appsus.png'
import memegenerator from '../../imgs/memegeneretor.png'
import minesweeper from '../../imgs/minesweeper.png'
import devconnector from '../../imgs/dev.png'
import cinema from '../../imgs/cinema.png'
import snake from '../../imgs/snake.png'
export default class Portfolio extends Component {
    state = {
        portfolio: [
            {
                id: 1,
                title: 'task it',
                desc: 'Project management system like trello with react, node.js, socket.io and drag n drop',
                img: taskit,
                website: 'https://app-taskit.herokuapp.com/'

            },
            {
                id: 2,
                title: 'appsus',
                desc: 'Email and Note include one app like google keep and gmail with react',
                img: appsus,
                website: 'https://giladberg.github.io/appSus/#/'
            },
            {
                id: 3,
                title: 'meme generator',
                desc: 'Meme generator app with canvas and drag n drop',
                img: memegenerator,
                website: 'https://giladberg.github.io/meme-generator/'
            },
            {
                id: 4,
                title: 'mine sweeper',
                desc: 'Mine sweeper game with vanilla java script',
                img: minesweeper,
                website: 'https://giladberg.github.io/mine-sweeper/'
            },
            {
                id: 5,
                title: 'developer connector',
                desc: 'Mini social network  with react hooks, node.js, jwt.',
                img: devconnector,
                website: 'https://gilad-bergmann-social-network.herokuapp.com/'
            },
            {
                id: 6,
                title: 'cinema library',
                desc: 'Mini cinmea library that conect to omdb api.',
                img: cinema,
                website: 'http://cinema-gilad-bergmann.herokuapp.com/'
            },
            {
                id: 7,
                title: 'snake',
                desc: 'Snake game with canvas',
                img: snake,
                website: 'https://gilad-bergmann-snake.herokuapp.com/'
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
                bottomOffset='80%'
                topOffset='15%'
                onEnter={this.handleEnter.bind(null, 'portfolio')}>
                <section id="portfolio" className="portfolio container flex column align-center">
                    <h2 className="titles">my recent works</h2>
                    <img className="underline" src={span} alt={span} width="60" />
                    <PortfolioList portfolio={this.state.portfolio} />
                </section>
            </Waypoint>
        )
    }
}
