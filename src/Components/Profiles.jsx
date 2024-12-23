import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../Css/Profiles.css";

export default function Profile() {
  const dataList = useLoaderData();

  return (
    <>
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
                  src={`http://localhost/profiles${person.image}`}
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
