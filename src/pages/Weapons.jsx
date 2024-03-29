import { useContext, useEffect } from "react";
import AppLevelContext from "../context/AppLevelContext";
import WeaponList from "../components/Weapons/WeaponList";

const Weapons = () => {
  const { fetchWeapons } = useContext(AppLevelContext);

  useEffect(() => {
    fetchWeapons();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <WeaponList />
    </>
  );
};

export default Weapons;
