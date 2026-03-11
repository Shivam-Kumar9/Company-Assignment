const components = [
  "Resistor",
  "Capacitor",
  "Diode",
  "Transistor"
];

export default function ComponentList({ selectedComponent, setSelectedComponent }) {

  return (
    <div className="componentList">

      <h3>Components</h3>

      {components.map((item) => (
        <div
          key={item}
          onClick={() => setSelectedComponent(item)}
          style={{
            padding: "8px",
            cursor: "pointer",
            background: selectedComponent === item ? "#ddd" : "transparent"
          }}
        >
          {item}
        </div>
      ))}

    </div>
  );
}