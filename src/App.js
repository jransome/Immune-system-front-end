import React, { Component } from 'react';
import Category from './components/Category/Category';
import SubCategory from './components/SubCategory/SubCategory';

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
                        console.log(criteria)
                    }
                })
            });
        });

        this.setState(
            { data: newData }
        )
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
