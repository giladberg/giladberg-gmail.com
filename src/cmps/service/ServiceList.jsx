import React from 'react'

import ServicePreview from './ServicePreview'
export default function ServiceList(props) {
    return (
        <ul className="serviceList clean-list flex wrap">
            {
               props.services.map((service,index)=>{
                   return <ServicePreview key={index} service={service}/>
               }) 
            }
            
        </ul>
    )
}
