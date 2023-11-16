import React, { useState } from "react";

export const AddNotes = ({ data, setData }) => {
  const [newItem, setNewItem] = useState({
    id: +new Date(),
    title: "",
    body: "",
    createdAt: new Date().toISOString(),
    archived: false,
  });

  const maxChar = 50;

  //   Add data
  const handleAddItem = () => {
    setData((prevData) => [...prevData, newItem]);
    setNewItem({
      id: +new Date(),
      title: "",
      body: "",
      createdAt: new Date().toISOString(),
      archived: false,
    });
  };

  //   handle input title dan body
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "title" && value.length <= 50) {
      setNewItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    } else if (name === "body") {
      setNewItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    }
  };

  return (
    <div className="flex justify-center items-center w-full ">
      <div className="flex justify-center flex-col w-1/3 gap-3">
        <h1 className="mb-10 font-bold text-2xl mt-10 text-center">Create Your Note</h1>
        <div className="flex justify-end flex-col items-end ">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Sisa karakter : {maxChar - newItem.title.length}
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter a newTitle..."
            name="title"
            value={newItem.title}
            onChange={handleInputChange}
          />
        </div>

        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your notes here..."
          name="body"
          value={newItem.body}
          onChange={handleInputChange}
        />

        <button
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleAddItem}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
