import React from 'react';

export const ItemList = ({restaurant,indx}) => (
    
        <tr key={indx}>
            <td className="uk-table-shrink"><img className="uk-preserve-width uk-border-circle" src="resta.jpg" width="40" alt="" /></td>
            <td className="uk-width-large">
                <p>{restaurant.name}  </p>
                <p><span className="uk-margin-small-right" data-uk-icon="world"></span>{restaurant.contact.site} <span className="uk-margin-small-right" data-uk-icon="phone"></span>{restaurant.contact.phone}</p>
                <p><span className="uk-margin-small-right" data-uk-icon="mail"></span>{restaurant.contact.email} </p>
            </td>
            <td className="uk-table-expand">Street {restaurant.address.street} City {restaurant.address.city}  State {restaurant.address.state} 
                <p><span className="uk-margin-small-right" data-uk-icon="location"></span>  </p>
            </td>
            <td className="uk-width-medium"> {restaurant.rating === 1 ?
                    <span className="uk-margin-small-right" data-uk-icon="star"></span> :
                    restaurant.rating === 2 ?
                    <div><span className="uk-margin-small-right" data-uk-icon="star"></span><span className="uk-margin-small-right" data-uk-icon="star"></span></div> :
                    restaurant.rating === 3 ?
                    <div><span className="uk-margin-small-right" data-uk-icon="star"></span><span className="uk-margin-small-right" data-uk-icon="star"></span><span className="uk-margin-small-right" data-uk-icon="star"></span></div> :
                    restaurant.rating === 4 ?
                    <div><span className="uk-margin-small-right" data-uk-icon="star"></span><span className="uk-margin-small-right" data-uk-icon="star"></span><span className="uk-margin-small-right" data-uk-icon="star"></span><span className="uk-margin-small-right" data-uk-icon="star"></span></div>:
                    restaurant.rating === 5 ?
                    <div><span className="uk-margin-small-right" data-uk-icon="star"></span><span className="uk-margin-small-right" data-uk-icon="star"></span><span className="uk-margin-small-right" data-uk-icon="star"></span><span className="uk-margin-small-right" data-uk-icon="star"></span><span className="uk-margin-small-right" data-uk-icon="star"></span></div>:
                null}<hr/>
                <div data-uk-grid>
                    <div className="uk-width-1-2">
                        <span className="uk-margin-small-right" data-uk-icon="heart"></span> Like                                               
                    </div>
                    <div className="uk-width-1-2">
                        <span className="uk-margin-small-right" data-uk-icon="forward"></span> Share                                                
                    </div>
                </div>
            </td>
        </tr> 
);