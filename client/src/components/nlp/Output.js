import React from 'react'
import './styles.css'

export default function Output({ output, array }) {
    return (
        <div className="service-output-container">
            {output &&
                <div>
                    {array &&
                        <div>
                            <p>{'['}</p>
                            {
                                output.map(item => {
                                    return (
                                        <p className="result-field-item">{item},</p>
                                    )
                                })
                            }
                            <p>{']'}</p>
                        </div>
                    }
                </div>
            }
        </div>
    )
}
