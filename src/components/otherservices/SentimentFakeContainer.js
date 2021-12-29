import React from 'react'
import SentimentAnalysis from './sentiments/SentimentAnalysis'
import FakeNews from './fakenews/FakeNews'
import './sentFake.css'

export default function SentimentFakeContainer() {
    return (
        <div className="sent-fake-container">
            <h2>Services</h2>
            <div className="sent-fake-components">
                <div className="sentiment-analysis">
                    <SentimentAnalysis />
                </div>
                <div className="fake-news">
                    <FakeNews />
                </div>
            </div>
        </div>
    )
}
