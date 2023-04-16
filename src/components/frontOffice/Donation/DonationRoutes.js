import React from "react";
import {Route,Routes}from 'react-router-dom';
import Donation from './Donation';
import Register from './Register'
import Consult from './Consult';
import Listofmaterials from './Listofmaterials';
import Listofmedications from './Listofmedications';

const DonationRoutes=()=>{
    return (<>
    <Routes>

        <Route path="/register" element={<Register/>} />
        <Route path="/Consult" element={<Consult/>} />
        <Route path="/Listmedications" element={<Listofmedications/>} />
        <Route path="/Listmatirials" element={<Listofmaterials/>} />
    </Routes>
    
    
    </>)
}
export default DonationRoutes;