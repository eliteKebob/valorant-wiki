import React from "react";
import axios from "axios";
import { useState } from "react";

const AppLevelContext = React.createContext();
const API = "https://valorant-api.com/v1";

export const AppLevelProvider = ({ children }) => {
  const [agents, setAgents] = useState([]);
  const [maps, setMaps] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [skins, setSkins] = useState([]);

  const fetchAgents = async () => {
    const response = await axios.get(
      `${API}/agents?isPlayableCharacter=true&language=tr-TR`
    );
    setAgents(response.data.data);
  };

  const fetchMaps = async () => {
    const response = await axios.get(`${API}/maps?language=tr-TR`);
    setMaps(response.data.data);
  };

  const fetchWeapons = async () => {
    const response = await axios.get(`${API}/weapons?language=tr-TR`);
    setWeapons(response.data.data);
  };

  const fetchSkins = async () => {
    const response = await axios.get(
      `${API}/weapons/skinchromas?language=tr-TR`
    );
    setSkins(response.data.data);
  };

  return (
    <AppLevelContext.Provider
      value={{
        agents,
        maps,
        weapons,
        skins,
        setAgents,
        setMaps,
        setWeapons,
        setSkins,
        fetchAgents,
        fetchMaps,
        fetchWeapons,
        fetchSkins,
      }}
    >
      {children}
    </AppLevelContext.Provider>
  );
};

export default AppLevelContext;
