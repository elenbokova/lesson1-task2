import { useContext } from "react";
import { AuthContext } from "../providers/authProvider";

// eslint-disable-next-line react/display-name
export const withAuth = (Component) => (props) => {
  const { user } = useContext(AuthContext);

  if (!user) return <p>You are not authorized</p>;

  return <Component {...props} />;
};
