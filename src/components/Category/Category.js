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
                <tr>
                    <th colspan="4"><h1>{this.props.categoryName}</h1></th>
                </tr>
                <tr>
                    <td> {subCategoriesAry}</td>
                </tr>
            </table>
            </div>
        )
    }
}

export default Category;

<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td> 
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
</table>

