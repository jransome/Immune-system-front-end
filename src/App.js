import React, { Component } from 'react';
import Category from './components/Category/Category';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';

class App extends Component {
    constructor(props){
        super();
        this.state = {
            data: props.data
        }
    }

    criteriaStatusChangeHandler = (criteriaId, newStatus) => {
        // console.log(criteriaId + "'s status has changed to: " + newStatus);
        let newData = this.state.data;

        newData.forEach(category => {
            category.SubCategories.forEach(subCategory => {
                subCategory.Criteria.forEach(criteria => {
                    if(criteria.id === criteriaId){
                        criteria.status = newStatus;
                        // console.log(criteria)
                    }
                })
            });
        });

        this.setState(
            { data: newData }
        )
    }


    render() {
        const links = [];
        const routes = [];

        for (let i = 0; i < this.state.data.length; i++) {
            let cat = this.state.data[i];

            links.push(<Link key={i} to={`/cat${i + 1}`}>{cat.CategoryName}</Link>);
            let catProps = {
                key: i,
                categoryName: cat.CategoryName,
                subCategoriesData: cat.SubCategories,
                criteriaStatusChangeHandler: this.criteriaStatusChangeHandler
            }
            routes.push(
                <Route key={i} path={`/cat${i + 1}`} render={(routeProps) => (
                    <Category {...routeProps} {...catProps} />                    
                )} />
            )
        }

        return(
            <div>
                <Router>
                    <div>
                        <div className ="category-tabs"> {links} </div>
                        <Switch>
                            {routes}
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;
