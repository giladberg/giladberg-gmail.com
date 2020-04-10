import React, { Component } from 'react'

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
    render() {
        return (
            <footer className="footer">
                <div className="container flex align-center justify-space-between">
                    <IconList icons={this.state.icons} />
                    <h3>gilad bergmann</h3>
                    <div className="circule flex align-center justify-center">
                        <span className="icon-long-arrow-up"></span>
                    </div>
                </div>


            </footer>
        )
    }
}
