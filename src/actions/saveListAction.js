export function saveBackLogListAction(val){
    return{
        type:"BACKLOGLIST",
        payload:val
    }
}

export function saveTodoListAction(val){
    return{
        type:"TODOLIST",
        payload:val
    }
}

export function saveDoneListAction(val){
    return{
        type:"DONELIST",
        payload:val
    }
}

export function saveOngoingListAction(val){
    return{
        type:"ONGOINGLIST",
        payload:val
    }
}

export default {saveBackLogListAction,saveTodoListAction,saveDoneListAction,saveOngoingListAction}