const createTaskAction=(task)=>{
return{
    type:"CREATE_TASK",
    payload:task
}
}

export default createTaskAction;