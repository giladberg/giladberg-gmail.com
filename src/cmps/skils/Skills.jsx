import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint';

import eventBusService from "../../services/eventBusService.js";
import span from '../../imgs/span.png'
import SkillList from './SkillList'
export default class Skills extends Component {

    handleEnter = (link,isEnter) => {
        let data={link,isEnter}
        eventBusService.emit('scrolling' , data);
    }
    state = {
        skills: [{ skill: 'html', precent: 85 },
        { skill: 'css', precent: 85 },
        { skill: 'java script', precent: 90 },
        { skill: 'react', precent: 85 },
        { skill: 'angular', precent: 68 },
        { skill: 'node.js', precent: 70 },
        { skill: 'sql', precent: 76 },
        { skill: 'no-sql', precent: 30 },
        { skill: 'php', precent: 55 }
        ]
    }
    render() {
        return (
            <Waypoint 
            fireOnRapidScroll={false}
            scrollableAncestor={window}
            bottomOffset='150px'
            topOffset='50%'
            onLeave={this.handleEnter.bind(null,'about',false)}
            onEnter={this.handleEnter.bind(null,'skills',true)}>
                <section id="skills"  className="skills">
                    <div  className=" flex column align-center container">
                    <h2 className="titles">Skills</h2>
                    <img className="underline" src={span} alt={span} width="60" />
                    <SkillList skills={this.state.skills} />
                    </div>
                    
                </section>
            </Waypoint>
        )
    }
}
