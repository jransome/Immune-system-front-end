import React from 'react';
import Criterion from '../containers/Criterion/Criterion';

export function getCriteriaCards(objectList, onClickFunction, IDsArray){
    let criteriaArray = [];

    // If an array of IDs is passed return only the objects for that ID otherwise return all objects
    if(IDsArray){
        IDsArray.forEach(id => {
            let object = objectList[id];
            criteriaArray.push(
                createCriterionCard(object, onClickFunction, id)
            )
        });
    } else {
        for(let objectID in objectList){
            let object = objectList[objectID];
            criteriaArray.push(
                createCriterionCard(object, onClickFunction)
            );
        }
    }
    return criteriaArray;
}

function createCriterionCard(object, onClickFunction, objectID=object.name){
    return (
        <Criterion className="criterion-card"
            key={objectID}
            id={objectID}
            onClick={() => onClickFunction(object)}
        >
            {object.name}
        </Criterion>
    )
}