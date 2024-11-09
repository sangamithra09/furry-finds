import axios from "axios";

export const loginHandler = async (email , password) => {
    try {
        const response = await axios.post("http://localhost:8080/login", {
            "email": email,
            "password": password
        })
        const userid = response.data[0];
        const username=response.data[1];
        console.log("userid ",userid);
        console.log("username",username);

        if(response.status === 200) {
            localStorage.setItem('userid' , userid);
            localStorage.setItem('username' , username);
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