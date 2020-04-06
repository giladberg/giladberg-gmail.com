import React, { Component } from 'react'


export default class NavPreview extends Component {
    
    move = () => {
        this.props.move(this.props.link)
    }
    render() {
        let active=this.props.currClicked===this.props.link?'active':''
        return (
            <li className={`navbar-preview flex align-center ${active}`} onClick={this.move}>
                {this.props.link}
            </li>

        )
    }
}
