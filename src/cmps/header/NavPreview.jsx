import React, { Component } from 'react'


export default class NavPreview extends Component {
    
    move = () => {
        this.props.move(this.props.link)
        this.props.onOpenMenu()
        this.onChangeCurrClickedMode(true)
    }
    onChangeCurrClickedMode=(status)=>{
        this.props.changeCurrClickedMode(status)
    }
    render() {
        
        let active=this.props.currClicked ===this.props.link &&this.props.currClickedMode ?'active':''
        return (
            <li 
            onMouseEnter={this.onChangeCurrClickedMode.bind(null,false)}
            onMouseLeave={this.onChangeCurrClickedMode.bind(null,true)}
            className={`navbar-preview flex align-center ${active}`} 
            onClick={this.move}>
                {this.props.link}
            </li>

        )
    }
}
