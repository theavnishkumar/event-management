import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const EventCard = ({ title, date, id }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="h-56 w-full">
        <Link to={`/event/${id}`}>
          <img
            className="mx-auto h-full "
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            alt=""
          />
        </Link>
      </div>
      <ul className="mt-2 flex items-center justify-between gap-4">
        <li className="flex items-center gap-2">
          <p className="text-sm font-medium text-gray-500 ">Categoty</p>
        </li>

        <li className="flex items-center gap-2">
          <p className="text-sm font-medium text-gray-500 ">
            {date.slice(0, 10)|| "Event Date"}
          </p>
        </li>
      </ul>
      <div className="pt-6">
        <Link
          to={`/event/${id}`}
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
        >
          {title|| "Event Title"} 
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
