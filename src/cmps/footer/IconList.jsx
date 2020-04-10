import React from 'react'

import IconPreview from './IconPreview'
export default function IconList(props) {
    return (
        <ul className="iconList clean-list flex">
            {
                props.icons.map((icon,index)=>{
                    return <a href={icon.link} target='_blanc' key={index}>
                            <IconPreview  icon={icon}/>
                    </a> 
                })
            }
        </ul>
    )
}
