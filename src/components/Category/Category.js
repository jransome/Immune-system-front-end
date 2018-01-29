import React, { Component } from 'react';
import SubCategory from '../SubCategory/SubCategory';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';

class Category extends Component {
    render(){
        // const subCategoriesAry = [];
        // for (let i = 0; i < this.props.subCategoriesData.length; i++) {
        //     let subCat = this.props.subCategoriesData[i];
        //     subCategoriesAry.push(
        //         <SubCategory 
        //             key={i} 
        //             subName={subCat.SubName} 
        //             criteriaData={subCat.Criteria}
        //             criteriaStatusChangeHandler={this.props.criteriaStatusChangeHandler} 
        //         />
        //     )
        // }

        const subCatLinks = [];
        const subCatRoutes = [];

        for (let i = 0; i < this.props.subCategoriesData.length; i++) {
            let subCat = this.props.subCategoriesData[i];
            subCatLinks.push(<li key={i}> <Link to={`${this.props.match.url}/sub-cat${i + 1}`}>{ subCat.SubName }</Link></li>);
            
            let subCatProps = {
                key: i,
                subName: subCat.SubName,
                criteriaData: subCat.Criteria,
                criteriaStatusChangeHandler: this.props.criteriaStatusChangeHandler
            }

            subCatRoutes.push(
                <Route key={i+1} path={`${this.props.match.url}/sub-cat${i + 1}`} render={(routeProps) => (
                    <SubCategory {...routeProps} {...subCatProps} />       
                )} />
            )
        }

        return(
            <div>
                <Router>
                    <div className="cat-container" >
                        <div className="sub-category-tabs"><ul> {subCatLinks} </ul></div>
                        <Switch>
                            {subCatRoutes}
                        </Switch>
                    </div>
                </Router>
            </div>

            // <div className="category">
            //     <table>
            //         <thead>
            //             <tr>
            //                 <th colSpan="6"><h1>{this.props.categoryName}</h1></th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             <tr>
            //                 <td> {subCategoriesAry}</td>
            //             </tr>
            //         </tbody>
            //     </table>
            // </div>
        )
    }
}

export default Category;

