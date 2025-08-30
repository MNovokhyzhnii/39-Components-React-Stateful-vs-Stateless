import StatefulCounter from "./components/StatefulCounter";
import StatelessInfo from "./components/StatelessInfo";
// import ClassCounter from "./components/ClassCounter"; // опціонально

function App() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>HW: Stateful vs Stateless</h1>

      <StatelessInfo
        title="StatelessInfo"
        subtitle="Рендерить дані з пропсів"
        items={["React", "Vite", "JSX"]}
      />

      <StatefulCounter initial={0} step={1} />
    </main>
  );
}

export default App;
