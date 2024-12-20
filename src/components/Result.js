import React from "react";
import forwardArrow from "../assets/arrow.png";
import TicketCard from "./TicketCard";
import EmptyPage from "./emptyPage";

function Result(props) {
  const {
    filteredData,
    bookReturn,
    isSearchClicked,
    returnFilterData,
    passengerCount,
  } = props;

  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-body">
        {!isSearchClicked &&
        filteredData.length === 0 &&
        returnFilterData.length === 0 ? (
          <EmptyPage />
        ) : isSearchClicked &&
          filteredData.length === 0 &&
          returnFilterData.length === 0 ? (
          <div
            className="d-flex justify-content-center"
            style={{ color: "red" }}
          >
            <h3>Not Found</h3>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Available flights{" "}
                <span>
                  <img src={forwardArrow} alt="arrow" className="ml-2"style={{
                        height: "20px",
                        width: "20px"}} />
                </span>
              </div>
            </div>
            <div>
              {bookReturn && isSearchClicked ? (
                <div className="row">
                  <div className="col">
                    <TicketCard
                      filteredData={filteredData}
                      passengerCount={passengerCount}
                    />
                  </div>
                  {returnFilterData.length && returnFilterData ? (
                    <div className="col">
                      <div style={{ color: "#9868ef", fontWeight: "bold" }}>
                        Return flight
                        <p>{returnFilterData[0].depart}</p>
                      </div>
                      <TicketCard
                        filteredData={returnFilterData}
                        passengerCount={passengerCount}
                      />
                    </div>
                  ) : null}
                </div>
              ) : (
                <>
                  
                  <div className="d-flex row">
                  <TicketCard
                    filteredData={filteredData}
                    passengerCount={passengerCount}
                  />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Result;
