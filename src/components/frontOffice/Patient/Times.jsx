import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import './SendNotfication.css';
import { addAppoiment } from './service/patientservice';
import { useNavigate } from 'react-router-dom';

const time = ['08:00', '09:00', '10:00', '14:00', '15:00'];

function Times(props) {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [info, setInfo] = useState(false);

  function displayInfo(e) {
    e.preventDefault();

    setEvent(e.target.innerText);

    if (event) {
      const data = {
        patientId: user.id,
        doctorId: props.doctorid,
        dosageForm: 'Tablet',
        date: props.date,
        time: event,
        reason: 'test',
      };

      const result = addAppoiment(data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      console.log(result);
      setInfo(true);
    }
  }
  if (info) {
    navigate('/patient/appoiments');
  }

  return (
    <div className="times">
      {time.map(times => {
        return (
          <div>
            <button onClick={e => displayInfo(e)}> {times} </button>
          </div>
        );
      })}
      <div>
        {info
          ? `Your appointment is set to ${event} ${props.date.toDateString()}`
          : null}
      </div>
    </div>
  );
}

export default Times;
