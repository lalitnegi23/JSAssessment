const INITIAL_STATE = {
    users:[]
  };

const signUpReducer = (state = INITIAL_STATE , action) => {
    

    switch(action.type){
        case "SIGNUP":
            return {...state, users:[...state.users,action.payload]}
      
        default: 
            return state
    }
}

export default signUpReducer