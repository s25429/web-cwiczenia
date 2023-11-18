import React from 'react'


function BrowserListing({ name, iconPath, description }) {
    return (
        <section>
            <h3>{name}</h3>
            <img src={iconPath} alt={`${name} logo`} style={{ fontStyle: 'italic', width: '30%' }} />
            <p>{description}</p>
            <hr />
        </section>
    )
}


export default BrowserListing