// State argument is not application state, only the state this reducer is responsible for
export default function(previousState = initialState, action) {
    let newState = previousState;
    switch (action.type) {
        case 'CATEGORY_SELECTED':
            newState.activeCategory = action.payload;
            newState.activeSubCategory = null;
            return newState;
        case 'SUBCATEGORY_SELECTED':
            newState.activeSubCategory = action.payload;
            return newState;
        default:
            return previousState;
    }
}

const initialState = {
    activeCategory: null,
    activeSubCategory: null
}