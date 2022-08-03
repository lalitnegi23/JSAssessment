export function removeBackLogListAction(val){
    return{
        type:"REMOVEBACKLOGLIST",
        payload:val
    }
}

export function removeTodoListAction(val){
    return{
        type:"REMOVETODOLIST",
        payload:val
    }
}

export function removeDoneListAction(val){
    return{
        type:"REMOVEDONELIST",
        payload:val
    }
}

export function removeOngoingListAction(val){
    return{
        type:"REMOVEONGOINGLIST",
        payload:val
    }
}

export default {removeBackLogListAction,removeTodoListAction,removeDoneListAction,removeOngoingListAction}