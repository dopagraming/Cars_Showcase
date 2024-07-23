"use client";
import React, { useState } from "react";
import SearchMenuFacturer from "./SearchMenuFacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/images/magnifying-glass.svg"
      alt="magnifying glass"
      width={20}
      height={20}
      className="object-contain"
    />
  </button>
);

const SerachBar = () => {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (model === "" && manufacturer === "") {
      return alert("Please fill in the search bar");
    }
    updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase());
  };
  const updateSearchParams = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model", model);
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer", manufacturer);
    }
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };
  return (
    <form className="searchbar" onSubmit={(e) => handleSubmit(e)}>
      <div className="searchbar__item">
        <SearchMenuFacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses={`sm:hidden`} />
      </div>
      <div className="searchbar__item">
        <Image
          src="/images/model-icon.png"
          alt="model icon"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan "
          className="searchbar__input"
        />
        <SearchButton otherClasses={`sm:hidden`} />
      </div>
      <SearchButton otherClasses={`max-sm:hidden`} />
    </form>
  );
};

export default SerachBar;
