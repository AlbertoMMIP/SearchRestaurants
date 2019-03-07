import React, {Component} from 'react';

class Searching extends Component{
    constructor(){
        super();
        this.state ={
            arraryRestaurants:[]
        }
    }
    componentWillMount(){
    }
    render(){
        return(
            <div>
                <div id="search" className="uk-section">
                    <div className="uk-container ">
                        <center>
                        <form className="uk-search uk-search-large">
                            <span data-uk-search-icon></span>
                            <input className="uk-search-input" type="search" placeholder="Search..." />
                        </form>
                        </center>
                        <div className="uk-overflow-auto">
                            <table className="uk-table uk-table-justify uk-table-middle uk-table-divider">
                                <thead>
                                    <tr>
                                        <th className="uk-table-shrink">Icon</th>
                                        <th className="uk-table-expand">Info</th>
                                        <th className="uk-width-medium">Address</th>
                                        <th className="uk-width-small">Raiting</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img className="uk-preserve-width uk-border-circle" src="resta.jpg" width="40" alt="" /></td>
                                        <td>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </td>
                                        <td >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                                        <td> 4 <span className="uk-margin-small-right" data-uk-icon="star"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img className="uk-preserve-width uk-border-circle" src="resta.jpg" width="40" alt="" /></td>
                                        <td>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </td>
                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                                        <td> 5 <span className="uk-margin-small-right" data-uk-icon="star"></span></td>
                                    </tr>
                                    <tr>
                                        <td><img className="uk-preserve-width uk-border-circle" src="resta.jpg" width="40" alt="" /></td>
                                        <td>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </td>
                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                                        <td> 2 <span className="uk-margin-small-right" data-uk-icon="star"></span></td>
                                    </tr>
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