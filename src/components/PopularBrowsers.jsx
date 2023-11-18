import React from 'react'
import BrowserListing from './BrowserListing.jsx'
import data from '../data/data.json'


function PopularBrowsers() {
    return (
        <article>
            <h2>Popular web browsers</h2>
            {data.map(({ name, logo, description }) => (
                <BrowserListing name={name} iconPath={logo} description={description} />
            ))}
        </article>
    )
}


export default PopularBrowsers