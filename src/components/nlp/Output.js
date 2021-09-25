import React from 'react'
import './nlp.css'

export default function Output({ output, array }) {
    return (
        <div className="service-output-container">
            {output &&
                <div>
                    {array &&
                        <div>
                            <p>{'['}</p>
                            {
                                output.map((item, index )=> {
                                    return (
                                        <p key={index} className="result-field-item">'{item}',</p>
                                    )
                                })
                            }
                            <p>{']'}</p>
                        </div>
                    }
                    {!array &&
                        <div>
                            <p>{'{'}</p>
                               {
                                    output.map((item, index ) => {
                                        return (
                                            <p key={index} className="result-field-item">'{item[0]}' : '{item[1]}'</p>
                                        )
                                    })
                               }
                            <p>{'}'}</p>
                        </div>
                    }
                </div>
            }
        </div>
    )
}
