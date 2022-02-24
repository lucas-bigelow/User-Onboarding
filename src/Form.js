import { useState } from 'react';

const initialVals = {
  name: '',
  email: '',
  password: '',
  terms: false
}

function Form(props) {
  const [userVals, setUserVals] = useState(initialVals);

  const change = (evt) => {
    const { name, value, type, checked } = evt.target;
    const newValue = type === 'checkbox' ? checked : value;
    setUserVals({...userVals, [name]: newValue})
  }

  const submit = evt=> {
    evt.preventDefault();
    console.log(userVals)
  }

  return (
    <form onSubmit={submit}>
      <label>
        Username:
        <input 
          name="name"
          type="text"
          value={userVals.name}
          onChange={change}
        />
      </label>
      <label>
        Email:
        <input 
          name="email"
          type="email"
          value={userVals.email}
          onChange={change}
        />
      </label>
      <label>
        Password:
        <input 
          name="password"
          type="text"
          value={userVals.password}
          onChange={change}
        />
      </label>
      <label>
        Agree to Terms of Service?
        <input 
          name="terms"
          type="checkbox"
          checked={userVals.terms}
          onChange={change}
        />
      </label>
      <button type="submit">Add New User</button>
    </form>
  )
}

export default Form;