import React from 'react';
import { Link } from 'react-router-dom'
 

export const Nav = () => {
    
    return (
        <nav>
            <h1>connected.</h1>
            <h6>your personalized news feed</h6>
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