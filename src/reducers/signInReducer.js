
const INITIAL_STATE = {
    users:[]
  };

const signInReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "SIGNIN":
            return {...state,users:[...state.users,action.payload]}
      
        default: 
            return state
    }
}

export default signInReducer