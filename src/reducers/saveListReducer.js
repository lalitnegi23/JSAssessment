
const INITIAL_STATE = {
    backlogList:[],
    todoList:[],
    doneList:[],
    ongoingList:[]
  };

const saveListReducer =(state = INITIAL_STATE, action)=> {
    switch(action.type){
        case "BACKLOGLIST":
            return {...state,backlogList:[...state.backlogList,action.payload]}
        case "TODOLIST":
            return {...state,todoList:[...state.todoList,action.payload]}
        case "DONELIST":
            return {...state,doneList:[...state.doneList,action.payload]}
        case "ONGOINGLIST":
            return {...state,ongoingList:[...state.ongoingList,action.payload]}
        case "REMOVEBACKLOGLIST":
            
                const newObj = state.backlogList.filter((val)=>val!==action.payload)
                return{
                    ...state,backlogList:newObj
                }
        case "REMOVETODOLIST":
            
                    const newObj1 = state.todoList.filter((val)=>val!==action.payload)
                    return{
                        ...state,todoList:newObj1
                    }
        case "REMOVEDONELIST":
            
            const newObj2 = state.doneList.filter((val)=>val!==action.payload)
                        return{
                            ...state,doneList:newObj2
                        }
        case "REMOVEONGOINGLIST":
            const newObj3 = state.ongoingList.filter((val)=>val!==action.payload)
                        return{
                            ...state,ongoingList:newObj3
                        }
        default: 
            return state
    }
}


export default saveListReducer