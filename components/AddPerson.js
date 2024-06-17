"use client";

import { useState } from "react";
import Modal from "./Modal";

const AddPerson = ({ setPersons }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button
        type="button"
        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => setOpenModal(true)}
      >
        Add Person
      </button>

      {openModal && (
        <Modal setOpenModal={setOpenModal} setPersons={setPersons} />
      )}
    </div>
  );
};

export default AddPerson;
