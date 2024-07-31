import { useEffect, useState } from "react";
import styles from "./EmployeesRecord.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const EmployeeRecord = ({ filterData }) => {
  const navigate = useNavigate()
  const [sortData, setSortData] = useState(filterData);
  const [dataNotFound, setDataNotFound] = useState(false);

  useEffect(() => {
    setSortData(filterData);
    setDataNotFound(filterData.length === 0);
  }, [filterData]);

  const handleMore = () => {
    console.log("handleMore...");
  };

  const handleRowClick = (user) => {
    navigate(`/employee/${user.id}`); // navigate is use to go employee detail page with its ID
  };



  return (
    <div className={styles.recordContainer}>
      {dataNotFound && (
        <p style={{ textAlign: "center", width: "100%" }}>Data not found...</p>
      )}
      {!dataNotFound && (
        <table>
          <thead>
            <tr>
              <th scope="col">
                ID{" "}
                <FontAwesomeIcon
                  icon={faRightLeft}
                  rotation={90}
                  size="sm"
                  style={{ color: "#c01a20" }}
                />
              </th>
              <th scope="col">Image</th>
              <th scope="col">
                Full Name{" "}
                <FontAwesomeIcon
                  icon={faRightLeft}
                  rotation={90}
                  size="sm"
                  style={{ color: "#c01a20" }}
                />
              </th>
              <th scope="col">Demography</th>
              <th scope="col">Designation</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            {sortData.map((user) => (
              <tr key={user.id}
             onClick={() => handleRowClick(user)}
             style={{cursor:"pointer"}}
              >
                <td>{user.id}</td>
                <td>
                  <img
                    src={user.image}
                    alt="Employee"
                    className={styles.employeeImage}
                  />
                </td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{`${user.gender === "male" ? "M" : "F"} ${user.age}`}</td>
                <td>{user.company.title}</td>
                <td>{`${user.address.state} ,${
                  user.address.country === "United States" ? "USA" : `${user.address.country}`
                }`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className={styles.buttons}>
        {/* next and previous buttons */}
        <button className={styles.btn} aria-label="Previous">
          <FontAwesomeIcon
            icon={faChevronRight}
            flip="horizontal"
            size="sm"
            style={{ color: "#b0b0b0" }}
          />
        </button>
        <button className={styles.btn} onClick={handleMore} aria-label="Next">
          <FontAwesomeIcon
            icon={faChevronRight}
            size="sm"
            style={{ color: "#c01a20" }}
          />
        </button>
      </div>
    </div>
  );
};

export default EmployeeRecord;
