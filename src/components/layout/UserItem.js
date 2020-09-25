import React, { Fragment } from 'react';

const UserItem = ({
  user: { avatar_url, login },
}) => {
  return (
    <Fragment>
      <div className='userCard'>
        <div className='userCardHeader'>
          {login}
        </div>
        <div className='userCardBody'>
          <img
            src={avatar_url}
            alt='user'
            className='userCardImg'
          />
        </div>
      </div>
    </Fragment>
  );
};

export default UserItem;
