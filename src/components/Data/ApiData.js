import { useEffect, useState } from "react";

const ApiData = ({setUsers}) => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users"); // featching api data
        if (!response.ok) {
          console.error(response.status);
        }
        const data = await response.json();
        setUsers(data.users);
      } catch (err) {
        console.error("error fetching data", err);
      }
    };
    fetchData();
  }, [setUsers]);
//   console.log("ApiData", users);
  return null;
};

export default ApiData;
