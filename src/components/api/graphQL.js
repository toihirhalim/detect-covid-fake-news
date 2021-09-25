export default async function graphQlApi(query) {
    const url = process.env.REACT_APP_API_URL || 'https://detect-covid-fake-news.herokuapp.com/'
    return fetch(url, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            query: query
        })
    }).then(res => res.json()).then(json => json.data)
}