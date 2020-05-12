import React from 'react';
import Navbar from './components/navbar/Navbar';

import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


toast.configure({
  autoClose: 2000,
  draggable: false,
  hideProgressBar: true,
  position: toast.POSITION.TOP_RIGHT
});


function App() {
  
  
  return (
    <>
      <Navbar/>
      <ToastContainer />
    </>
  );
}

export default App;
