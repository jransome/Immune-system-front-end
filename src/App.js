import React, { Component } from 'react';
import Category from './components/Category/Category';

class App extends Component {
    // renderCategory(i, desc) {
    //     return (
    //         <div key={"cat-" + i}>
    //             <Category description={desc} />
    //         </div>
    //     );
    // }

    render() {
        const categories = [];
        for (let i = 0; i < this.props.data.length; i++) {
            let cat = this.props.data[i];
            // category.push(this.renderCriteria(i, desc));
            categories.push(
                <Category 
                    key={'cat-' + i} 
                    categoryName={cat.CategoryName} 
                    subCategoriesData={cat.SubCategories} 
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
