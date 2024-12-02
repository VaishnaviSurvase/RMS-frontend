import React, { useState } from "react";
import QRCode from "react-qr-code";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const OrderControl = () => {
  // QR Code Value
  const qrValue = "https://www.linkedin.com/in/tavneetsinghkhurana/";

  // State for accepting orders
  const [acceptingOrders, setAcceptingOrders] = useState(true);

  const acceptOrder = () => {
    setAcceptingOrders(!acceptingOrders);
  };

  // Data for the Doughnut chart
  const doughnutData = {
    labels: ["Confirmed", "Cancelled", "Delivered"],
    datasets: [
      {
        label: "Order Status",
        data: [50, 20, 30], // Replace with your actual data
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ], // Blue, Red, Green
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Doughnut options
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="row">
      {/* // Accept Orders Section */}
      <div className="col l3 m3">
        <div className="padding-16 margin">
          <div className="card white margin padding round shadow ">
            <h4>Accept Orders</h4>
            <div className="switch">
              <label>
                <input
                  type="checkbox"
                  name="accept-order"
                  id="accept-order"
                  onChange={acceptOrder}
                  checked={acceptingOrders}
                />
                <span class="slider"></span>
              </label>
            </div>
            <p id="order_text" className="text-grey">
              <b>
                {acceptingOrders ? "Accepting orders" : "Not accepting orders"}
              </b>
            </p>
            <p id="order_response"></p>
            <hr />
            <h6>Online Link</h6>
            <a
              href="/"
              className="text-blue hover-green"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i> HMS
            </a>
            <hr />
            <h6>Custom Link</h6>
            <a
              href="/"
              className="text-blue hover-green"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i> HMS
            </a>
          </div>
        </div>
      </div>

      {/* //qr code section */}
      <div className="col l3 m3">
        <div className="padding-16 margin">
          <div className="card white center padding margin round shadow">
            <h4>QR Code</h4>

            <div
              style={{
                height: "250px",
                margin: "0 auto",
                width: "100%",
              }}
            >
              <QRCode
                size={256}
                style={{
                  height: "200px",
                  maxWidth: "100%",
                  width: "100%",
                  display: "block",
                }}
                value={qrValue}
                viewBox={`0 0 256 256`}
                s
              />
            </div>
          </div>
        </div>
      </div>

      {/* sales section */}
      <div className="col l6 m6">
        <div className="padding-16 margin">
          <div className="card white center padding margin round shadow">
            <h4>Sales</h4>
            <div className="center" style={{ minHeight: "250px" }}>
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderControl;
