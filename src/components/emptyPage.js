import React from "react";
import airplane from "../assets/airplane3.png";

function EmptyPage() {
  return (
    <div
      className="h-100 d-flex justify-content-center"
      style={{ alignItems: "center" }}
    >
      <div className="d-flex justify-content-center">
        <div>
          <div className="d-flex justify-content-center">
            <div style={{ height: "100px", width: "100%" }}>
              <img
                src={airplane}
                alt="logo"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
          <div
            className="d-flex justify-content-center text-muted mt-1"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Let me just check if the airplane is ready for takeoff—please hold.
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyPage;
