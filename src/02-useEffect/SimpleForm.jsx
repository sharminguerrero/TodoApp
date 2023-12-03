import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        userName: 'Sharmin',
        email : 'sharmin@gmail.com'
    });

    const { userName, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    
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
   <h1>Formulario simple</h1>
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

   {
     (userName === 'Sharmin2') && <Message/>
   }
   </>
  )
}
