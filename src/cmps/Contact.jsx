import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint';

import eventBusService from "../services/eventBusService.js";
import emailService from '../services/emailService'
import span from '../imgs/span.png'


export default class Contact extends Component {
    state = { contact: { name: '', email: '', msg: '' } }
    handleEnter = (link) => {
        eventBusService.emit('scrolling', link);
    }
    onHundleInput = (e) => {
        let value = e.target.value
        let name = e.target.name
        let contact = this.state.contact
        contact[name] = value
        this.setState({ contact })
    }
    onSendEmail = async () => {
        if(!this.isValidateEmail(this.state.contact.email)) eventBusService.emit('modal', {type:'danger',txt:'Email is not valid!'});
        else if(!this.state.contact.name)eventBusService.emit('modal', {type:'danger',txt:'Please write your name!'});
        else if(!this.state.contact.msg)eventBusService.emit('modal', {type:'danger',txt:'Please write your message!'});
        else{
            const isSentEmail = await emailService.sendEmail(this.state.contact)
            if(isSentEmail){
                eventBusService.emit('modal', {type:'success',txt:'Email sent successfully!'});
                let contact={name: '', email: '', msg: '' }
                this.setState({contact})
            }
            else eventBusService.emit('modal', {type:'danger',txt:'We have problem to send you email, please try again!'});
            
        }
    }
    isValidateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    } 
    render() {

        return (
            <Waypoint
                fireOnRapidScroll={false}
                scrollableAncestor={window}
                bottomOffset='40%'
                topOffset='5%'
                onEnter={this.handleEnter.bind(null, 'contact')}
                onLeave={this.handleEnter.bind(null, 'portfolio')}>
                <section id="contact" className="contact container flex column align-center">
                    <h2 className="titles">contact</h2>
                    <img className="underline" src={span} alt={span} width="60" />
                    <form  >
                        <input onChange={this.onHundleInput} value={this.state.contact.name} placeholder="Name" name="name" type="text" className="name" />
                        <input onChange={this.onHundleInput} value={this.state.contact.email} placeholder="Email" name="email" type="text" className="email" />
                        <textarea onChange={this.onHundleInput} value={this.state.contact.msg} placeholder="Message" name="msg" id="" cols="30" rows="10" className="msg"></textarea>

                    </form>
                    <button onClick={this.onSendEmail}>hire me<span className="paper icon-paper-plane-o"></span></button>
                </section>
            </Waypoint>
        )
    }
}
