import React, { useState } from 'react';
import axios from 'axios';

const apiURL = 'https://6728ac5f270bd0b97556b69e.mockapi.io/user';

function CreatePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    await axios.post(apiURL, { name, email });
    setName('');
    setEmail('');
  };

  return (
    <div className="container">
      <h1>Create Page</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control mb-2"
      />
      <button onClick={handleSubmit} className="btn btn-success">
        Submit
      </button>
    </div>
  );
}

export default CreatePage;
