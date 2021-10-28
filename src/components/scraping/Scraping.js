import React, { useState } from 'react'
import Texte from './Texte'
import graphQlApi from '../api/graphQL'
import './scraping.css';

export default function Scraping() {
    const [url, setUrl] = useState("");
    const [text, setText] = useState("");

    const scrapp = async e => {
        e.preventDefault()
        setText("")
        let query = `
            query {
                scraping(url: "${url}")
              }
        `
        const data = await graphQlApi(query)

        if (data && data.scraping) {
            setText(data.scraping)
        }
    }
    return (
        <div className="scrapping-container">
            <h2>Scraping</h2>
            <div className="scraping-wraper">
                <form onSubmit={scrapp} >
                    <p>Enter url :</p>
                    <div className="scraping-input">
                        <input
                            id="input-url"
                            type="url"
                            value={url}
                            placeholder="https://url.domain"
                            onChange={e => setUrl(e.target.value)}
                            required
                        />
                        <button id="scrapp-btn">scrap</button>
                    </div>
                </form>
                <Texte text={text} />
            </div>
        </div>
    )
}
