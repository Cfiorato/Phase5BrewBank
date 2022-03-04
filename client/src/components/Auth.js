import { useState } from 'react'
import ReactDOM from 'react-dom'

function Auth({ setSignUp, setLogin }){
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  function onSubmit(e){
    e.preventDefault()
    const user = { 
      username: username, 
      name: name, 
      password
    }

    fetch('http://127.0.0.1:3000/users',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(user)
      })
      .then(resp => resp.json())
      .then(json => {
        if(json.errors) setErrors(Object.entries(json.errors))
        setLogin(false)
      })
  }
  return ReactDOM.createPortal(
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <h2>Sign Up For Brew Bank</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <label>
          Username
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Login!" />
      </form>
      {errors ? errors.map(e => <div className="error">{e[0]+': '+e[1]}</div>) : null}
      <h3>Already a Member?</h3>
      <button type="button" onClick={() => setSignUp(false)}>Sign In Here</button>
    </div>,
    document.getElementById('modal-root')
  )
}

export default Auth