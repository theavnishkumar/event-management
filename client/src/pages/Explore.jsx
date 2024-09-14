import EventCard from "../components/EventCard.jsx";

const Explore = () => {
  return (
    <>
      <section className="bg-gray-50 py-8 antialiased  md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div>
              <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">
                Electronics
              </h2>
            </div>
          </div>
          <EventCard />
          <EventCard />
          <EventCard />
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

export default Explore;
