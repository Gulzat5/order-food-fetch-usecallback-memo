import { useState } from "react";

const useSort = (data) => {
  const [sortData, setSortData] = useState([]);
  function sort(option) {
    if (option === "ASC") {
      const sortData = data.sort((a, b) => {
        return a.price - b.price;
      });
      setSortData(sortData);
    } else if (option === "DESC") {
      const sortedData = data.sort((a, b) => {
        return b.price - a.price;
      });
      setSortData(sortedData);
    } else {
      return 0;
    }
    return {
      sortData,
      data,
    };
  }
};
