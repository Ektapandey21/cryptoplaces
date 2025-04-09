import React, { useContext, useState } from 'react'
import logo2 from '../assets/logo2.svg'
import person_icon from '../assets/person_icon.svg'
import mail_icon from '../assets/mail_icon.svg'
import lock_icon from '../assets/lock_icon.svg'
import {useNavigate} from 'react-router-dom'
import {AppContent } from '../context/AppContext'
import axios from 'axios'
import{toast} from 'react-toastify'


const Login = () => {

  const navigate = useNavigate(); 

  const {backendUrl,setIsLoggedIn,getUserData}=useContext(AppContent);

  const [state,setState]=useState('Sign up');
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');


  const onSubmitHandler= async (e)=>{
     try {
      e.preventDefault();

      axios.defaults.withCredentials = true
      if(state ==='Sign up'){
        const {data} = await axios.post(backendUrl + '/api/auth/register',{name,email,password})
        if(data.success){
          setIsLoggedIn(true)
         await getUserData();
          navigate('/Home');
         
        }else{
          toast.error(data.message);
        }
      }else{

        const {data} = await axios.post(backendUrl + '/api/auth/login',{email,password})
        if(data.success){
          setIsLoggedIn(true)
          await getUserData();
          navigate('/Home');
         
        }else{
          toast.error(data.message);
        }
      }
     } catch (error) {
      console.log("Login Error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");

     }
  }


  return (
  <div>
    <button 
    onClick={() => navigate('/Home')}
    className="text-indigo-300 hover:text-white border border-indigo-500 px-4 py-1 rounded-full hover:bg-[#7927ff44] transition-all duration-300"
  >
    Home
  </button>
  

    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 '>
        <div className='bg-slate-900 px-6 py-12 sm:py-16 rounded-2xl shadow-lg w-full sm:w-[28rem] text-indigo-300 text-sm '>

        <h2 className='text-3xl font-semibold text-white text-center mb-3 '>{state === 'Sign up' ? 'Create Account': 'Login'} </h2>
        <p className='text-center text-sm mb-6 '>{state === 'Sign up' ? 'Create your Account': 'Login to your account'} </p>

        <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-y-4 ">
        { state=== 'Sign up' &&( <div className='mb-4 flex items-center gap-3 w-full rounded-full px-5 py-2.5  bg-[#333A5C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_8px_#7927ff88] '>
            <img src={person_icon} className='w-5 h-5' />
            <input 
             onChange={e=>setName(e.target.value)}
             value={name}
             type='text' 
             placeholder='Full Name' required 
             className='bg-transparent outline-none text-white w-full placeholder:text-gray-400 h-8' />
          </div>)}

        {/* <div className="flex flex-col gap-y-4"> */}

          <div className='mb-4 flex items-center gap-3 rounded-full w-full px-5 py-2.5  bg-[#333A5C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_8px_#7927ff88] '>
            <img src={mail_icon} className=' w-5 h-5' />
            <input
            onChange={e=>setEmail(e.target.value)}
            value={email}
             type='email'
             placeholder='Email Id' required
             className='bg-transparent outline-none text-white w-full placeholder:text-gray-400 h-8' />
          </div>

          <div className='mb-4 flex items-center gap-3 rounded-full w-full px-5 py-2.5  bg-[#333A5C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_8px_#7927ff88]'>
            <img src={lock_icon} className='w-5 h-5' />
            <input 
            onChange={e=>setPassword(e.target.value)}
            value={password}
            type='password' 
            placeholder='Password' required 
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}"

            className='bg-transparent outline-none text-white w-full placeholder:text-gray-400 h-8' />
          </div>
          <p className="text-xs text-white mt-1 ml-2">
  Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, and one special character.
</p>


          <p onClick={()=>navigate('/reset-password')} className='mb-4 text-indigo-500 cursor-pointer'>Forgot Password?</p>

          <button className='w-full mt-4 bg-[#7927ff] text-white py-2.5 rounded-full font-semibold 
             hover:bg-[#7927ff] hover:text-white hover:scale-105 hover:-translate-y-1 
             hover:shadow-[0_0_8px_#7927ff88] transition-all duration-300 h-10'>{state}</button>
          </div>
        </form>

        {state ==='Sign up'? (<p className='mt-6 text-center text-indigo-400'>Alredy have an acount?{' '}
              <span onClick={()=>setState('Login')} className='ml-1 text-[#7927ff] font-semibold cursor-pointer hover:underline'> Login here</span>
         </p>)
         :(<p onClick={()=>setState('Sign up')} className='mt-6 text-center text-indigo-400'>Don't have an acount?{' '}
              <span className='ml-1 text-[#7927ff] font-semibold cursor-pointer hover:underline'> Sign up</span>
         </p>)}
        
      </div>
    </div>
    </div>
  )
}

export default Login
