import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { getInitialData } from "../utils";
import { AddNotes } from "../components/AddNotes";
import { NotesActive } from "../components/NotesActive";
import { NotesArchived } from "../components/NotesArchived";

export const Notes = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setData(getInitialData());
  }, []);

  //filter arsip and active notes
  const filteredData = data.filter((item) => !item.archived && item.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const archivedData = data.filter((item) => item.archived && item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  //handle button archived
  const handleArchived = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          archived: !item.archived,
        };
      }
      return item;
    });

    setData(updatedData);
  };

  // Delete notes
  const deleteNote = (id) => {
    let remove = data.filter((item) => item.id !== id);
    setData(remove);
  };

  // Handle Search
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Navbar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      <AddNotes data={data} setData={setData} />
      <NotesActive filteredData={filteredData} deleteNote={deleteNote} handleArchived={handleArchived} />
      <NotesArchived archivedData={archivedData} deleteNote={deleteNote} handleArchived={handleArchived} />
    </>
  );
};
