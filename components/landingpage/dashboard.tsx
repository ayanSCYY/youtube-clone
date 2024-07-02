"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { DashboardData } from '@/staticdata/Dashboard';
import CustomAlert from '../CustomAlert';

export const Dashboard = () => {

  const [showAlert, setShowAlert] = useState(false);

  const handleMenuClick = () => {
    setShowAlert(true);
}

const handleCloseAlert = () => {
    setShowAlert(false);
}

  return (
    <div className="max-md:hidden flex flex-col items-center gap-y-10 h-screen">
      
        {DashboardData.map((item, index) => (
        <div key={index} onClick={handleMenuClick} className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image className='' key={index} src={item.url} width={23} height={23} alt={`icon-${index}`} />
        <div className="text-white text-center text-[10px]">{item.name}</div>
        </div>
        ))}
        {showAlert && <CustomAlert message="Currently working on it" onClose={handleCloseAlert} />}
      </div>
      
    
  );
};
