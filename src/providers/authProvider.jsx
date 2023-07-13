import { createContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AuthProvider;
