import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  const [roomName, setRoomName] = useState('');

  const handleRoomInputChange = (event) => {
    const { value } = event.target;
    setRoomName(value);
  };

  return (
    <div className='home-container'>
      <input
        type='text'
        placeholder='Room'
        value={roomName}
        onChange={handleRoomInputChange}
        className='text-input-field'
      />
      <Link to={`/${roomName}`} className='enter-room-button'>
        Join room
      </Link>
    </div>
  );
};

export default Home;
