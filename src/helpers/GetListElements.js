import React from 'react';
import Tab from '../containers/Tab/Tab';


export function getListElements(objectList, onClickFunction, isCategoryTab, IDsArray){
    let listArray = [];

    // If an array of IDs is passed return only the objects for that ID otherwise return all objects
    if(IDsArray){
        IDsArray.forEach(id => {
            let object = objectList[id];
            listArray.push(
                createListElement(object, onClickFunction, id, isCategoryTab)
            )
        });
    } else {
        for(let objectID in objectList){
            let object = objectList[objectID];
            listArray.push(
                createListElement(object, onClickFunction, objectID, isCategoryTab)
            );
        }
    }
    return listArray;
}

function createListElement(object, onClickFunction, id, isCategoryTab){
    return (
        <Tab
            key={object.name}
            onClickFunction={() => onClickFunction(id)}
            name={object.name}
            isCategoryTab={isCategoryTab}
            tabID={id}
        />
    )
}