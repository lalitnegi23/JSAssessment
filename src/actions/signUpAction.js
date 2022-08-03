const signUpAction=(user)=>{
    console.log("signupreducer")
    return{
        type:"SIGNUP",
        payload:user
    }
}

export default signUpAction