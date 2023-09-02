'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';



const LoginPage = () => {

    const router = useRouter();

    const [formValues, setFormValues] = useState({
        email:'',
        password:''
    });

    const handleChange = (name, value ) => {

        setFormValues({...formValues, [name]: value,});
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        //request with fetch
        const config = {method: 'POST', body: JSON.stringify(formValues)}
        const response = await fetch('/api/login', config);
        const json = await response.json();
        if(json['status'] === true){
            router.replace('/dashboard')
        } else {
            alert(json['message'])
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => {handleChange('email', e.target.value)}} placeholder='Email' />
                <br></br>
                <input onChange={(e) => {handleChange('password', e.target.value)}} placeholder='Password' />
                <br></br>
                <button  type='Submit'>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;