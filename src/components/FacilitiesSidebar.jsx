import React from "react";
import { Link, useLocation } from "react-router-dom";

const FacilitiesSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const items = [
    { path: "/laboratory", label: "CLINICAL LABORATORY" },
    { path: "/fac", label: "CLINICAL FACILITIES" },
    { path: "/hostel", label: "GIRLS HOSTEL" },
    { path: "/food", label: "ISTHARA SMART FOOD COURT" },
    { path: "/smart-classroom", label: "SMART CLASSROOM" },
    { path: "/transport", label: "TRANSPORTATION" },
  ];

  return (
    <aside className="service-sidebar">
      <aside className="widget post-list">
        <h2> FACILITIES</h2>
        <div className="all-post-list pbmit-bg-color-global">
          <ul>
            {items.map((item) => (
              <li
                key={item.path}
                className={currentPath === item.path ? "post-active" : ""}
              >
                <Link to={item.path}>{item.label} </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </aside>
  );
};

export default FacilitiesSidebar;
