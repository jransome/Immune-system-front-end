import React from 'react';

export function getAllListElements(objectList, onClickFunction){
    let listArray = [];
    for(let objectID in objectList){
        let object = objectList[objectID];
        listArray.push(
            createListElement(object, onClickFunction)
        );
    }
    return listArray;
}

export function getListElements(objectList, onClickFunction, IDsArray){
    let listArray = [];
    IDsArray.forEach(id => {
        let object = objectList[id];
        listArray.push(
            createListElement(object, onClickFunction)
        )
    });
    return listArray;
}

function createListElement(object, onClickFunction){
    return (
        <li
            key={object.name}
            onClick={() => onClickFunction(object)}
        >
            {object.name}
        </li>
    )
}