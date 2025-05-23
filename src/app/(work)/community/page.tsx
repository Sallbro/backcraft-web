import React from "react";

function page() {
  const communityProfile = [
    {
      name: "Salman Asu",
      description: "Nodejs Backend Developer",
      link: "https://github.com/Sallbro"
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      <h1 className="font-instrument-serif text-4xl tracking-wider">Community</h1>
      <p className="text-xl">Explore the great work of others in the space here.</p>
      <div className="flex flex-wrap gap-4">
        {communityProfile.map((item) => (
          <>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href={item.link}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
              <a href={item.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </>
        ))}

      </div>
    </div>
  );
}

export default page;
