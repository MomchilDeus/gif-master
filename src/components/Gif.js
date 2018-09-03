import React from 'react'

export const Gif = props => (
    <div className="Gif" >
        <iframe 
        title="gif"
        src={props.embedURL}
        width="480"
        height="270"
        frameBorder="0"
        class="giphy-embed" allowFullScreen></iframe>
        <p><a href={props.embedURL}>via GIPHY</a></p>
    </div>
)