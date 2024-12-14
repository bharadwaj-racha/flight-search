import React from "react";
import userImg from '../assets/user.png';
import plane from '../assets/plane-flight.png';
import airindia from '../assets/airindia.png';
import vistara from '../assets/vistara.png';
import indigo from '../assets/indigo.png';

function TicketCard(props) {
  const { filteredData, passengerCount } = props;

  // Airline code to name and logo mapping
  const airlineMapping = {
    "UK": { name: "Vistara", logo: vistara },
    "AI": { name: "Air India", logo: airindia },
    "6E": { name: "IndiGo Airlines", logo: indigo }
  };

  return (
    <>
      {filteredData.map((data, i) => {
        const fromShort = data.from || "Unknown";
        const toShort = data.to || "Unknown";
        const departTime = data.depart || "Not Available";
        const arrivalTime = data.arrivaltime || "Not Available";
        const durationDate = data.durationdate || "Not Available";
        
        // Get the airline code or set to "Not Available"
        const airlineCode = data.airline || "Not Available";
        
        // Get the airline name and logo based on the code, defaulting to 'Not Available' if not found
        const airlineInfo = airlineMapping[airlineCode] || { name: airlineCode, logo: plane };

        const airline_tic = airlineInfo.name;
        const airlineLogo = airlineInfo.logo;
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
                    <div>DepartTime: {durationDate}</div>
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
                      src={airlineLogo}
                      alt="Airline Logo"
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
