import React, {useState} from "react";

const Form = () =>{

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confPassword, setConfPassword] = useState("");





    return(
        <>
            <form>
                <div>
                    <label htmlFor="">First Name:</label>
                    <input type="text" onChange={(e)=>setFirstName(e.target.value)} name="" id="" />
                    {
                        firstName.length<2? <p>That field must be at least 2 characters!</p> : null
                    }
                </div>
                <div>
                    <label htmlFor="">Last Name:</label>
                    <input type="text" onChange={(e)=>setLastName(e.target.value)} name="" id="" />
                    {
                        lastName.length<2? <p>That field must be at least 2 characters!</p> : null
                    }
                </div>
                <div>
                    <label htmlFor="">email:</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} name="" id="" />
                    {
                        email.length<5? <p>The field must be at least 5 characters!</p> : null
                    }
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} name="" id="" />
                    {
                        password.length<8? <p>The field must be at least 8 characters!</p> : null
                    }
                </div>
                <div>
                    <label htmlFor="">Confirm Password:</label>
                    <input type="password" onChange={(e)=>setConfPassword(e.target.value)} name="" id="" />
                    {
                        confPassword.length<8? <p>The field must be at least 8 characters!</p> : null
                    }
                    {
                        password.value !== confPassword.value? <p>Passwords must match!</p> : null
                    }
                </div>
            </form>
            <hr />
            <h3>Your Info Here:</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confPassword}</p>
        </>
    )
}




export default Form;