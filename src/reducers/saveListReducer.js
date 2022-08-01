
const INITIAL_STATE = {
    backlogList:[],
    todoList:[],
    doneList:[],
    ongoingList:[]
  };

const saveListReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "BACKLOGLIST":
            return {...state,backlogList:[...state.backlogList,action.payload]}
        case "TODOLIST":
            return {...state,todoList:[...state.todoList,action.payload]}
        case "DONELIST":
            return {...state,doneList:[...state.doneList,action.payload]}
        case "ONGOINGLIST":
            return {...state,ongoingList:[...state.ongoingList,action.payload]}
        default: 
            return state
    }
}

export default saveListReducer