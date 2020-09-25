import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users }) => {
  return (
    <div className='cardlistContainer'>
      {users &&
        users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
    </div>
  );
};

export default UserList;
