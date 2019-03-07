import React from 'react';

export const SearchForm = ({sort}) => (
    <div>
        <form className="uk-search uk-search-large">
            <div className="uk-inline">
            <span data-uk-search-icon></span>
            <input className="uk-search-input" type="search" name="search" onChange={sort} placeholder="Search..." />
            </div>
            <div className="uk-margin">
                <div className="uk-form-controls uk-form-controls-text">
                    <label><input className="uk-radio" onChange={sort} type="radio" name="radio" value="rating"/> Sort by rating    </label>
                    <label><input className="uk-radio" onChange={sort} type="radio" name="radio" value="alpha"/> Sort alphabetically</label>
                </div>
            </div>
        </form>
    </div>
);