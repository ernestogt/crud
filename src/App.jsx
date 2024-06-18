import { useState, useEffect } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { fetchData } from './util/api';
import './App.css'
import Root from './components/root/root';
import Home from './components/home/home';
import UpdateUser from './components/update/update';
import CreateUser from './components/create/create';
import DeleteUser from './components/delete/delete';

function App() {
  const [data, setData] = useState([])

  const fetchUsers = async () => {
    fetchData().then(res => {
      // Sort the data by id from lower to max
      const sortedData = res.sort((a, b) => a.id - b.id);

      // Set the state with the sorted data
      setData(sortedData);

      console.log(sortedData);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Root />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home data={data} fetchData={fetchUsers} />} />
          <Route path="/update" element={<UpdateUser data={data} fetchData={fetchUsers} />} />
          <Route path="/create" element={<CreateUser fetchData={fetchUsers} />} />
          <Route path="/delete" element={<DeleteUser users={data} fetchData={fetchUsers} />} />
          <Route path="*" element={<h2>Element not found</h2>} />

        </Route>
      </Routes>

    </>
  )
}

export default App
