import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

 

export const Nav = () => {
    
    return (
        <nav>
            <h1>connected.</h1>
            <h3>your personalized news feed</h3>
            <Link to='/'>
                <h4>LIVE ARTICLE FEED</h4>
            </Link>
            <Link to='/saved'>
                <h4>SAVED FOR LATER</h4>
            </Link>
            <Link to='/read'>
                <h4>ARTICLES COMPLETED</h4>
            </Link>
        </nav>
    )
}

// might want to add filters here -- how do i bring in the language filters & country filters 
// into a select dropdown  