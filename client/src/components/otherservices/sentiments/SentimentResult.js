import React, { useState, useEffect } from 'react'
import '../sentFake.css'

export default function SentimentResult({ result }) {
    let colors = ['rgb(33, 112, 9)', 'red', 'cornsilk', 'blue'];
    const [value, setValue] = useState("")
    const [widths, setWidths] = useState(['0 px', '0 px', '0 px', '0 px'])
    const [color, setColor] = useState({ color: colors[0] })


    useEffect(() => {
        let colors = ['rgb(33, 112, 9)', 'red', 'cornsilk', 'blue'];
        if (result) {
            if (result.pos > result.neg && result.pos > result.neu) {
                setColor({ color: colors[0] })
                setValue("Positif")
            } else if (result.neg > result.pos && result.neg > result.neu) {
                setColor({ color: colors[1] })
                setValue('Negatif')
            } else if (result.neu > result.pos && result.neu > result.neg) {
                setColor({ color: colors[2] })
                setValue('Neutral')
            } else {
                setValue('')
            }
            setWidths([
                result.pos * 100 + 'px',
                result.neg * 100 + 'px',
                result.neu * 100 + 'px',
                result.compound * 100 + 'px',
            ])
            //setColors(['rgb(33, 112, 9)', 'red', 'cornsilk', 'blue'])
        }
    }, [result])

    return (
        <div className="sent-result-container">
            <p className="sent-result-p">
                result :
                <strong style={color}>{value}</strong>
            </p>

            <div>
                <p>details :</p>
                <div className="details-container">
                    <div>
                        <div className="sent-result-details">
                            <div className="circle" style={{ 'backgroundColor': colors[0] }}></div>
                            <p className='sent-result-detail-p'>pos : {result && result.pos}</p>
                        </div>
                        <div className="sent-result-details">
                            <div className="circle" style={{ 'backgroundColor': colors[1] }}></div>
                            <p className='sent-result-detail-p'>neg : {result && result.neg}</p>
                        </div>
                        <div className="sent-result-details">
                            <div className="circle" style={{ 'backgroundColor': colors[2] }}></div>
                            <p className='sent-result-detail-p'>neu : {result && result.neu}</p>
                        </div>
                        <div className="sent-result-details">
                            <div className="circle" style={{ 'backgroundColor': 'blue' }}></div>
                            <p className='sent-result-detail-p'>compound : {result && result.compound}</p>
                        </div>
                    </div>
                    <div className="lines">
                        {
                            result &&
                            <div>
                                <div className="line" style={{ 'backgroundColor': colors[0], 'width': widths[0] }}></div>
                                <div className="line" style={{ 'backgroundColor': colors[1], 'width': widths[1] }}></div>
                                <div className="line" style={{ 'backgroundColor': colors[2], 'width': widths[2] }}></div>
                                <div className="line" style={{ 'backgroundColor': colors[3], 'width': widths[3] }}></div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
