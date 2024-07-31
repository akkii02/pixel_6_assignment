import { faFilter } from "@fortawesome/free-solid-svg-icons";
import styles from "./EmployeesRecordFilter.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";

const EmployeeRecordFilter = ({ users, setFilterData }) => {
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    setFilterData(users);   // Initially we can pass all user list
  }, [users, setFilterData]);

  useEffect(() => {
    const handleFilterChange = () => {
      let filteredData = users;

      if (country) {
        filteredData = filteredData.filter(user => user.address.country === country); // filter Data accourding to country
      }

      if (gender) {
        filteredData = filteredData.filter(user => user.gender === gender.toLowerCase()); // filter data accourding to gender
      }

      setFilterData(filteredData); //Set filter data or pass filter data
    };

    handleFilterChange();
  }, [country, gender, users, setFilterData]);  //Dependency array includes country, gender, users, setFilterData

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
                                            /// this Both handleCountryChange or  handleGenderChange pass data for filter 

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className={styles.filterNavbar}>
      <h1>Employees</h1>

      <div className={styles.filterContainer}>
        <button className={styles.filter}>
          <FontAwesomeIcon icon={faFilter} className={styles.filterIcon} />
        </button>
        <select className={styles.select} value={country} onChange={handleCountryChange}>
          <option value="" >Country</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>
        <select className={styles.select} value={gender} onChange={handleGenderChange}>
          <option value="" >Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
};

export default EmployeeRecordFilter;
