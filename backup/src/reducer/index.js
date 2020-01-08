const initialState = {
    showSections: true,
    cards: [],
    textValue: '',
    improveCardsObj: [], 
    whatImproveText: '',
    objChanged: false
  };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_HIDE":
      return {...state, showSections: action.payload};
      // return Object.assign({}, state, {
      //     showSections: action.payload
      // })
    case "ADD_RETRO":
      const cardsArray = state.cards;
      cardsArray.push(action.payload);
      return {...state, cards: cardsArray, textValue: ''}

    case "ADD_IMPROVE_RETRO":
      const impCardsArray = state.improveCardsObj;
      impCardsArray.push({'card':action.payload, 'showEdit': false});
      return {...state, improveCardsObj: impCardsArray, whatImproveText: ''}
      
    case "ADD_POSITIVE_RETRO":
      const impCardsArray = state.positiveCardsObj;
      impCardsArray.push({'card':action.payload, 'showEdit': false});
      return {...state, positiveCardsObj: impCardsArray, whatPositiveText: ''}

    case "ADD_TODO_RETRO":
        const impCardsArray = state.toDoCardsObj;
        impCardsArray.push({'card':action.payload, 'showEdit': false});
        return {...state, toDoCardsObj: impCardsArray, whatToDoText: ''}

    case "ON_HANDLE_CHANGE":
      return {...state, textValue: action.payload}

    case "ON_IMPROVE_CHANGE":
      return {...state, whatImproveText: action.payload}

      case "ON_POSITIVE_CHANGE":
        return {...state, whatPositiveText: action.payload}

        case "ON_TODO_CHANGE":
          return {...state, whatToDoText: action.payload}

    case "ON_SAVE_IMPROVE_CARD":
      const imprArray = state.improveCardsObj;
      imprArray[action.indexNumber].card = action.newValue;
      imprArray[action.indexNumber].showEdit = false;
      return {...state, improveCardsObj: imprArray, objChanged: false}

      case "ON_SAVE_POSITIVE_CARD":
        const imprArray = state.positiveCardsObj;
        imprArray[action.indexNumber].card = action.newValue;
        imprArray[action.indexNumber].showEdit = false;
        return {...state, positiveCardsObj: imprArray, objChanged: false}

        case "ON_SAVE_TODO_CARD":
        const imprArray = state.toDoCardsObj;
        imprArray[action.indexNumber].card = action.newValue;
        imprArray[action.indexNumber].showEdit = false;
        return {...state, positiveCardsObj: imprArray, objChanged: false}

    case "ON_SHOW_EDIT_CARD":
      console.log("action.indexNumber: ", action.indexNumber);
      const imprObj = state.improveCardsObj;
      console.log(imprObj[action.indexNumber]);
      imprObj[action.indexNumber].showEdit = true;
      console.log("ON_SHOW_EDIT_CARD", imprObj)
      return {...state, improveCardsObj: imprObj, objChanged: true}

    default:
      return state;
  }
};

export default reducer;