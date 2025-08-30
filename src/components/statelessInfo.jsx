export default function StatelessInfo({ title, subtitle, items = [] }) {
  return (
    <section>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      {items.length > 0 ? (
        <ul>
          {items.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      ) : (
        <em>Немає елементів</em>
      )}
    </section>
  );
}
