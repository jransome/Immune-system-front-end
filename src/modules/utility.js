import { STATUS_TO_CLASS } from '../Constants'

export const Utility = {

    getStatusStyle: (childData) => {
        let style;
    
        for (let i = 0; i < childData.length; i++) {
            // console.log(typeof childData[i].status, childData[i])
            if(childData[i].status === 1 || childData[i].status === 0){
                style = STATUS_TO_CLASS[0];
                break;
            } else {            
                style = STATUS_TO_CLASS[2];
            }   
        }
        return style;
    }

}


