import React from "react";
export const DashboardCard = ({ icon, title, count, link, color }) => {
  return (
    <div className="col m6 l3 margin-top">
      <div
        className={`container padding margin card hover-shadow leftbar border-${color}`}
      >
        <i className={`fas fa-${icon} xxlarge right`}></i>
        <h4 className="xlarge">{title}</h4>
        <span className="xxlarge">
          {title === "Earnings" ? `$${count}` : count}
        </span>
        <br />
        <a href={link}>View {title} &rarr;</a>
      </div>
    </div>
  );
};

export default DashboardCard;
