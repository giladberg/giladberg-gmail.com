import React, { Component } from 'react'
import SkillPreview from './SkillPreview'
export default class SkillList extends Component {
    render() {
        const {skills}=this.props
        return (
            <ul className="skill-list clean-list flex justify-space-between wrap">
                {
                    skills.map((skill,index)=>{
                        return <SkillPreview skill={skill} key={index} i={index}/>
                    })
                }
                
            </ul>
        )
    }
}
