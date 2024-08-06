import axios from "axios"

export const handleSignup = async (username , email , password)  => {
    try {
        const responce = await axios.post("http://localhost:8080/register" , {
            name: username,
            email: email,
            password: password
        })
    
        if(responce.status === 200) {
            const jsonResponce = JSON.stringify(responce.data)
            localStorage.setItem('user' , jsonResponce)
            return true
        }
        else {
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}