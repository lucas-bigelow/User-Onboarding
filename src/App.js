import { useState } from 'react';

import Form from './Form';

import './App.css';

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

  const setErrors = (name, error) => {
    setFormErrors({...formErrors, [name]: error})
  }

  return (
    <div className="App">
      {}
      <Form setFormErrors={setFormErrors}/>
      {formErrors.map(error => {
        return <p>{error}</p>
      })}
    </div>
  );
}

export default App;
