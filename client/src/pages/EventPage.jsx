/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";

const EventPage = () => {
  const { id } = useParams();
  return (
    <>
      <div className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-white mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800  mb-2">
                Event Name
              </h2>
              <p className="font-bold text-gray-700 text-sm mb-4">
                Created by:{" "}
                <span className="text-gray-600 font-medium">John Doe</span>
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700">Date:</span>
                  <span className="text-gray-600">2024-09-26</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Time:</span>
                  <span className="text-gray-600">02:45</span>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700">venue:</span>
                  <span className="text-gray-600">Taj Hotel</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">capacity:</span>
                  <span className="text-gray-600">150</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 ">
                  Event Description:
                </span>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
                <div className="flex my-4">
                  <div className="w-1/2 px-2">
                    <button className="w-full bg-red-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
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
