import { useState } from "react";
import users from "./users";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [studentNumber, setStudentNumber] = useState('');
    const [password, setPassword] = useState('');
    const submitEvent = () =>{
        let userMatching = null;
        for(let i = 0; i<users.length; i++){
            if(users[i].username == studentNumber){
                userMatching = i;
                if(users[userMatching].password == password){
                    console.log("ok");
                    navigate('/home');
                }
                else{
                    console.log("nope");
                }
            }
        }
        if(userMatching == null){
            console.log("nope");
        }
    }
    
    return (
    <div>
        <input type="id" placeholder="Enter votre numéro etudiant"  onChange={(e) => setStudentNumber(e.target.value)}/>
        <br></br>
        <input type="password" placeholder="Enter votre mot de passe"  onChange={(e) => setPassword(e.target.value)}/>
        <br></br>
        <input type="submit" value="Se connecter" onClick={submitEvent}/>

    </div>


)}

export default Login;