
"use client"

import Events from "../Events";
import { Dashboard } from "./dashboard";
import Header from "./header";


const LandingPageComponent: React.FC = () => {
    return (
        <div className="min-h-screen h-auto w-full pt-4 pb-8 flex flex-col bg-[#0F0F0F]">
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

export default LandingPageComponent;
