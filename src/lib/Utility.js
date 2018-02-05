import React from 'react';

export function getListElements(objectList, onClickFunction, IDsArray){
    let listArray = [];

    // If an array of IDs is passed return only the objects for that ID otherwise return all objects
    if(IDsArray){
        IDsArray.forEach(id => {
            let object = objectList[id];
            listArray.push(
                createListElement(object, onClickFunction)
            )
        });
    } else {
        for(let objectID in objectList){
            let object = objectList[objectID];
            listArray.push(
                createListElement(object, onClickFunction)
            );
        }
    }
    return listArray;
}

function createListElement(object, onClickFunction){
    return (
        <li className="tab-items"
            key={object.name}
            onClick={() => onClickFunction(object)}
        >
            {object.name}
        </li>
    )
}