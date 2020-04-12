import React, { Component } from 'react'
import Elevator from 'elevator.js'

import IconList from './IconList'

export default class Footer extends Component {
    state = {
        icons: [
            {
                name: 'icon-codewars',
                link: 'https://www.codewars.com/users/giladberg'
            },
            {
                name: 'icon-facebook',
                link: 'https://www.facebook.com/gilad.bergmann'
            },
            {
                name: 'icon-linkedin2',
                link: 'https://www.linkedin.com/in/gilad-bergmann/'
            },
            {
                name: 'icon-git',
                link: 'https://github.com/giladberg'
            }
        ]
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
            <footer className="footer">
                <div className="container flex align-center justify-space-between">
                    <IconList icons={this.state.icons} />
                    <div 
                    onClick={this.move.bind(null,'home')}
                    className="circule flex align-center justify-center">
                        <span className="icon-long-arrow-up"></span>
                    </div>
                </div>


            </footer>
        )
    }
}
