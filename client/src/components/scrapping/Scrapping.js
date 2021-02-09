import React, { useState } from 'react'
import Texte from './Texte'
import graphQlApi from '../api/graphQL'
import './scrapping.css';

export default function Scrapping() {
    const [url, setUrl] = useState("");
    const [text, setText] = useState("");

    const scrapp = async e => {
        e.preventDefault()
        setText("")
        let query = `
            query {
                scrapping(url: "${url}")
              }
        `
        const data = await graphQlApi(query)

        if (data && data.scrapping) {
            setText(data.scrapping)
        }
    }
    return (
        <div className="scrapping-container">
            <h2>Scrapping</h2>
            <form onSubmit={scrapp}>
                <div>
                    <label>
                        <p>enter url :</p>
                        <input id="input-url" type="url" value={url} placeholder="https://lakome2.com/reportage/208501/" onChange={e => setUrl(e.target.value)} required />
                    </label>
                    <button id="scrapp-btn">scrapp</button>
                </div>
            </form>
            <Texte text={text} />
        </div>
    )
}
