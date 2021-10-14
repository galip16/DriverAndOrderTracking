import React, { useState, useEffect } from "react";
import api from "../api/fetchDataFromDB.js";
import IsDriverWorking from "../components/IsDriverWorking.jsx";

function SelectDrivers() {
  const [drivers, setDrivers] = useState([]);

  const callTheDriversApi = () => {
    const url = `http://localhost:2005/drivers`;

    api.fetchDataFromDB(url).then((result) => {
      setDrivers(result);
      console.log("useeffect selectdrivers.jsx");
    });
  };

  useEffect(() => {
    callTheDriversApi();
  }, []);

  return (
    <div className="allDrivers__container">
      <IsDriverWorking
        drivers={drivers}
        isWorking={true}
        setDrivers={setDrivers}
        callTheDriversApi={callTheDriversApi}
      />
      <IsDriverWorking
        drivers={drivers}
        isWorking={false}
        setDrivers={setDrivers}
        callTheDriversApi={callTheDriversApi}
      />
    </div>
  );
}

export default SelectDrivers;
