import React from "react";
import NavBar from "../components/navBar";
import TripReportCard from "../components/TripReportCard";
import ArchiveTab from "../components/archiveTab";
import Img from "../assets/dalesImage.jpg"; // Assuming Img is still imported here

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
  { id: 4, text: "Yet Another Report", image: Img },
  { id: 5, text: "Yet Another Report", image: Img },
  { id: 6, text: "Yet Another Report", image: Img },

  // Add more reports as needed, following the same structure
];

const TripReport: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <ArchiveTab />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 ">
        {tripReports.map((report) => (
          <TripReportCard key={report.id} text={report.text} image={report.image} />
        ))}
      </div>
    </div>
  );
};

export default TripReport;
