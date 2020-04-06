import React, { Component } from 'react'

export default class SkillPreview extends Component {
   
    render() {
        const {skill}=this.props
        let precent=(skill.precent/100)*260+'px'
        let precentStyle = {
            backgroundColor: '#212121',
            width:precent,
            height:'100%'
          };
          
          
        return (
            <li className="skill-preview" >
                <p>{skill.skill}</p>
               <div className="line" >
                   <div style={precentStyle}></div>
               </div>
            </li>
        )
    }
}
//className={`line ${i%3!==0?'margin-left-20':''}`}