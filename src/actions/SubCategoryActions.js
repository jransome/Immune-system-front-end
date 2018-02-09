export function selectSubCategory(subCategoryID) {
    return {
        type: 'SUBCATEGORY_SELECTED',
        payload: subCategoryID
    };
}