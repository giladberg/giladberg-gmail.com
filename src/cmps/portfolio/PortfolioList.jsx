import React from 'react'

import PortfolioPreview from './PortfolioPreview'

export default function PortfolioList(props) {
    const {portfolio}=props
    return (
        <ul className="portfolio-list clean-list ">
            {
                portfolio.map(project=>{
                   return <PortfolioPreview key={project.id} project={project}/>
                })
            }
        </ul>
    )
}
