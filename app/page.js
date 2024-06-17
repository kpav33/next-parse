"use client";

// https://medium.com/@berkan.ankal/build-and-host-backend-and-frontend-with-next-js-parse-server-back4app-and-cloudflare-1f8b1823ebcd
import { useState, useEffect } from "react";
import AddPerson from "@/components/AddPerson";
import PersonList from "@/components/PersonList";
import { getPersons } from "@/services/parseService";

export default function Home() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getPersons();
      setPersons(results);
    };
    fetchData();
  }, []);

  return (
    <main className="max-w-5xl mx-auto mt-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Persons
            </h1>
          </div>
          <AddPerson setPersons={setPersons} />
        </div>

        <PersonList persons={persons} setPersons={setPersons} />
      </div>
    </main>
  );
}
