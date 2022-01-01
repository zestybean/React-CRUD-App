import React from "react";

function HomeForm() {
  return (
    <div className="bg-indigo-500">
      <div className="flex h-screen">
        <div className="m-auto">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="title">
              <h1 className="text-4xl font-bold mb-4">Drink Form 🍺</h1>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                placeholder="Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Position:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                placeholder="Position"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Age:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                placeholder="99"
              />
            </div>
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Wage(Yearly):
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                placeholder="100K"
              />
            </div>

            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline">
              Pour Drink
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomeForm;
