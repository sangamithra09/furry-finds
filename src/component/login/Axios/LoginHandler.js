import axios from "axios";

export const loginHandler = async (email , password) => {
    try {
        const response = await axios.post("http://localhost:8080/login", {
            "email": email,
            "password": password
        })
    
        if(response.status === 200) {
            localStorage.setItem('user' , JSON.stringify(response.data))
            console.log("True")
            return true 
        }
        console.log("object")
        return false 
    } catch (error) {
        console.log(error)
        if(error.response.status === 401) {
            console.log("401 err")
            return false
        }
        return false
    }
}