// components/Search.tsx
"use client";
import { countries, schools } from "@/constant";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface DataItem {
  id: string;
  name: string;
  bg: string;
}

const Search = ({ close }: { close: () => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const [query, setQuery] = useState("");
  const [dataSource, setDataSource] = useState<DataItem[]>(schools); // default to school

  const filtered = dataSource.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  const handleDataSourceChange = (source: string) => {
    switch (source) {
      case "schools":
        setDataSource(schools);
        break;
      case "countries":
        setDataSource(countries);
        break;
      // You can add more data sources like 'cities', 'jobs', etc.
      default:
        setDataSource(schools);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="w-full">
      <div className="flex gap-1 items-center">
        <select
          onChange={(e) => handleDataSourceChange(e.target.value)}
          defaultValue="schools"
          className="border p-2 focus:outline-none rounded-lg"
        >
          <option value="schools">Schools</option>
          <option value="countries">Countries</option>
        </select>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className=" sm:h-96 h-72 w-full ">
        <ul className="mt-4 overflow-auto h-full scrollbar-thin flex flex-col gap-4">
          {filtered.length === 0 && query ? (
            <li className="text-gray-500">Not Found</li>
          ) : (
            filtered.map((item) => (
              <li key={item.name} className="">
                <Link
                  key={item.name}
                  onClick={close}
                  href={
                    dataSource === schools
                      ? `/schools/${item.id}`
                      : `/countries/${item.id}`
                  }
                  className="flex gap-4 w-full items-center overflow-hidden bg-blue-50 rounded-lg"
                >
                  <img
                    src={item.bg}
                    alt={item.name}
                    className="sm:h-40 sm:w-40 w-14 h-14 object-cover"
                  />
                  <div className="flex items-center w-full">
                    <h3 className="text-base font-bold sm:text-xl">
                      {item.name}
                    </h3>
                  </div>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Search;
