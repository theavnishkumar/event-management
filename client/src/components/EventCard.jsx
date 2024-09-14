const EventCard = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="h-56 w-full">
        <a href="#">
          <img
            className="mx-auto h-full "
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            alt=""
          />
        </a>
      </div>
        <ul className="mt-2 flex items-center justify-between gap-4">
          <li className="flex items-center gap-2">
            <p className="text-sm font-medium text-gray-500 ">Categoty</p>
          </li>

          <li className="flex items-center gap-2">
            <p className="text-sm font-medium text-gray-500 ">Date</p>
          </li>
        </ul>
      <div className="pt-6">
        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
        >
          React JS Live Event
        </a>

      </div>
    </div>
  );
};

export default EventCard;
