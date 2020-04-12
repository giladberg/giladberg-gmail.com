import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint';
export default class PortfolioPreview extends Component {
    state = {style:{opacity:0} }
    playEffect = (flag) => {
        const style=flag?{opacity:1}:{opacity:0}
        this.setState({style})
    }

    render() {
        
  
        const { project } = this.props
        return (
            <Waypoint
                bottomOffset='60px'
                fireOnRapidScroll={false}
                scrollableAncestor={window}
                onEnter={this.playEffect.bind(null, true)}
                onLeave={this.playEffect.bind(null, false)}>
                <li className="portfolioPreview square-ratio" style={this.state.style}>
                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                        <img src={project.img} alt={project.title} />
                        <div className="info flex column justify-center align-center">
                            <h4>{project.title}</h4>
                            <p>{project.desc}</p>
                        </div>
                    </a>
                </li>
            </Waypoint>
        )
    }
}
