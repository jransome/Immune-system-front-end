import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../../actions/CategoryActions';
import { bindActionCreators } from 'redux';

class CategoryList extends Component {
    renderList(){
        let categoryArray = [];
        for(let categoryId in this.props.categories){
            let category = this.props.categories[categoryId];
            categoryArray.push(
                <li
                    key={category.name}
                    onClick={() => this.props.selectCategory(category)}
                >
                    {category.name}
                </li>
            );
        }
        return categoryArray;
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>

        )
    }
}

// takes the appication state as an argument 
function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BookList
    return {
        categories: state.categories
    };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called the result should be passed to all of our reducers
    return bindActionCreators({ selectCategory: selectCategory }, dispatch)
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method,
// selectBook. Make it avaiable as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)