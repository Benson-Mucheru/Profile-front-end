import { useRouteError, Link } from "react-router-dom";
import "../Css/Error.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="error">
      <h1>{error.status}</h1>
      <p>An unexpected error occured</p>
      <i>{error.data}</i>
      <Link to={"/"} className="back-btn">
        Go Back
      </Link>
    </div>
  );
}
