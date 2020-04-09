import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint';

import eventBusService from "../services/eventBusService.js";
import span from '../imgs/span.png'


export default class Contact extends Component {
    state={contact:{name:'',email:'',msg:''}}
    handleEnter = (link, isEnter) => {
        let data = { link, isEnter }
        eventBusService.emit('scrolling', data);
    }
    onHundleInput=(e)=>{
        let value=e.target.value
        let name=e.target.name
       let contact=this.state.contact
       contact[name]=value
       this.setState({contact})
    }
    render() {
        console.log(this.state.contact)
        return (
            <Waypoint
                fireOnRapidScroll={false}
                scrollableAncestor={window}
                onLeave={this.handleEnter.bind(null, 'portfolio', false)}
                onEnter={this.handleEnter.bind(null, 'contact', true)}>
                <section id="contact" className="contact container flex column align-center">
                    <h2 className="titles">contact</h2>
                    <img className="underline" src={span} alt={span} width="60" />
                    <form  >
                        <input onChange={this.onHundleInput}  value={this.state.contact.name} placeholder="Name" name="name" type="text" className="name" />
                        <input onChange={this.onHundleInput} value={this.state.contact.email} placeholder="Email" name="email" type="text" className="email" />
                        <textarea onChange={this.onHundleInput} value={this.state.contact.msg} placeholder="Message" name="msg" id="" cols="30" rows="10" className="msg"></textarea>

                    </form>
                    <button>hire me<span className="paper icon-paper-plane-o"></span></button>
                </section>
            </Waypoint>
        )
    }
}
