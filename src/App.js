import { useState, useEffect } from 'react';

import Form from './Form';

import './App.css';
import axios from 'axios';

// what a 'user' object looks like:
// {
//   name: '',
//   email: '',
//   password: '',
//   terms: false
// }

// initial errors
const initialErrors = {
  name: '',
  email: '',
  password: '',
  terms: ''
}

function App() {
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState(initialErrors);

  // if we get an error, set it
  const setErrors = (name, error) => {
    setFormErrors({...formErrors, [name]: error.message})
  }

  // post a new user
  const addNewUser = (user) => {
    axios.post('https://reqres.in/api/users', user)
      .then(response => response.data)
      .then(response => setUsers([...users, response]))
      .catch(err => console.error(err))
  }

  return (
    <div className="App">
      {Object.keys(formErrors).map(error => {
        return formErrors[error] && <p>{formErrors[error]}</p>
      })}
      <Form setErrors={setErrors} addNewUser={addNewUser} />
      {users.map(user => {
        return (
          <div className="user">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
