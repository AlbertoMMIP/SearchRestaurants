import React, {Component} from 'react';
import { getData } from '../../services';
import { ItemList } from '../common/ItemList';

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

    sort = (e) =>{
        console.log(`Name ${e.target.name} and value ${e.target.value}`);
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
                            <input className="uk-search-input" type="search" name="search" onChange={this.sort} placeholder="Search..." />
                            </div>
                            <div className="uk-margin">
                                <div className="uk-form-controls uk-form-controls-text">
                                    <label><input className="uk-radio" onChange={this.sort} type="radio" name="radio" value="rating"/> Sort by rating    </label>
                                    <label><input className="uk-radio" onChange={this.sort} type="radio" name="radio" value="alpha"/> Sort alphabetically</label>
                                </div>
                            </div>
                        </form>
                        </center>
                        <div className="uk-overflow-auto uk-height-large">
                            <table className="uk-table uk-table-justify uk-table-middle uk-table-divider">
                                <thead>
                                    <tr>
                                    <th className="uk-table-shrink"><img className="uk-preserve-width uk-border-circle" src="resta.jpg" width="40" alt="" /></th>
                                        <th className="uk-width-large">Info</th>
                                        <th className="uk-table-expand">Address</th>
                                        <th className="uk-width-medium">Raiting</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {arraryRestaurants.length > 0 ? 
                                    arraryRestaurants.map((restaurant,indx) =><ItemList key={indx} restaurant={restaurant} indx={indx} />)
                                    :
                                    <tr>
                                        <td><img className="uk-preserve-width uk-border-circle" src="resta.jpg" width="40" alt="" /></td>
                                        <td>
                                            <p>No existen resultados</p><hr/>
                                            <div data-uk-grid>
                                            <div className="uk-width-1-2">
                                                <span className="uk-margin-small-right" data-uk-icon="heart"></span> Like                                               
                                            </div>
                                            <div className="uk-width-1-2">
                                                <span className="uk-margin-small-right" data-uk-icon="forward"></span> Share                                                
                                            </div>
                                            </div>
                                        </td>
                                        <td ></td>
                                        <td><span className="uk-margin-small-right" data-uk-icon="star"></span>
                                        <span className="uk-margin-small-right" data-uk-icon="star"></span>
                                        <span className="uk-margin-small-right" data-uk-icon="star"></span>
                                        <span className="uk-margin-small-right" data-uk-icon="star"></span>
                                        <span className="uk-margin-small-right" data-uk-icon="star"></span>
                                        </td>
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