// State argument is not application state, only the state this reducer is responsible for
export default function(previousState = initialState, action) {
    let newState = previousState;
    switch (action.type) {
        case 'CATEGORY_SELECTED':
            newState.activeCategoryID = action.payload;
            newState.activeSubCategoryID = null;
            return newState;
        case 'SUBCATEGORY_SELECTED':
            newState.activeSubCategoryID = action.payload;
            return newState;
        default:
            return previousState;
    }
}

const initialState = {
    activeCategoryID: null,
    activeSubCategoryID: null
}