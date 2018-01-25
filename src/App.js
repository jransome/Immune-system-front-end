import React, { Component } from 'react';
import Category from './components/Category/Category';

class App extends Component {
    constructor(props){
        super();
        this.state = {
            data: props.data
        }
    }

    criteriaStatusChangeHandler = (criteriaId, newStatus) => {
        let newData = this.state.data;

        this.setState(
            { id: criteriaId }
        )
        console.log(criteriaId + "'s status has changed to: " + newStatus);
    }

    render() {
        const categories = [];
        for (let i = 0; i < this.state.data.length; i++) {
            let cat = this.state.data[i];
            categories.push(
                <Category 
                    key={i} 
                    categoryName={cat.CategoryName} 
                    subCategoriesData={cat.SubCategories} 
                    criteriaStatusChangeHandler={this.criteriaStatusChangeHandler}
                />
            )
        }

        return(
            <div className="categories">
                { categories }
            </div>
        )
    }
}

export default App;
