import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../Css/Profiles.css";
import Navbar from "./Navbar";

export default function Profile() {
  const dataList = useLoaderData();

  return (
    <>
      <Navbar />
      <div className="profile-section">
        {dataList.map((person) => {
          return (
            <Link
              to={`/profile/${person.id}`}
              key={person.id}
              className="profile-list"
            >
              <div className="profile-detail">
                <img
                  src={`http://localhost/Php-server${person.image}`}
                  alt="profile"
                  className="profile-detail-pic"
                />
                <div className="profile-section-details">
                  <h3>
                    {person.first_name} {person.last_name}
                  </h3>

                  <p>{person.bio}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}