import { useContext, useEffect } from "react";
import AppLevelContext from "../context/AppLevelContext";
import AgentList from "../components/Agents/AgentList";

const Agents = () => {
  const { fetchAgents } = useContext(AppLevelContext);

  useEffect(() => {
    fetchAgents();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <AgentList />
    </>
  );
};

export default Agents;
