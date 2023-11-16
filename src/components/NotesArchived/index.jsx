import React from "react";
import { showFormattedDate } from "../../utils";

export const NotesArchived = ({ archivedData, deleteNote, handleArchived }) => {
  return (
    <div className="w-3/4 mx-auto mt-10">
      <h1 className="font-bold text-2xl text-center">Archived Notes</h1>
      {archivedData.length === 0 ? (
        <div className="text-center py-10 text-gray-500">Tidak ada catatan</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-3  w-full mt-5">
          {archivedData.map((item) => (
            <div key={item.id} className=" flex flex-col justify-between  border-2 shadow-2xl bg-yellow-300 w-full  sm:w-1/2  lg:w-1/4  mb-2">
              <div className="flex-grow px-4 py-2">
                <h2 className="font-semibold text-lg mb-1"> {item.title}</h2>
                <p className="text-sm mb-2 text-gray-500">{showFormattedDate(item.createdAt)}</p>
                <p className="text-sm">{item.body}</p>
              </div>
              <div className="mt-auto flex  border-y border-x-0 ">
                <div
                  onClick={() => deleteNote(item.id)}
                  className="w-1/2 py-1 border  text-center cursor-pointer font-semibold  bg-red-500 text-black hover:bg-red-800"
                >
                  Delete
                </div>
                <div
                  onClick={() => handleArchived(item.id)}
                  className="w-1/2 py-1 border  text-center cursor-pointer font-semibold bg-green-500 text-black hover:bg-green-800"
                >
                  Archive
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
