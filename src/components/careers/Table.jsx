import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import "./Career.css";
const Table = () => {
  const [table, setTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("table.json")
      .then((res) => res.json())
      .then((data) => {
        setTable(data);
      });
  }, []);

  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;

  return (
    <div className="w-full py-10">
      <div className="overflow-x-auto">
        <table className="w-full overflow-scroll">
          <thead>
            <tr className="text-[#B5B7C0] text-left border-y">
              <th className=" p-4">Role</th>
              <th className=" p-4">Stipend</th>
              <th className=" p-4">Location</th>
              <th className=" p-4 text-center">No. of Openings</th>
              <th className=" p-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {table.slice(startIndex, endIndex).map((row) => (
              <tr key={row.id} className="border-y font-semibold">
                <td className=" p-4">{row.col1}</td>
                <td className=" p-4">{row.col2}</td>
                <td className=" p-4">{row.col3}</td>
                <td className=" p-4 text-center">{row.col4}</td>
                <td className="p-4 text-center text-[#60A547] ">
                  <button className="bg-[#60A54761] px-4 py-1 rounded-md border-1 border-[#60A547]">
                    {row.col5}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <Pagination
          count={Math.ceil(table.length / 5)}
          shape="rounded"
          page={currentPage}
          onChange={(event, page) => setCurrentPage(page)}
          renderItem={(item) => (
            <PaginationItem
              component="button"
              onClick={(e) => item.onClick(e)}
              {...item}
              className={currentPage === item.page ? "bg-[#60A547]" : ""}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Table;
