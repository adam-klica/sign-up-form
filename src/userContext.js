import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [passwrodConf, setPasswordConf] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  return (
    <UserContext.Provider
      value={{
        username1: [username, setUsername],
        fname1: [fname, setFname],
        lname1: [lname, setLname],
        email1: [email, setEmail],
        date1: [date, setDate],
        gender1: [gender, setGender],
        password1: [password, setPassword],
        passwrodConf1: [passwrodConf, setPasswordConf],
        phone1: [phone, setPhone],
        address1: [address, setAddress],
        city1: [city, setCity],
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
