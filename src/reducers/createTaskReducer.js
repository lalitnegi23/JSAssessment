
const INITIAL_STATE = {
    tasks:[]
  };

const createTaskReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "CREATE_TASK":
            return {...state,tasks:[...state.tasks,action.payload]}
      
        default: 
            return state
    }
}

export default createTaskReducer