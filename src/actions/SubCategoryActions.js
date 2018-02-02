export function selectSubCategory(subCategory) {
    return {
        type: 'SUBCATEGORY_SELECTED',
        payload: subCategory
    };
}