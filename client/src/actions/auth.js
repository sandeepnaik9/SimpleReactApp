import * as api from '../api'

export const signin = (formData,history)=> async(dispatch)=>{
    try{
       //log in the user
        const {data} = await api.signIn(formData);
        console.log("Signin",formData)
        dispatch({type:'AUTH',data})

       history('/') 
    }
    catch(error){
        console.log(error)
    }
}

export const signup = (formData,history)=> async(dispatch)=>{
    try{
        console.log("Signup",formData)
       //Signup the user
       const {data} = await api.signUp(formData);
       dispatch({type:'AUTH',data})
       
    history('/') 
    }
    catch(error){
        console.log(error)
    }
}