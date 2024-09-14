import axios from "axios";
import { useState } from "react";
const VITE_API = `${import.meta.env.VITE_API}`;

const CreateEvent = () => {
  const today = new Date().toISOString().split("T")[0];

  // State to hold form data
  const [formData, setFormData] = useState({
    eventName: "",
    capacity: "",
    description: "",
    eventVenue: "",
    time: "",
    date: today,
    eventPhoto: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, eventPhoto: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventFormData = new FormData();
    eventFormData.append("eventName", formData.eventName);
    eventFormData.append("capacity", formData.capacity);
    eventFormData.append("description", formData.description);
    eventFormData.append("eventVenue", formData.eventVenue);
    eventFormData.append("time", formData.time);
    eventFormData.append("date", formData.date);

    
    try {
      const response = await axios.post(`${VITE_API}/api/create`, {
        ...formData,
        venue: formData.eventVenue,
      });

      console.log("Event created successfully:", response.data);
      setFormData({
        eventName: "",
        capacity: "",
        description: "",
        eventVenue: "",
        time: "",
        date: today,
        eventPhoto: null,
      });
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="mx-auto w-full max-w-[550px] bg-white my-10">
      <form onSubmit={handleSubmit}>
        <div className="-mx-3 flex flex-wrap">
          {/* Event Name */}
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="eventName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Event Name
              </label>
              <input
                type="text"
                name="eventName"
                id="eventName"
                placeholder="Event Name"
                value={formData.eventName}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          {/* Event Capacity */}
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="capacity"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Event Capacity
              </label>
              <input
                type="number"
                name="capacity"
                id="capacity"
                placeholder="Enter the event capacity"
                value={formData.capacity}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Event Description */}
        <div className="mb-5">
          <label
            htmlFor="description"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Event Description
          </label>
          <textarea
            rows="4"
            name="description"
            id="description"
            placeholder="Enter your description here"
            value={formData.description}
            onChange={handleChange}
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        {/* Event Venue */}
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="eventVenue"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Event Venue
              </label>
              <input
                type="text"
                name="eventVenue"
                id="eventVenue"
                placeholder="Event Venue"
                value={formData.eventVenue}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          {/* Event Time */}
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="time"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Event Time
              </label>
              <input
                type="text"
                name="time"
                id="time"
                placeholder="Event time (2 hr or 3 hr)"
                value={formData.time}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Event Image */}
        <div className="mb-5">
          <label className="mb-3 block text-base font-medium text-[#07074D]">
            Upload Event image
          </label>
          <div className="mb-5">
            <input
              type="file"
              name="eventPhoto"
              id="eventPhoto"
              onChange={handleFileChange}
              className="sr-only"
            />
            <label
              htmlFor="eventPhoto"
              className="relative flex min-h-[100px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] text-center"
            >
              <div>
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <span className="font-medium text-gray-600">
                    Drop image to Attach, or
                    <span className="text-blue-600 underline ml-[4px]">
                      browse
                    </span>
                  </span>
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Event Date */}
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3">
            <div className="mb-5">
              <label
                htmlFor="date"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Event Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                min={today}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
