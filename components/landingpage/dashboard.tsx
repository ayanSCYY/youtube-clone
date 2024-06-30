import Image from 'next/image';
import React from 'react';
import { DashboardData } from '@/staticdata/Dashboard';

export const Dashboard = () => {
  return (
    <div className="flex flex-col items-center gap-y-10 h-screen">
      
        {DashboardData.map((item, index) => (
        <div key={index} className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image className='' key={index} src={item.url} width={23} height={23} alt={`icon-${index}`} />
          <div className="text-white text-center text-[10px]">{item.name}</div>
        </div>
        ))}
      </div>
      
    
  );
};
