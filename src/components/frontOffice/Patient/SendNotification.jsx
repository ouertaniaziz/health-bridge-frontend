import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './SendNotfication.css';
import Time from './Time';
import { useParams } from 'react-router-dom';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');

const SendNotification = () => {
  const { id } = useParams();
  console.log(id);
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  const sendMessage = () => {
    const data = { message: 'Hello, world!' };
    socket.emit('notification', data);
  };
  useEffect(() => {
    socket.on('recive', data => {
      alert(data.message);
    });
  }, [socket]);

  return (
    <div>
      <Calendar
        onChange={setDate}
        value={date}
        onClickDay={() => setShowTime(true)}
      />
      Selected date: {date.toDateString()}
      <Time showTime={showTime} date={date} doctorid={id} />
    </div>
  );
};

export default SendNotification;
