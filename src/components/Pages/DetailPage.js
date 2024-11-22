import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const apiURL = 'https://6728ac5f270bd0b97556b69e.mockapi.io/user';

function DetailPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`${apiURL}/${id}`);
    setItem(response.data);
  };

  return (
    <div className="container">
      <h1>Detail Page</h1>
      {item ? (
        <div>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailPage;
