import { useState } from 'react'
import Auth from './Auth'
import Login from './Login'

function SignIn({ setLogin, login }){
  
  const [signUp, setSignUp] = useState(false)

  const onBackdropClick = () => setLogin(!login)

  let component = signUp ?  
    <Auth setSignUp={setSignUp} setLogin={setLogin}/>
    :
    <Login setSignUp={setSignUp} setLogin={setLogin}/>
  
  
  if(!login){
    return null
  }
  return(
    <div className="modal-container" onClick={onBackdropClick}>
      {component}
    </div>
  )
}

export default SignIn