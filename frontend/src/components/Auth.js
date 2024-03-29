import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Auth = () => {
  const [inputs,setInputs] = useState({
    name:"",email:"",password:""
  })
  const [isSignup, setIsSignup] = useState(false)
  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }
  return (
    <div>
      <form>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow={"10px 10px 20px #ccc"}
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
          >
            <Typography variant='h2' padding={3} textAlign={"center"}>{isSignup ? "Signup" : "Login"}</Typography>
            { isSignup && 
              <TextField name='name' onChange={handleChange} value={inputs.name} placeholder='Name' margin={"normal"} />
            }           
            <TextField name='email' onChange={handleChange} value={inputs.email} type={'email'} placeholder='Email' margin={"normal"} />
            <TextField name='password' onChange={handleChange} value={inputs.password} type={'password'} placeholder='Password' margin={"normal"} />

            <Button variant='contained' sx={{borderRadius:3,marginTop:3}} color="warning">Submit</Button>
            <Button onClick={()=>setIsSignup(!isSignup)} sx={{borderRadius:3,marginTop:3}}>Change To {isSignup ? "Login" : "Signup"}</Button>

        </Box>
      </form>
    </div>
  )
}

export default Auth