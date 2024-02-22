import React from "react";

interface TripReportCardProps {
  text: string;
  image?: string;
}

export default function TripReportCard(props: TripReportCardProps) {
  return (
    <div className="m-2 md:m-4"> {/* Adjust margin as needed */}
      <div className="overflow-hidden rounded-lg shadow bg-yellow-200 hover:bg-yellow-300 transition ease-in-out duration-150">
        {props.image && <img src={props.image} alt="" className="w-full" />}
        <div className="px-2 py-2 sm:p-4">
            {props.text}
        </div>
      </div>
    </div>
  );
}
