import { createContext, ReactNode, useEffect, useState } from "react";
import database from "../services/database";

type User = {
  id: string | null;
  name: string | null;
  email: string | null;
  type: string | null;
};

type ContextType = {
  user: User | undefined;
  userToken: string;
  loginUser: (email: string, password: string) => Promise<void> | any;
  setUser: Function;
};

type AuthContextProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as ContextType);
export function AuthContextProvider(props: AuthContextProps) {
  const [user, setUser] = useState<User>();
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    const data = {
      id: localStorage.getItem("userId"),
      name: localStorage.getItem("userName"),
      email: localStorage.getItem("userEmail"),
      type: localStorage.getItem("userType"),
    };

    if (!authToken) {
      return;
    }
    if (data.id !== null && authToken !== null) {
      setUser({
        id: data.id,
        name: data.name,
        email: data.email,
        type: data.type,
      });
      setUserToken(authToken);
    }
  }, []);

  async function loginUser(email: string, password: string) {
    const value = await database
      .post("/users/login", {
        email: `${email}`,
        password: `${password}`,
      })
      .then(function (res) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("userId", res.data.user.id);
        localStorage.setItem("userName", res.data.user.name);
        localStorage.setItem("userEmail", res.data.user.email);
        localStorage.setItem("userType", res.data.user.type);
        setUser({
          id: res.data.user.id,
          name: res.data.user.name,
          email: res.data.user.email,
          type: res.data.user.type,
        });
        return;
      })
      .catch((err) => {
        return 404;
      });
    return value;
  }

  return (
    <AuthContext.Provider value={{ user, loginUser, userToken, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
