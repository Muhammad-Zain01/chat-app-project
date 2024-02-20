"use client";
import { verifyUser } from "@/requests/requests";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const defaultValues = {
  user: {},
  setUser: () => {},
};

const UserContext = createContext(defaultValues);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const router = useRouter();
  const get = async () => {
    const response = await verifyUser();
    if (!response) {
      getCookie("token");
      router.push("/login");
    }
    setUser(response);
  };
  useEffect(() => {
    get();
  }, []);
  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
