import { useState } from 'react';

import Form from './Form';

import './App.css';

// what we need
// - [ ] Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      {}
      <Form />
    </div>
  );
}

export default App;
