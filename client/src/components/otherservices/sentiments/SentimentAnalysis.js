import React, { useState } from 'react'
import SentimentResult from './SentimentResult'
import graphQlApi from '../../api/graphQL'
import '../sentFake.css'

export default function SentimentAnalysis() {
    const [text, setText] = useState("")
    const [result, setresult] = useState()

    const analyse = async e => {
        e.preventDefault()

        let query = `
            query{
                sentiment(text: "${text}"){
                neg
                neu
                pos
                compound
                }
            }
        `
        setresult(null)
        const data = await graphQlApi(query)

        if (data && data.sentiment) {
            setresult(data.sentiment)
        }
    }

    return (
        <div className="sent-container">
            <h3>Sentiment Analysis</h3>
            <div className="sent-fake-main">
                <div>
                    <p>enter text here :</p>
                    <textarea value={text} cols="30" rows="8" onChange={e => setText(e.target.value)} />
                </div>
                <div >
                    <button className="sent-fake-btn" onClick={analyse}>Analyse</button>
                </div>
                <div>
                    <SentimentResult result={result} />
                </div>
            </div>
        </div>
    )
}
