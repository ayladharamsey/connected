import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

 

export const Nav = () => {
    
    return (
        <nav>
            <h1>connected.</h1>
            <h3>your personalized news feed</h3>
            <Link to='/'>
                <h2>LIVE ARTICLE FEED</h2>
            </Link>
            <Link to='/saved'>
                <h2>SAVED FOR LATER</h2>
            </Link>
            <Link to='/read'>
                <h2>ARTICLES COMPLETED</h2>
            </Link>
        </nav>
    )
}

// might want to add filters here -- how do i bring in the language filters & country filters 
// into a select dropdown  