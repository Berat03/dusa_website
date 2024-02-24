import React from "react";
import NavBar from "../components/navBar";
import TripReportCard from "../components/TripReportCard";
import Img from "../assets/dalesImage.jpg";

// Define the type for your trip reports
interface TripReport {
  id: number;
  text: string;
  image: string;
}

// Define your trip reports using the type
const tripReports: TripReport[] = [
  { id: 1, text: "Report", image: Img },
  { id: 2, text: "Another Report", image: Img },
  { id: 3, text: "Yet Another Report", image: Img },
  { id: 4, text: "Report 4", image: Img },
  { id: 5, text: "Report 5", image: Img },
  { id: 6, text: "Report 6", image: Img },
  { id: 7, text: "Report 7", image: Img },
  { id: 8, text: "Report 8", image: Img },
  { id: 9, text: "Report 9", image: Img },

];

const TripReport: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 ">
        {tripReports.map((report) => (
          <TripReportCard key={report.id} text={report.text} image={report.image} />
        ))}
      </div>
    </div>
  );
};

export default TripReport;
