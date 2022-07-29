const signInAction=(user)=>{
    return{
        type:"SIGNIN",
        payload:user
    }
}

export default signInAction