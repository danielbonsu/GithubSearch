import React, { useState, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserList from './components/layout/UserList';
import Jumbotron from './components/layout/Jumbotron';
import axios from 'axios';
import Search from './components/layout/Search';

const App = () => {
  const [foundUsers, getUsers] = useState({
    loading: true,
    usersFetched: [],
  });

  const searchUsers = async (text) => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    getUsers({
      ...foundUsers,
      loading: false,
      usersFetched: [...res.data.items],
    });
  };
  return (
    <Fragment>
      <Navbar />
      <div className='main-container'>
        <Search searchUsers={searchUsers} />
        <UserList
          users={foundUsers.usersFetched}
        />
      </div>
    </Fragment>
  );
};

export default App;
