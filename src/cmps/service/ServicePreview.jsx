import React from 'react'

export default function ServicePreview(props) {
    return (
        <li className="servicePreview">
            <img src={props.service.img} alt={props.service.title} width="51"/>
            <h3>{props.service.title}</h3>
            <p>{props.service.info}</p>

        </li>
    )
}
