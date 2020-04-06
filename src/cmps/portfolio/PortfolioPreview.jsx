import React from 'react'

export default function PortfolioPreview(props) {
    const { project } = props
    return (
        <li className="portfolioPreview square-ratio">
            <a href={project.website} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt={project.title} />
                <div className="info flex column justify-center align-center">
                    <h4>{project.title}</h4>
                    <p>{project.desc}</p>
                </div>
            </a>
        </li>
    )
}
