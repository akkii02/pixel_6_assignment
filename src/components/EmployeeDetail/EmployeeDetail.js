import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./EmployeeDetail.module.css";

const EmployeeDetail = () => {
  const [userData, setUserData] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // we can extract this ID from URL 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`); //i can Use dynamic URL for extracting Data
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUserData(data); // Set userData directly
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // Dependency array includes id

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  if (!userData) {
    return <p>No data available</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Employee Detail Page</h1>
        <p>Details for employee ID: {id}</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={userData.image} alt="Employee" />
      </div>
      <div className={styles.details}>
        <p><span>Name:</span> {`${userData.firstName} ${userData.lastName}`}</p>
        <p><span>Age:</span> {userData.age}</p>
        <p><span>Gender:</span> {userData.gender}</p>
        <p><span>Designation:</span> {userData.company.title}</p>
        <p><span>Location:</span> {`${userData.address.state}, ${
          userData.address.country === "United States" ? "USA" : userData.address.country
        }`}</p>
      </div>
    </div>
  );
};

export default EmployeeDetail;
