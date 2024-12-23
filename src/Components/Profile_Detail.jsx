import { useLoaderData, useParams } from "react-router-dom";
import "../Css/Profile_Detail.css";

/* Fetch data using loader */
export async function getProfiles() {
  const res = await fetch("http://localhost/profiles/api.php");
  const data = await res.json();
  return data;
}

/* Individual profile */
export function Profile_Detail() {
  const { id } = useParams();
  const profiles = useLoaderData();
  return (
    <section className="profile">
      <div className="profile-container">
        {profiles.map((person) => {
          if (person.id === id) {
            return (
              <div key={person.id} className="profile-card">
                <div className="profile-cover-overlay"></div>
                {/* Cover picture */}
                <div className="profile-cover">
                  <img
                    src={`http://localhost/profiles${person.image}`}
                    alt="cover picture"
                    className="profile-cover-pic"
                  />
                </div>

                {/* Profile container */}
                <div className="profile-details">
                  {/* Profile picture */}
                  <img
                    src={`http://localhost/profiles${person.image}`}
                    alt="profile"
                    className="profile-pic"
                  />
                  {/* Profile details */}
                  <div className="profile-text">
                    <p className="profile-name">
                      {person.first_name} {person.last_name}
                    </p>
                    <p className="profile-bio">{person.bio}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
