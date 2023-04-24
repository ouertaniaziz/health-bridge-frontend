import React, { useEffect, useState } from 'react';
import { getAllDoctors } from './service/patientservice';
import DoctorCard from './DoctorCard';
const AppoimentsHome = () => {
  const [Doctor, setDoctor] = useState([]);

  useEffect(() => {
    const fetchDoctor = async () => {
      const result = await getAllDoctors();
      console.log(result);

      if (result && result.data) {
        setDoctor(result.data);
        console.log(Doctor, 'hhhh');
      }
    };
    fetchDoctor();
  }, []);
  let DoctorC;
  if (Doctor.length !== 0) {
    DoctorC = Doctor.map((doctor, index) => (
      <DoctorCard doctor={doctor}></DoctorCard>
    ));
  }

  return <div>{DoctorC}</div>;
};

export default AppoimentsHome;
