import { useContext, useEffect } from "react";
import AppLevelContext from "../context/AppLevelContext";
import SkinList from "../components/Skins/SkinList";

const Skins = () => {
  const { fetchSkins } = useContext(AppLevelContext);

  useEffect(() => {
    fetchSkins();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <SkinList />
    </>
  );
};

export default Skins;
