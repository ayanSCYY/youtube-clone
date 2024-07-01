// components/LandingPage.tsx
import React from 'react';
import { Header } from "@/components/landingpage/header";
import { Dashboard } from "@/components/landingpage/dashboard";
import Events from "@/components/Events";

const LandingPage: React.FC = () => {
    return (
        <div className="h-screen flex flex-col bg-[#0F0F0F]">
            <Header />
            <div className="flex pt-[100px]">
                <div className="w-[8%] fixed h-full">
                    <Dashboard />
                </div>
                <div className="w-[92%] ml-[8%] mr-[25px] overflow-y-auto">
                    <Events />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
