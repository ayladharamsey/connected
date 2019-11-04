import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss'; 
import feed from '../../images/edited/newsfeed-white.png';
import clock from '../../images/edited/clock-white.png';
import check from '../../images/edited/check-white.png';

export const Nav = ({ filterByNav }) => {
    
    return (
        <nav>
            <h1>connected</h1>
            <h3>your personalized news feed</h3>
            <div className="links" >
                <Link to='/' onClick ={filterByNav}>
                    <div className="hover">
                        <img src={feed}/>
                        <h4 className="live" >Live Feed</h4>
                    </div>
                </Link>
                <Link to='/saved' onClick ={filterByNav}>
                    <div className="hover">
                        <img src={clock}/>
                        <h4 className="saved">Saved For Later</h4>
                    </div>
                </Link>
                <Link to='/read' onClick ={filterByNav}>
                    <div className="hover">
                        <img src={check}/>
                        <h4 className="completed">Completed Articles</h4>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

