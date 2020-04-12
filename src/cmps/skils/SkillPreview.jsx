import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint';
export default class SkillPreview extends Component {
   state={isTimeToPlayEffect:false}
    playEffect=(flag)=>{
        this.setState({isTimeToPlayEffect:flag})
    }
    render() {
        const {skill}=this.props
        let precent=(skill.precent/100)*260+'px'
        let precentStyle = {
            width:precent
          };
          precentStyle=this.state.isTimeToPlayEffect?precentStyle:{}
       
          
        return (
            <Waypoint 
            bottomOffset='60px'
            fireOnRapidScroll={false}
            scrollableAncestor={window}
            onEnter={this.playEffect.bind(null,true)}
            onLeave={this.playEffect.bind(null,false)}>
            <li className="skill-preview" >
                <p>{skill.skill}</p>
               <div className="line" >
                   <div className="precent-bar" style={precentStyle}></div>
               </div>
            </li>
            </Waypoint>
        )
    }
}
