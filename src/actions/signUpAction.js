const signUpAction=(user)=>{
    return{
        type:"SIGNUP",
        payload:user
    }
}

export default signUpAction