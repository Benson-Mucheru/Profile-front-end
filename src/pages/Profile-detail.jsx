import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

export async function getProfiles() {
  const res = await fetch("http://localhost/Php-server/api.php");
  const data = await res.json();
  return data;
}
export function ProfileDetail() {
  const { id } = useParams();
  const profiles = useLoaderData();

  return (
    <>
      <Navbar />
      <div>
        {profiles.map((person) => {
          if (person.id === id) {
            return (
              <div key={person.id}>
                <img
                  src={`http://localhost/Php-server${person.image}`}
                  alt="profile"
                  className="profile-detail-pic"
                />
                <div>{person.first_name}</div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
