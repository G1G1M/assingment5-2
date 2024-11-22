import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const apiURL = 'https://6728ac5f270bd0b97556b69e.mockapi.io/user';

function ListPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(apiURL);
    setData(response.data);
  };

  return (
    <div className="container">
      <h1>List Page</h1>
      <Link to="/create" className="btn btn-primary mb-3">
        Add New Item
      </Link>
      <ul className="list-group">
        {data.map((item) => (
          <li key={item.id} className="list-group-item">
            <Link to={`/detail/${item.id}`}>{item.name}</Link>
            <Link to={`/update/${item.id}`} className="btn btn-warning mx-2">
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
