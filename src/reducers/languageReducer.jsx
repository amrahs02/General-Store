// languageReducer.js
const initialState = {
    language: 'english', // default language
  };
  
  const languageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_LANGUAGE':
        return {
          ...state,
          language: state.language === 'english' ? 'hindi' : 'english',
        };
      default:
        return state;
    }
  };
  
  export default languageReducer;
  