import React,{useState, useEffect}from 'react'
import axios from "axios";
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';


function Register() {
  const [name , setname]  = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [cpassword, setcpassword] = useState('')
 
  const [loading , setloading] = useState(false)
  const [error, setError] = useState("");
  const [success, setSuccess] = useState()

  async function register(){
    if(password===cpassword){
        const user= {
            name,
            email,
            password,
            cpassword
        }
        try{
            setloading(true);
            const result = await axios.post('http://localhost:5000/api/users/register', user).data
            setloading(false)
            setSuccess(true)

            setname('')
            setemail('')
            setpassword('')
            setcpassword('')
        }catch(error){
            console.log(error)
            setloading(false)
            setError(true)

        }
    }else{
        alert('passwords not matched')
    }
   
  }

  return (
    <div>
        {loading && (<Loader/>)}
        {error && (<Error/>)}
        <div className="row justify-content-center mt-5">
            <div className = "col-md-5 mt-5">
            {success && (<Success message='Registered successfull'/>)}
                <div className='bs'>
                    <h2>Register</h2>
                    <input type="text" className="from-control" placeholder="name"
                     value={name} onChange={(e)=>{setname(e.target.value)}} required/><br/>
                    <input type="text" className="from-control" placeholder="email"
                    value={email} onChange={(e)=>{setemail(e.target.value)}} required/><br/>
                    <input type="text" className="from-control" placeholder="password"
                    value={password} onChange={(e)=>{setpassword(e.target.value)}} required/><br/>
                    <input type="text" className="from-control" placeholder="cpassword"
                    value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} required/><br/>
                    <button className='btn btn-primary mt-3'onClick={register}>Register</button>
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Register;