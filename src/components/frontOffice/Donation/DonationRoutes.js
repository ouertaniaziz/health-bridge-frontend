import signin from '../Donation/signinsignupdonor/signin';
import signup from '../Donation/signinsignupdonor/signup';
import { Navigate, Route, Routes } from 'react-router-dom';
import Donationcomponent from '../Donation/Donationscomponent';
const DonationRoutes = () => {
    return (
      <Routes>
         <Route element='/Donation' path ={<Donationcomponent/>}></Route>
        <Route element='/Donation/signup' path ={<signup/>}></Route>
        <Route element='/Donation/signin' path ={<signin/>}></Route>

      </Routes>
    );
  };
  
  export default DonationRoutes;
  