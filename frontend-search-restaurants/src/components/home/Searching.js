import React, {Component} from 'react';
import { getData } from '../../services';
import { ItemList } from '../common/ItemList';
import { SearchForm } from '../common/SearchForm';

class Searching extends Component{
    constructor(){
        super();
        this.state ={
            arrayRestaurants:[],
            arraySearching:[]
        }
    }
    componentWillMount(){
        getData()
            .then(restaurants => {
                this.setState({arrayRestaurants:restaurants.data,arraySearching:restaurants.data});
            })
    }

    sort = (e) =>{
        e.preventDefault();
        let {arrayRestaurants,arraySearching} = this.state;        
        switch (e.target.name) {
            case 'search':
                arrayRestaurants = arraySearching
                arrayRestaurants = arrayRestaurants.filter(item => item.name.includes(e.target.value));                
                break;
            case 'radio':
                if(e.target.value === 'alpha')
                    arrayRestaurants = arrayRestaurants.sort((a,b) => {
                        if(a.name < b.name) return -1
                        return 0;
                    });
                else
                    arrayRestaurants = arrayRestaurants.sort((a,b) => {
                        return b.rating - a.rating;
                    })
                
                e.target.checked = true;
            break;
            default:
                break;
        }
        this.setState({arrayRestaurants});
    }
    render(){
        let {arrayRestaurants} = this.state;
        return(
            <div>
                <div id="search" className="uk-section">
                    <div className="uk-container ">
                        <center>
                            <SearchForm sort={this.sort} />
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
                                    {arrayRestaurants.length > 0 ? 
                                    arrayRestaurants.map((restaurant,indx) =><ItemList key={indx} restaurant={restaurant}/>)
                                    :
                                    <tr>
                                        <td><img className="uk-preserve-width uk-border-circle" src="resta.jpg" width="40" alt="" /></td>
                                        <td><p>No existen resultados</p><hr/></td>
                                        <td ></td>
                                        <td><span className="uk-margin-small-right" data-uk-icon="star"></span><span className="uk-margin-small-right" data-uk-icon="star"></span><span className="uk-margin-small-right" data-uk-icon="star"></span><span className="uk-margin-small-right" data-uk-icon="star"></span><span className="uk-margin-small-right" data-uk-icon="star"></span></td>
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