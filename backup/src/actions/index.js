import {TOGGLE_SHOW_HIDE, ADD_RETRO, ON_HANDLE_CHANGE, ADD_IMPROVE_RETRO, ON_IMPROVE_CHANGE, ON_SAVE_IMPROVE_CARD, ON_SHOW_EDIT_CARD} from '../actionTypes';

export const toggleShowHide = (showOrHide) => {
    return {
        type: TOGGLE_SHOW_HIDE,
        payload: showOrHide
    }
};

export const addRetro = (event) => {
    return {
        type: ADD_RETRO,
        payload: event.target.value
    }
}

export const onHandleChange = (event) => {
    console.log(event.target.value);
    return {
        type: ON_HANDLE_CHANGE,
        payload: event.target.value
    }
}

export const addImprove = (event) => {
    return {
        type: ADD_IMPROVE_RETRO,
        payload: event.target.value
    }
}

export const onImproveChange = (event) => {
    return {
        type: ON_IMPROVE_CHANGE,
        payload: event.target.value
    }
}
export const saveImproveCard = (newValue, index) => {
    console.log("saveImproveCard: ", newValue);
    console.log("saveImproveCard: ", index);
    return {
        type: ON_SAVE_IMPROVE_CARD,
        newValue: newValue,
        indexNumber: index
    }
}
export const showEditOption = (index) => {
    return {
        type: ON_SHOW_EDIT_CARD,
        indexNumber: index
    }
}
