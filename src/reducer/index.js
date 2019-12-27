const initialState = {
    "topics": [{
      'id':0,
      'name':'UI First Sprint Overview',
      'highlight':false,
      'what_went_well': ['All tickets done in the first sprint.', 'Good communications between team members'],
      'what_improve': ['Need to work on coding knowledge'],
      'next_steps':['Start working on second sprint planning']
  }]
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;