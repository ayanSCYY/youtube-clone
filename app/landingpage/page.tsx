import { Header } from "@/components/landingpage/header";
import { Body } from "@/components/landingpage/body";
import { Dashboard } from "@/components/landingpage/dashboard";
import React from "react";

const LandingPage = () => {
    return (
        <div className="h-auto flex flex-col bg-[#0F0F0F]">
            <Header />
            <div className="flex  pt-[100px]">
                <div className="w-[8%] fixed h-full">
                    <Dashboard />
                </div>
                <div className="w-[92%] ml-[8%] mr-[25px] overflow-y-auto">
                    <Body />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
