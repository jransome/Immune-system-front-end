import React, { Component } from 'react';
import SubCategory from '../SubCategory/SubCategory';

class Category extends Component {
    render(){
        const subCategoriesAry = [];
        for (let i = 0; i < this.props.subCategoriesData.length; i++) {
            let subCat = this.props.subCategoriesData[i];
            subCategoriesAry.push(
                <SubCategory 
                    key={i} 
                    subName={subCat.SubName} 
                    criteriaData={subCat.Criteria}
                    criteriaStatusChangeHandler={this.props.criteriaStatusChangeHandler} 
                />
            )
        }

        return(
            <div className="category">
            <table>
                <thead>
                    <tr>
                        <th colSpan="6"><h1>{this.props.categoryName}</h1></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td> {subCategoriesAry}</td>
                </tr>
                </tbody>
            </table>
            </div>
        )
    }
}

export default Category;

