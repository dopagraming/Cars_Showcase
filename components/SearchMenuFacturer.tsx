"use client";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { SearchManuFacturerProps } from "../Types/index";
import { manufacturers } from "../constants/index";
const SearchMenuFacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManuFacturerProps) => {
  const [query, setQuery] = useState("");
  const filteredManuFacture =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) => {
          return item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });
  return (
    <div className="search-manufacturer">
      <Combobox
        value={manufacturer}
        onChange={(value: string) => setManufacturer(value)}
      >
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <img
              src="./images/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volk"
            aria-label="Assignee"
            value={manufacturer}
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(event) => {
              setQuery(event.target.value);
              setManufacturer(event.target.value);
            }}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManuFacture.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__options "
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManuFacture.map((item) => (
                  <ComboboxOption
                    value={item}
                    key={item}
                    className={({ active }) => `
                    relative search-manufacturer__option
                    ${active ? "bg-primary-blue text-white" : "text-gray-900"}
                  `}
                  >
                    {item}
                  </ComboboxOption>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchMenuFacturer;
