import { useAuthStore } from "@/store/auth";
import React, { useState } from "react";

function RegisterPage(){
    const {createAccount, login} = useAuthStore();
    const [isLoading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')

    const handleSubmit = async(e: React.
    FormEvent<HTMLFormElement>) =>{
        e.preventDefault

        //collect data
        const formData = new FormData(e.currentTarget)
        const firstname = formData.get("firstname")
        const lastname = formData.get("lastname")
        const email = formData.get("email")
        const password = formData.get("password")

        //validate

        if(!firstname || !lastname || !email || !password){
            setError(()=> "please fill out the field")
            return
        }

        //call the store
        setLoading(true)
        setError("")

        const response = await createAccount(
            `${firstname}${lastname}`,
            email?.toString(),
            password?.toString(),
        )


        if(response.error){
            setError(()=> response.error!.message)
        }else{
            const loginResponse = await login(email.toString(), password.toString())
            if(loginResponse.error){
                setError(()=> loginResponse.error!.message)
            }
        }

        setLoading(()=> false)
    }
    return(
        <div>
            {error && (
                <p>{error}</p>
            )
            }
            <form onSubmit={handleSubmit}></form>
        </div>
    )
} 

export default RegisterPage