import React from 'react';
import { Redirect } from 'react-router-dom';

const NewsCard = (props) => {
    return (
         <section id={props.id} key={props.id}> 
            <h1>{props.title}</h1>
            <h3>{props.author}</h3>
            <h3>{props.title}</h3>
            <h3>{props.content}</h3>
            <p>{props.content}</p>
            <Redirect to={props.source}><button>Read Article</button></Redirect>
         </section>
    )
}

export default NewsCard;