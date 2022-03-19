import { useContext, useEffect } from "react";
import AppLevelContext from "../context/AppLevelContext";
import MapList from "../components/Maps/MapList";

const Maps = () => {
  const { fetchMaps } = useContext(AppLevelContext);

  useEffect(() => {
    fetchMaps();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <MapList />
    </>
  );
};

export default Maps;
