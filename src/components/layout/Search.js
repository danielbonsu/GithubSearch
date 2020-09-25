import React, { useState } from 'react';

const Search = ({ searchUsers }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchUsers(text);
  };
  return (
    <div className='formContainer'>
      <form
        className='searchForm'
        onSubmit={onSubmit}
      >
        <input
          type='text'
          name='text'
          id=''
          value={text}
          onChange={onChange}
          className='search-user-input'
          placeholder='Search your favorite developer'
        />
        <input
          type='submit'
          value='Search Now'
          className='submitBtn'
        />
      </form>
    </div>
  );
};

export default Search;
