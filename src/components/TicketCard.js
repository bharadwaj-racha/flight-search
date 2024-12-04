import React from "react";
import userImg from '../assets/user.png';
import plane from '../assets/plane-flight.png';

function TicketCard(props) {
  const { filteredData, passengerCount } = props;

  return (
    <>
      {filteredData.map((data, i) => {
        const fromShort = data.from || "Unknown";
        const toShort = data.to || "Unknown";
        const departTime = data.depart || "Not Available";
        const arrivalTime = data.arrival || "Not Available";
        const airline_tic = data.airline || "Not Available";
        const duration_tic = data.duration || "Not Available";

        return (
          <div className="card mb-3 col-md-4" id="ticket_card" key={i}>
            <div className="card-body">
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "60%",
                    fontSize: "16px",
                    display: "flex",
                    lineHeight: "1.5rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        marginBottom: "6px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        <b>₹{data.price * passengerCount}</b>
                      </span>
                      <span style={{ fontSize: "16px" }}>
                        <b>{passengerCount} 
                        <img
                            src={userImg}
                            alt="Flight"
                            className="mx-2"
                            style={{
                              height: "20px",
                              width: "20px",
                              objectFit: "cover",
                              borderRadius: "5px",
                            }}
                          />
                        </b>
                      </span>
                    </div>
                    <div className="mt-3">
                      <b >
                        {fromShort} {" >> "} {toShort}
                      </b>
                    </div>
                    <div>Depart: {departTime}</div>
                    <div>Arrive: {arrivalTime}</div>
                    <div>Airline: {airline_tic}</div>
                    <div>Duration: {duration_tic}</div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "50%",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ height: "100px", width: "140px" }}>
                    <img
                      src={plane}
                      alt="Flight"
                      style={{
                        height: "auto",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div>
                    <button type="button" className="btn btn-sm btn-info" style={{backgroundColor:'#9868ef'}}>
                      <b className="p-4">Book</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TicketCard;
