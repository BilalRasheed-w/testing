import React from "react";
import { Link } from "react-router-dom";
import { Employee_details } from "../../dummyData";

const Employees = () => {
  return (
    <div className="container mx-auto ">
      <div className="overflow-x-auto overflow-y-auto  max-h-80 shadow-md sm:rounded-lg bg-blue text-white ">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-white/50 text-gray-600 ">
            <tr>
              <th scope="col" className="px-6 py-1">
                Sl. No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
            </tr>
          </thead>

          <tbody>
            {Employee_details.map((item, i) => (
              <Employee_row
                key={i}
                sl={i + 1}
                id={item.id}
                name={item.name}
                phone={item.phone}
                email={item.email}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;

const Employee_row = ({ sl, id, name, email, phone }) => {
  return (
    <tr className=" border-b bg-blue hover:bg-blue-500 ">
      <td className="px-6 py-3">{sl}</td>
      <Link to={`user/${id}`}>
        <th
          scope="row"
          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {name}
        </th>
      </Link>
      <td className="px-6 py-3">{email}</td>
      <td className="px-6 py-3">{phone}</td>
    </tr>
  );
};
