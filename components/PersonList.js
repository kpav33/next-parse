"use client";

import Person from "./Person";
import { deletePerson } from "@/services/parseService";

const PersonList = ({ persons, setPersons }) => {
  const handleDeletePerson = async (personId) => {
    await deletePerson(personId);
    setPersons((prev) => prev.filter((person) => person.id !== personId));
  };

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr className="text-sm font-semibold text-left text-gray-900">
                <th className="pl-4 pr-3 sm:pl-0">Name</th>
                <th className="px-3 py-3.5">Email</th>
                <th className="px-3 py-3.5">Address</th>
                <th className="px-3 py-3.5">Phone</th>
                <th className="px-3 sm:pr-0">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {persons?.map((person) => (
                <Person
                  person={person}
                  handleDeletePerson={handleDeletePerson}
                  key={person.id}
                  setPersons={setPersons}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PersonList;
