"use client";

import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";

const Person = ({ person, handleDeletePerson, setPersons }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <tr>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
          {person.get("name")}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {person.get("email")}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {person.get("address")}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {person.get("phone")}
        </td>
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
          <button
            type="button"
            className="py-2"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <FiEdit className="w-5 h-5 text-blue-600" />
          </button>

          <button
            type="button"
            className="py-2 ml-4 text-red-600"
            onClick={() => {
              if (confirm("Are you sure you want to delete this person?")) {
                handleDeletePerson(person.id);
              }
            }}
          >
            <FiTrash2 className="w-5 h-5" />
          </button>
        </td>
      </tr>

      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          person={person}
          setPersons={setPersons}
        />
      )}
    </>
  );
};

export default Person;
