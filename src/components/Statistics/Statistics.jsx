export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <li key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
