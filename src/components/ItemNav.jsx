import React from 'react'
import '../assets/foundation.css'

export default function ItemNav({ IconName, Texto }) {
    return (
        <div className="">
            <a href="/"><div className='Icon'><i className={IconName}>
            </i></div><span>{Texto}</span></a>
        </div>
    )
}

