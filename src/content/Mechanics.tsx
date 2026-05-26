export const Mechanics = () => {
  return (
    <div style={{ color: "white" }}>
      <h1>Механика</h1>

      <img
        src="/images/mechanics.jpg"
        alt="mechanics"
        style={{
          width: "100%",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      />

      <p>
        Механика изучает движение тел и силы.
      </p>

      <h2>Законы Ньютона</h2>

      <ul>
        <li>Первый закон Ньютона</li>
        <li>Второй закон Ньютона</li>
        <li>Третий закон Ньютона</li>
      </ul>
    </div>
  );
};