import React from 'react'

export default function IconPreview(props) {
    return (
        <li className="iconPreview flex justify-center align-center circule">
            <span className={props.icon.name}></span>
        </li>
    )
}
