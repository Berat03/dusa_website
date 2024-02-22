import NavBar from "../components/navBar";
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Blog(){
    const navigate = useNavigate();

    return (
    <div className="min-h-screen flex flex-col">
        <div>
            <NavBar/>
        </div>

        <div className="flex flex-1 flex-col sm:flex-row">
          <div
            className="flex flex-1 items-center justify-center bg-blue-500 text-white cursor-pointer hover:bg-blue-700 transition-colors w-full sm:w-1/2"
            onClick={() => navigate('/image-archive')}
          >
            <p className="text-xl font-bold">Image Archive</p>
          </div>
          <div
            className="flex flex-1 items-center justify-center bg-green-500 text-white cursor-pointer hover:bg-green-700 transition-colors w-full sm:w-1/2"
            onClick={() => navigate('/TripReports')}
          >
            <p className="text-xl font-bold">Trip Reports</p>
          </div>
        </div>
    </div>
    );
}


