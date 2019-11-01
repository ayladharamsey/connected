import React from 'react';

const NewsCard = (props) => {
    console.log(props)
    const goToLink = (url) => {
        return window.open(url)
    }
    return (
         <section id={props.id} key={props.id}> 
            <h1>{props.title}</h1>
            <h3>{props.author}</h3>
            <h3>{props.title}</h3>
            <h3>{props.content}</h3>
            <p>{props.content}</p>
            <button onClick={() => goToLink(props.url)}>Read Article</button>
         </section>
    )
}

export default NewsCard;