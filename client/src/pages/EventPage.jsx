/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const VITE_API = `${import.meta.env.VITE_API}`;

const EventPage = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${VITE_API}/api/event/${id}`);
        setEventData(response.data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEvent();
  }, [id]);


  return (
    <>
      <div className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-white mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={
                    "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                  }
                  alt="Event Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {eventData?.eventName}
              </h2>
              <p className="font-bold text-gray-700 text-sm mb-4">
                Created by:{" "}
                <span className="text-gray-600 font-medium">
                  {eventData?.createdBy || "John Doe"}
                </span>
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700">Date:</span>
                  <span className="text-gray-600">
                    {new Date(eventData?.date).toLocaleDateString() || "N/A"}
                    {/* Dynamic event date */}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Time:</span>
                  <span className="text-gray-600">
                    {eventData?.time || "N/A"}
                  </span>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700">Venue:</span>
                  <span className="text-gray-600">
                    {eventData?.eventVenue || "Taj Hotel"}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Capacity:</span>
                  <span className="text-gray-600">
                    {eventData?.capacity || "N/A"}
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700">
                  Event Description:
                </span>
                <p className="text-gray-600 text-sm mt-2">
                  {eventData?.description || "No description available."}
                </p>
                <div className="flex my-4">
                  <div className="w-1/2 px-2">
                    <button className="w-full bg-red-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                      RSVP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
