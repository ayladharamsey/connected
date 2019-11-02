import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

 

export const Nav = () => {
    
    return (
        <nav>
            <h1>connected.</h1>
            <h3>your personalized news feed</h3>
            <div className="links" >
                <Link to='/'>
                    <h4 className="live" >Live Feed</h4>
                </Link>
                <Link to='/saved'>
                    <h4 className="saved">Saved For Later</h4>
                </Link>
                <Link to='/read'>
                    <h4 className="completed">Completed Articles</h4>
                </Link>
            </div>
        </nav>
    )
}

// might want to add filters here -- how do i bring in the language filters & country filters 
// into a select dropdown  