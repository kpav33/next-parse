import { useState } from "react";
import { createPerson, updatePerson } from "@/services/parseService";

const Modal = ({ setOpenModal, person, setPersons }) => {
  const isEditForm = !!person;

  const [form, setForm] = useState({
    name: person?.get("name"),
    email: person?.get("email"),
    address: person?.get("address"),
    phone: person?.get("phone"),
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address || !form.phone) {
      return;
    }

    if (isEditForm) {
      const updatedPerson = await updatePerson(form, person.id);
      setPersons((prev) =>
        prev.map((person) =>
          person.id === updatedPerson.id ? updatedPerson : person
        )
      );
    } else {
      const newPerson = await createPerson(form);
      setPersons((prev) => [...prev, newPerson]);
    }
    setOpenModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-10"></div>
      <div className="modal-container relative bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <button
          onClick={() => setOpenModal(false)}
          className="modal-close absolute top-0 right-0 cursor-pointer mt-4 mr-4"
        >
          X
        </button>
        <div>
          <form className="rounded px-8 py-12" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                placeholder="Address"
                rows="3"
                value={form.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-end justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {isEditForm ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
