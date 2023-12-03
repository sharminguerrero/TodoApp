import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    
   const {formState, onInputChange, onResetForm,userName, email, password} = useForm({
    userName: '',
    email : '',
    password : ''
   });

   //const {userName, email, password} = formState;

    useEffect ( () => {
       // console.log('useEffect called');
    },[]);

    useEffect ( () =>{
       // console.log('formState changed');
    }, [formState]);

    useEffect ( ()=> {
        //console.log('email changed');
    }, [email]);

  return (
   <>
   <h1>Formulario con custom hook</h1>
   <hr/>

   <input
   type="text"
   className="form-control"
   placeholder="UserName"
   name="userName"
   value={userName}
   onChange={onInputChange}
   />

  <input
   type="email"
   className="form-control mt-2"
   placeholder="sharmin@gmail.com"
   name="email"
   value={email}
   onChange={onInputChange}
   />

<input
   type="password"
   className="form-control mt-2"
   placeholder="Password"
   name="password"
   value={password}
   onChange={onInputChange}
   />

   <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
   </>
  )
}
