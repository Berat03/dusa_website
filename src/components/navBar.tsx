import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="flex justify-between bg-orange-900  text-yellow-500 font-extrabold">

            <div className="flex flex-row ">
                <h1 className=" bg-orange-900">DUSA</h1>
            </div>

            <div className="flex flex-row ">
                <NavLink
                  to="/"
                  className="bg-orange-900 hover:bg-orange-700"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#fa8469' : '#7b341e' /* Change '#f00' to the color for active link and '#fff' for inactive */
                  })}
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/TripReports"
                  className="bg-orange-900 hover:bg-orange-700"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#fa8469' : '#7b341e' /* Change '#f00' to the color for active link and '#fff' for inactive */
                  })}
                >
                  TRIPS
                </NavLink>
                <NavLink
                  to="/ContactUs"
                  className="bg-orange-900 hover:bg-orange-700"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#fa8469' : '#7b341e' /* Change '#f00' to the color for active link and '#fff' for inactive */
                  })}
                >
                  CONTACT
                </NavLink>

            </div>

        </div>
    )
}
