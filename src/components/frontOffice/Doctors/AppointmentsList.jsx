import React, { useState, useEffect, useContext } from 'react';
import { getAppoimentByDoctor } from './doctor.service';
import './Apoiment.css';
import moment from 'moment';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserProvider';

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const getAppointments = async () => {
      console.log('ggeffsd');
      const response = await getAppoimentByDoctor(user.id);
      const sortedAppointments = response.data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return dateB - dateA;
      });

      setAppointments(sortedAppointments);
    };

    getAppointments();
  });
  const navigateToPrescription = (e, patienId) => {
    e.preventDefault();

    navigate(`/doctor/addPrespiction/${patienId}`);
  };
  return (
    <div>
      <h2>Appointments for Doctor </h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
            <th>prespection</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr
              key={appointment._id}
              className={
                moment(appointment.date).isBefore(moment())
                  ? 'appointment-row past'
                  : 'appointment-row future'
              }
            >
              <td>{moment(appointment.date).calendar()}</td>
              <td>{appointment.time}</td>
              <td>{appointment.reason}</td>
              <td>
                {' '}
                <Button
                  px={4}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}
                  onClick={e => {
                    navigateToPrescription(e, appointment.patient);
                  }}
                >
                  Add Prescription
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsList;
