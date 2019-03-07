import React from 'react';
import Searching from './Searching';

export const Home = () => (
    <div>        
        <div className="uk-cover-container" data-uk-height-viewport >
            <img src="https://images.unsplash.com/photo-1469307580733-007134b82100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" data-uk-cover  />
            <div className="uk-overlay uk-light uk-position-center">
                <h1 className="uk-heading-primary" >Find the best Restaurant</h1>
                <a className="uk-button uk-button-primary" href="#search">Search</a>
            </div>
        </div>        
        <Searching />
    </div>
);
