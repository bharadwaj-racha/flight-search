import React, { useEffect, useState } from "react";
import Result from "./Result";
import "react-input-range/lib/css/index.css";
import flightJson from "../api-data.json"; 
function Search() {
  const [btnType, setbtnType] = useState("oneWay");
  const [passengerCount, setPassengerCount] = useState(1);
  const [priceRange, setPriceRange] = useState(10000);
  const [bookReturn, setBookReturn] = useState(false);
  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [returnFilterData, setReturnFilterData] = useState([]);

  // Sample book type for buttons
  const bookType = [
    { name: "One way", id: "oneWay" },
    { name: "Return", id: "return" },
  ];

  // Parse and simplify flight data
  const flightData = flightJson.data.flights.flatMap((flight) =>
    flight.results.j.map((result) => ({
      from: result.leg[0]?.ttl?.[0] || "Unknown", // Origin City
      to: result.leg[0]?.ttl?.[1] || "Unknown",   // Destination City
      depart: result.leg[0]?.dd || "Unknown",     // Departure Date
      price: result.fare?.gross_fare?.value || 0, // Price
      airline: result.al || "N/A",                     // Airline (al)
      duration: result.tt || "N/A", 
    }))
  );
  
  console.log("Parsed Flight Data:", flightData);
  

  const handleBookType = (id) => {
    setbtnType(id);
    if (id === "oneWay") {
      setIsSearchClicked(false);
      setBookReturn(false);
      setReturnDate("");
    } else if (id === "return") {
      setIsSearchClicked(false);
      setBookReturn(true);
    }
  };

  const handleCount = (key) => {
    if (key === "add" && passengerCount < 5) {
      setPassengerCount(passengerCount + 1);
    } else if (key === "less" && passengerCount > 1) {
      setPassengerCount(passengerCount - 1);
    }
  };

  const handleFocus = (e) => {
    e.currentTarget.type = "date";
  };

  const handleBlur = (e) => {
    e.currentTarget.type = "text";
  };

  const handleFilter = () => {
    const result = flightData.filter(
      (data) =>
        data.from.toLowerCase().includes(originCity.trim().toLowerCase()) &&
        data.to.toLowerCase().includes(destinationCity.trim().toLowerCase()) &&
        data.depart === departureDate &&
        data.price <= priceRange
    );
    setFilteredData(result);
    console.log("Filtered Data (One Way):", result); // Debug filtered data
  };

  const returnFilter = () => {
    const result = flightData.filter(
      (data) =>
        data.from.toLowerCase().includes(destinationCity.trim().toLowerCase()) &&
        data.to.toLowerCase().includes(originCity.trim().toLowerCase()) &&
        data.depart === returnDate &&
        data.price <= priceRange
    );
    setReturnFilterData(result);
    console.log("Filtered Data (Return):", result); // Debug return filtered data
  };

  const handleSearch = () => {
    if (!originCity) {
      alert("Origin city can't be empty!");
    } else if (!destinationCity) {
      alert("Destination city can't be empty!");
    } else if (!departureDate) {
      alert("Departure date can't be empty!");
    } else if (bookReturn && !returnDate) {
      alert("Return date can't be empty!");
    } else {
      setIsSearchClicked(true);
      handleFilter();
      if (bookReturn) {
        returnFilter();
      }
    }
  };

  useEffect(() => {
    if (isSearchClicked) {
      handleFilter();
      if (bookReturn) {
        returnFilter();
      }
    }
  }, [priceRange]);

  return (
    <div>
      <div className="row mt-4 ml-5 mr-5">
        <div
          className="position-sticky"
          style={{
            top: "0", 
            zIndex: 100, 
            backgroundColor: "#fff", 
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", 
          }}
        >
          <div className="card mb-3" style={{ border: "1px solid black" }}>
            <div className="card-body">
              <div className="card" style={{ backgroundColor: "#a2a4ae" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-evenly">
                    <div className="btn-group d-flex me-md-4 me-2 justify-content-center">
                      {bookType.map((type) => (
                        <button
                          type="button"
                          className={`btn ${
                            btnType === type.id ? "active_btn" : ""
                          }`}
                          key={type.id}
                          onClick={() => handleBookType(type.id)}
                        >
                          {type.name}
                        </button>
                      ))}
                    </div>
                    <div
                      className="d-flex justify-content-center mx-md-3"
                      style={{ alignItems: "center" }}
                    >
                      <button
                        type="button"
                        className="btn btn-secondary mr-2"
                        onClick={() => handleCount("less")}
                      >
                        -
                      </button>
                      <div className="text-muted mx-1">
                        {passengerCount} passengers
                      </div>
                      <button
                        type="button"
                        className="btn btn-secondary ml-2"
                        onClick={() => handleCount("add")}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn search_btn"
                        onClick={handleSearch}
                      >
                        <b>Search</b>
                      </button>
                    </div>
                  </div>
                  <div className="d-flex mt-3">
                    <input
                      type="text"
                      placeholder="Enter origin city"
                      className="form-control me-2"
                      onChange={(e) => setOriginCity(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Enter destination city"
                      className="form-control me-2"
                      onChange={(e) => setDestinationCity(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Enter departure date"
                      className="form-control"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      onChange={(e) => setDepartureDate(e.target.value)}
                    />
                    {btnType === "return" && (
                      <input
                        type="text"
                        placeholder="Enter return date"
                        className="form-control ms-2"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={(e) => setReturnDate(e.target.value)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-3">
          <Result
            filteredData={filteredData}
            bookReturn={bookReturn}
            isSearchClicked={isSearchClicked}
            returnFilterData={returnFilterData}
            passengerCount={passengerCount}
          />
        </div>
      </div>
    </div>

  );
}

export default Search;
