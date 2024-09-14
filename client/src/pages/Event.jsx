import { useEffect, useState } from "react";
import EventCard from "../components/EventCard.jsx";
import axios from "axios";
const VITE_API = `${import.meta.env.VITE_API}`;

const Event = () => {

  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    axios.get(`${VITE_API}/api/event`)
      .then((response) => {
        setEventData(response.data);           
      })
      .catch((err) => {
        console.log(err)   
      });
  }, []);

  return (
    <>
      <section className="bg-gray-50 py-8 antialiased  md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div>
              <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">
                Events
              </h2>
            </div>
          </div>
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">

            {eventData && eventData.map((event) => (
              <EventCard key={event._id} title={event.eventName} date={event.date} id={event._id} />  
            ))}
            
          </div>
          {/* <div className="w-full text-center">
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              Show more
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Event;
