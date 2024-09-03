import React from "react";

function Table() {
  return (
    <div>
      <section>
        <div className="flex justify-center items-center min-h-screen p-2">
          <div className="w-full max-w-7xl border border-gray-400 rounded-lg overflow-x-auto">
            {/* Header */}
            <div className="p-10 min-w-[1000px]">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-bold mb-5">Users</p>
                  <p className="text-gray-500">
                    A list of all the users in your account including their
                    name, title, emails and role.
                  </p>
                </div>
                <button className="bg-black text-white px-8 py-3 rounded-md">
                  Add user
                </button>
              </div>
            </div>
            {/* Table */}
            <table className="w-full text-left min-w-[1000px]">
              <thead>
                <tr>
                  <th className="px-8 py-3 border-b border-gray-400 w-[25%]">
                    Name
                  </th>
                  <th className="px-8 py-3 border-b border-gray-400 w-[25%]">
                    Title
                  </th>
                  <th className="px-8 py-3 border-b border-gray-400 w-[25%]">
                    Email
                  </th>
                  <th className="px-8 py-3 border-b border-gray-400 w-[20%]">
                    Role
                  </th>
                  <th className="px-8 py-3 border-b border-gray-400 w-[10%]"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-8 py-5 border-b border-gray-400 w-[25%]">
                    James Anderson
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[25%]">
                    Front-end Developer
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[25%]">
                    james.anderson@example.com
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[15%]">
                    Member
                  </td>
                  <td className="px-8 py-5 border-b border-gray-400 text-blue-600 w-[10%]">
                    <a href="#">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-8 py-5 border-b border-gray-400 w-[25%]">
                    Emily Roberts
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[25%]">
                    Designer
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[25%]">
                    emily.roberts@example.com
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[15%]">
                    Admin
                  </td>
                  <td className="px-8 py-5 border-b border-gray-400 text-blue-600 w-[10%]">
                    <a href="#">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-8 py-5 border-b border-gray-400 w-[25%]">
                    Michael Smith
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[25%]">
                    Director of Product
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[25%]">
                    michael.smith@example.com
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[15%]">
                    Member
                  </td>
                  <td className="px-8 py-5 border-b border-gray-400 text-blue-600 w-[10%]">
                    <a href="#">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-8 py-5 border-b border-gray-400 w-[25%]">
                    Sarah Johnson
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[25%]">
                    Copywriter
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[25%]">
                    sarah.johnson@example.com
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[15%]">
                    Admin
                  </td>
                  <td className="px-8 py-5 border-b border-gray-400 text-blue-600 w-[10%]">
                    <a href="#">Edit</a>
                  </td>
                </tr>

                <tr>
                  <td className="px-8 py-5 border-b border-gray-400 w-[25%]">
                    Christopher Brown
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[25%]">
                    Senior Designer
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[25%]">
                    christopher.brown@example.com
                  </td>
                  <td className="px-8 py-5 text-gray-500 border-b border-gray-400 w-[15%]">
                    Owner
                  </td>
                  <td className="px-8 py-5 border-b border-gray-400 text-blue-600 w-[10%]">
                    <a href="#">Edit</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-8 py-5 w-[25%]">Jessica Taylor</td>
                  <td className="px-8 py-5 text-gray-500  w-[25%]">
                    Principal Designer
                  </td>
                  <td className="px-8 py-5 text-gray-500 w-[25%]">
                    jessica.taylor@example.com
                  </td>
                  <td className="px-8 py-5 text-gray-500  w-[15%]">Member</td>
                  <td className="px-8 py-5 text-blue-600 w-[10%]">
                    <a href="#">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Pagination */}
            <div className="flex items-center p-5 justify-center min-w-[1000px]">
              <div className="flex border border-gray-400 rounded-md">
                <button className="text-black font-bold  px-4 py-2  ">
                  Previous
                </button>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-gray-400 text-white">
                    1
                  </button>
                  <button className="px-4 py-2">2</button>
                  <button className="px-4 py-2">3</button>
                  <button className="px-4 py-2">4</button>
                  <button className="px-4 py-2">5</button>
                </div>
                <button className=" text-black font-bold px-4 py-2">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Table;
