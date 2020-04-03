import React from 'react';

import TopMeNu from './Component/topmenu/TopMeNu.js';
import Header from './Component/header/Header.js';
import ConTen from './Component/content/ConTen.js';
import login from './Component/login/login.js';
import dieuhuong from './Component/router/dieuhuong.js';





function App() {
  return (
    <div className="_122">
     <TopMeNu/>
     <Header/>
    <dieuhuong></dieuhuong>

    
     <ConTen tieude="bai1"/>

     <ConTen tieude="bai2"/>

     <ConTen tieude="bai3"/>

    

    </div>
  );
}

export default App;


