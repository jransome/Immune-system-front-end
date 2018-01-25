import React, { Component } from 'react';
import SubCategory from '../SubCategory/SubCategory';

class Category extends Component {
    // renderSubCat(i, name) {
    //     return (
    //         <div key={"cat-" + i}>
    //             <SubCategory subName={name} criteriaDescriptions={this.props.criteriaDescriptions} />
    //         </div>
    //     );
    // }

    render(){
        // console.log(this.props)
        const subCategoriesAry = [];
        for (let i = 0; i < this.props.subCategoriesData.length; i++) {
            let subCat = this.props.subCategoriesData[i];
            // subCategories.push(this.renderSubCat(i, subName));
            subCategoriesAry.push(
                <SubCategory 
                    key={'sub-' + i} 
                    subName={subCat.SubName} 
                    criteriaData={subCat.Criteria} 
                />
            )
        }

        return(
            <div>
                {this.props.categoryName}
                {subCategoriesAry}
            </div>
        )
    }
}

export default Category;

