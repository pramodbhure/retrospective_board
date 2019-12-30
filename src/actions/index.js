import {DELETE_RECORD} from '../actionTypes';


export const deleteRecord = (index) => {
    return {
        type: DELETE_RECORD,
        payload: index
    }
}

