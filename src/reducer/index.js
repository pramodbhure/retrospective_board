import { DELETE_RECORD } from "../actionTypes";
const initialState = {
  topics: [
    {
      id: 0,
      name: "UI First Sprint Overview",
      highlight: false,
      what_went_well: [
        "All tickets done in the first sprint.",
        "Good communications between team members"
      ],
      what_improve: ["Need to work on coding knowledge"],
      sprint_action: [""]
    },
    {
      id: 1,
      name: "UI Second Sprint Overview",
      highlight: false,
      what_went_well: ["All tickets done in the first sprint."],
      what_improve: ["Need to work on coding knowledge", "", ""],
      sprint_action: ["", ""]
    }
  ],

  showSections: true,
  cards: [],
  textValue: "",
  improveCardsObj: [],
  positiveCardsObj: [],
  toDoCardsObj: [],
  whatImproveText: "",
  whatPositiveText: "",
  whatToDoText: "",
  objChanged: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_RECORD:
      state.topics.splice(action.index, 1);
      return { ...state };

    case "TOGGLE_SHOW_HIDE":
      return { ...state, showSections: action.payload };
    // return Object.assign({}, state, {
    //     showSections: action.payload
    // })
    case "ADD_RETRO":
      const cardsArray = state.cards;
      cardsArray.push(action.payload);
      return { ...state, cards: cardsArray, textValue: "" };

    case "ADD_IMPROVE_RETRO":
      const impCardsArray = state.improveCardsObj;
      impCardsArray.push({ card: action.payload, showEdit: false });
      return { ...state, improveCardsObj: impCardsArray, whatImproveText: "" };

    case "ADD_POSITIVE_RETRO":
      const impPositiveCardsArray = state.positiveCardsObj;
      impPositiveCardsArray.push({ card: action.payload, showEdit: false });
      return {
        ...state,
        positiveCardsObj: impPositiveCardsArray,
        whatPositiveText: ""
      };

    case "ADD_TODO_RETRO":
      const impToDoCardsArray = state.toDoCardsObj;
      impToDoCardsArray.push({ card: action.payload, showEdit: false });
      return { ...state, toDoCardsObj: impToDoCardsArray, whatToDoText: "" };

    case "ON_HANDLE_CHANGE":
      return { ...state, textValue: action.payload };

    case "ON_IMPROVE_CHANGE":
      return { ...state, whatImproveText: action.payload };

    case "ON_POSITIVE_CHANGE":
      return { ...state, whatPositiveText: action.payload };

    case "ON_TODO_CHANGE":
      return { ...state, whatToDoText: action.payload };

    case "ON_SAVE_IMPROVE_CARD":
      const imprArray = state.improveCardsObj;
      imprArray[action.indexNumber].card = action.newValue;
      imprArray[action.indexNumber].showEdit = false;
      return { ...state, improveCardsObj: imprArray, objChanged: false };

    case "ON_SAVE_POSITIVE_CARD":
      const positiveArray = state.positiveCardsObj;
      positiveArray[action.indexNumber].card = action.newValue;
      positiveArray[action.indexNumber].showEdit = false;
      return { ...state, positiveCardsObj: positiveArray, objChanged: false };

    case "ON_SAVE_TODO_CARD":
      const toDoArray = state.toDoCardsObj;
      toDoArray[action.indexNumber].card = action.newValue;
      toDoArray[action.indexNumber].showEdit = false;
      return { ...state, toDoCardsObj: toDoArray, objChanged: false };

    case "ON_SHOW_EDIT_CARD":
      console.log("action.indexNumber: ", action.indexNumber);
      const imprObj = state.improveCardsObj;
      console.log(imprObj[action.indexNumber]);
      imprObj[action.indexNumber].showEdit = true;
      console.log("ON_SHOW_EDIT_CARD", imprObj);
      return { ...state, improveCardsObj: imprObj, objChanged: true };

    default:
      return state;
  }
};

export default reducer;
