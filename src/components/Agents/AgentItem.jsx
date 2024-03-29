import styles from "../../styles/Agent.module.css";

const AgentItem = ({ agent }) => {
  return (
    <div className={styles.agentCard}>
      <div className={styles.agentHeading}>
        <h3>{agent.displayName}</h3>
        <p>{agent.description}</p>
      </div>
      <img
        src={agent.displayIcon}
        alt="agentImg"
        className={styles.agentImage}
      />
      <div className={styles.agentInfo}>
        <p className={styles.agentRole}>{agent.role.displayName}</p>
        <div className={styles.agentAbility}>
          {agent.abilities.map((ability, idx) => (
            <p key={idx}> {ability.displayName} </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentItem;
