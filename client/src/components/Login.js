import { useState } from 'react'
import ReactDOM from 'react-dom'

function Login({ setSignUp, setLogin }){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])



  function onSubmit(e){
    e.preventDefault()
    const user = { 
      username: username, 
      password
    }

    fetch('http://127.0.0.1:3000/login',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(user)
      })
      .then(resp => resp.json())
      .then(json => {
        if(json.errors) setErrors(json.errors)
      })
  }
  return ReactDOM.createPortal(
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <h2>Welcome Back!</h2>
      <form onSubmit={onSubmit}>
        <label>
          Username
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Login!" />
      </form>
      {errors ? <div className="error">{errors}</div> : null}
      <h3>Not A Member?</h3>
      <button type="button" onClick={() => setSignUp(true)}>Sign Up Here!</button>
    </div>,
    document.getElementById('modal-root')
  )
}

export default Login