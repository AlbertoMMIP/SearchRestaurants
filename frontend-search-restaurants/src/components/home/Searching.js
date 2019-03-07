import React, {Component} from 'react';
import { getData } from '../../services';

class Searching extends Component{
    constructor(){
        super();
        this.state ={
            arraryRestaurants:[]
        }
    }
    componentWillMount(){
        getData()
            .then(restaurants => {
                this.setState({arraryRestaurants:restaurants.data});
            })
    }
    render(){
        let {arraryRestaurants} = this.state;
        return(
            <div>
                <div id="search" className="uk-section">
                    <div className="uk-container ">
                        <center>
                        <form className="uk-search uk-search-large">
                            <div className="uk-inline">
                            <span data-uk-search-icon></span>
                            <input className="uk-search-input" type="search" placeholder="Search..." />
                            </div>
                            <div className="uk-margin">
                                <div className="uk-form-controls uk-form-controls-text">
                                    <label><input className="uk-radio" type="radio" name="radio1"/> Sort by rating    </label>
                                    <label><input className="uk-radio" type="radio" name="radio1"/> Sort alphabetically</label>
                                </div>
                            </div>
                        </form>
                        </center>
                        <div className="uk-overflow-auto">
                            <table className="uk-table uk-table-justify uk-table-middle uk-table-divider">
                                <thead>
                                    <tr>
                                        <th className="uk-table-shrink"><img className="uk-preserve-width uk-border-circle" src="resta.jpg" width="40" alt="" /></th>
                                        <th className="uk-table-expand">Info</th>
                                        <th className="uk-width-large">Address</th>
                                        <th className="uk-width-small">Raiting</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {arraryRestaurants.length > 0 ? 
                                    arraryRestaurants.map((restaurant,indx) => 
                                    <tr key={indx}>
                                        <td><img className="uk-preserve-width uk-border-circle" src="resta.jpg" width="40" alt="" /></td>
                                        <td>
                                            <p>{restaurant.name}</p>
                                            <p><span className="uk-margin-small-right" data-uk-icon="world"></span>{restaurant.contact.site} <span className="uk-margin-small-right" data-uk-icon="phone"></span>{restaurant.contact.phone}</p>                                            
                                            <p><span className="uk-margin-small-right" data-uk-icon="mail"></span>{restaurant.contact.email}</p>
                                        </td>
                                        <td >Street {restaurant.address.street} City {restaurant.address.city}  State {restaurant.address.state}</td>
                                        <td> {restaurant.rating} <span className="uk-margin-small-right" data-uk-icon="star"></span></td>
                                    </tr> )
                                    :
                                    <tr>
                                        <td><img className="uk-preserve-width uk-border-circle" src="resta.jpg" width="40" alt="" /></td>
                                        <td><p>No existen resultados</p></td>
                                        <td ></td>
                                        <td><span className="uk-margin-small-right" data-uk-icon="star"></span></td>
                                    </tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Searching;