import React, { Component } from 'react'
import Elevator from 'elevator.js'

import eventBusService from "../../services/eventBusService";
import NavPreview from './NavPreview'

export default class NavList extends Component {
    eventKiller = null;
    state = {
        links: ['home', 'about', 'skills', 'service', 'portfolio', 'contact'],
        currClicked: 'home',
        index:0,
        currPageYOffset: 0,
        scrollingMode:true
    }
    

    componentDidMount() {
        this.eventKiller = eventBusService.on('scrolling', (data) => {
          // console.log(isEnter)
            this.scrolling(data.link,data.isEnter)
            //  console.log(this.state.currClicked)
            //  console.log(window.pageYOffset,this.state.currPageYOffset)
            //  console.log(link,this.props.scrollingMode)
           // this.regularScroll(data.link)
            // if(this.props.scrollingMode)this.regularScroll(link)
            // this.setState({ currPageYOffset: window.pageYOffset })
  
        })
    }
    scrolling=(link,isEnter)=>{
      console.log(link)
      console.log('isEnter', isEnter) 
        let indexOfCurrClicked = this.state.links.indexOf(this.state.currClicked)
        let indexOfLink = this.state.links.indexOf(link)
        if(Math.abs(indexOfLink - indexOfCurrClicked)!== 1 && !isEnter){
           this.setState({currPageYOffset: window.pageYOffset})
            return
        }
        let links=this.state.links
        let diff=window.pageYOffset>this.state.currPageYOffset?1:-1
        let index=(this.state.index+diff)%links.length
        let currClicked=links[index]
        this.setState({ currPageYOffset: window.pageYOffset,index,currClicked })

    }
    regularScroll=(link)=>{
        let indexOfCurrClicked = this.state.links.indexOf(this.state.currClicked)
        let indexOfLink = this.state.links.indexOf(link)
        // console.log('link', link) 
        // console.log('indexOfCurrClicked', indexOfCurrClicked) 
        // console.log('indexOfLink', indexOfLink) 
        // console.log('window.pageYOffset', window.pageYOffset) 
        // console.log('this.state.currPageYOffset', this.state.currPageYOffset) 
        if ((indexOfLink - indexOfCurrClicked === 1 && window.pageYOffset > this.state.currPageYOffset ) ||
            (indexOfCurrClicked - indexOfLink === 1 && this.state.currPageYOffset >window.pageYOffset )) {
            this.setState({ currClicked: link })
        }
        this.setState({ currPageYOffset: window.pageYOffset })
    }
    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }
    move = (link) => {
        if(link === this.state.currClicked)return
        link = '#' + link
        let elevator = new Elevator({
            targetElement: document.querySelector(link),
            endCallback: ()=> {
                    console.log('finish')
                link=link.slice(1)
              //  this.setState({currClicked:link})
              
                this.props.changeScrollingMode(true)
              }
        });
        this.props.changeScrollingMode(false)
        elevator.elevate()
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
// let indexOfCurrClicked = this.state.links.indexOf(this.state.currClicked)
// let indexOfLink = this.state.links.indexOf(link)
// if (indexOfLink - indexOfCurrClicked === 1 && window.pageYOffset - this.state.currPageYOffset >= 0 ||
//     indexOfCurrClicked - indexOfLink === 1 && this.state.currPageYOffset - window.pageYOffset >= 0) {
//     this.setState({ currClicked: link })
// }
// this.setState({ currPageYOffset: window.pageYOffset })