import React, { createContext, useState, useEffect } from 'react';
import { getDoctor } from '../login/service/auth.Service';

// Créez un contexte et exportez-le
export const UserContext = createContext();

// Créez un composant parent pour fournir des informations au contexte
const UserProvider = ({ children }) => {
  // Utilisez useState pour stocker les informations utilisateur dans le state
  const [user, setUser] = useState({});
  useEffect(() => {
    async function getUserInfo() {
      try {
        const usr = await getDoctor();
        setUser(usr); // ici, user contiendra les informations de l'utilisateur
      } catch (error) {
        console.log(error);
      }
    }
    getUserInfo();
  }, []);

  return (
    // Fournissez les informations utilisateur au contexte
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
