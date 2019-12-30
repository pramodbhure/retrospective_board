import { DELETE_RECORD } from '../actionTypes';
const initialState = {
    "topics": [{
      'id':0,
      'name':'UI First Sprint Overview',
      'highlight':false,
      'what_went_well': ['All tickets done in the first sprint.', 'Good communications between team members'],
      'what_improve': ['Need to work on coding knowledge'],
      'sprint_action': ['']

  },{
      'id':1,
      'name':'UI Second Sprint Overview',
      'highlight':false,
      'what_went_well': ['All tickets done in the first sprint.'],
      'what_improve': ['Need to work on coding knowledge','',''],
      'sprint_action': ['','']
  }]
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_RECORD:
      state.topics.splice(action.index, 1);
      return {...state};

    default:
      return state;
  }
};

export default reducer;