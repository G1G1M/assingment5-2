import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const apiURL = 'https://6728ac5f270bd0b97556b69e.mockapi.io/user';

function UpdatePage() {
  const { id } = useParams();
  const [item, setItem] = useState({ name: '', email: '' });
  const [editCount, setEditCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`${apiURL}/${id}`);
    setItem(response.data);
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    const updatedItem = { ...item, [name]: value };
    setItem(updatedItem);
    setEditCount(editCount + 1);

    await axios.put(`${apiURL}/${id}`, updatedItem);
  };

  return (
    <div className="container">
      <h1>Update Page</h1>
      <p>Number of edits: {editCount}</p>
      <input
        type="text"
        name="name"
        value={item.name}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <input
        type="email"
        name="email"
        value={item.email}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
}

export default UpdatePage;
