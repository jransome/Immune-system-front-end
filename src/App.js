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

            links.push(<li  key={i}><Link to={`/cat${i + 1}`}>{cat.CategoryName}</Link></li>);
            let catProps = {
                key: i,
                categoryName: cat.CategoryName,
                subCategoriesData: cat.SubCategories,
                criteriaStatusChangeHandler: this.criteriaStatusChangeHandler
            }
            // routes.push(<Route exact path='/' key={0} component={Category}/>)
            routes.push(
                <Route key={i+1} path={`/cat${i + 1}`} render={(routeProps) => (
                    <Category {...routeProps} {...catProps} />                    
                )} />
            )
        }

        return(
            <div>
                <Router>
                    <div className="container" >
                        <div className="category-tabs"><ul> {links} </ul></div>
                        <Switch>
                            {routes}
                            {/* <Route exact path='/' component={Category}/> */}
                            {/* <Route path='/'>
                                <DefaultRoute handler={routes[0]} />
                            </Route> */}
                        </Switch>
                    </div>
                    
                </Router>
            </div>
        )
    }
}

export default App;
