import {React, useState} from 'react'
import { RiUserLine,RiLockLine, RiEyeFill,RiEyeOffFill } from "react-icons/ri";

const Login = () => {
  const [showPassword, setshowPassword]= useState(false);
  return (
    <div className='bg-secondary-100 p-12 rounded-xl shadow-xl'>
      <h1  className='text-3xl uppercase font-bold tracking-[5px] text-white mb-8'>Iniciar sesión</h1>
      <form >
        <div className='relative mb-4'>
          <RiUserLine className='absolute top-1/3 -traslate-y-1/2 left-2' />
          <input type="text" 
          className='py-3 pl-8 pr-4 w-full outline-none rounded-lg' 
          placeholder='Usuario'/>
        </div>
        <div className='relative mb-4'>
          <RiLockLine className='absolute top-1/3 -traslate-y-1/2 left-2' />
          <input type= {showPassword ? "text" : "password" } 
          className='py-3 pl-8 pr-4 w-full outline-none rounded-lg' 
          placeholder='contraseña'/>

          {showPassword ?(
            <RiEyeOffFill onClick={()=>setshowPassword(!showPassword)} 
            className='absolute top-1/3 -traslate-y-1/2 right-8 hover:cursor-pointer'/>
          ):(
            <RiEyeFill onClick={()=>setshowPassword(!showPassword)} 
            className='absolute top-1/3 -traslate-y-1/2 right-8 hover:cursor-pointer'/>
          )}
          
        </div>
        <div>
          <button type='submit' 
          className='text-white bg-gradient-to-r uppercase from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium  text-sm text-centerbg-success w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors '>
              Ingresar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login