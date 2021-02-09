import React from 'react'
import './styles.css'

export default function Texte({ text }) {
    return (
        <div className='texte-container'>
            <p>{text}</p>
        </div>
    )
}
