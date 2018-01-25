import React, { Component } from 'react';
import Category from './components/Category/Category';

class App extends Component {

    criteriaStatusChangeHandler = (event) => {
        let newStatus = event.target.value;
        console.log("status changed to: " + newStatus);
    }

    render() {
        const categories = [];
        for (let i = 0; i < this.props.data.length; i++) {
            let cat = this.props.data[i];
            categories.push(
                <Category 
                    key={'cat-' + i} 
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
