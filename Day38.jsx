import { useState, useEffect, memo } from "react";

const initialItems = [
  { id: 1, name: "Car" },
  { id: 2, name: "Bike" },
  { id: 3, name: "Scooty" },
  { id: 4, name: "Tempo" }
];

const Row = memo(({ item, index, onEdit }) => {
  useEffect(() => {
    console.log("Rendered:", item.name);
  });

  return (
    <div>
      <input
        value={item.name}
        onChange={e => onEdit(item.id, e.target.value)}
      />
      <span> #{index + 1}</span>
    </div>
  );
});

function List({ items, useStableKeys, onEdit }) {
  return (
    <div>
      {items.map((item, index) => (
        <Row
          key={useStableKeys ? item.id : index}
          item={item}
          index={index}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [stable, setStable] = useState(true);

  const editItem = (id, name) => {
    setItems(items =>
      items.map(item => (item.id === id ? { ...item, name } : item))
    );
  };

  const shuffle = () => {
    setItems(items => [...items].sort(() => Math.random() - 0.5));
  };

  const reorder = () => {
    setItems(items => [items[1], items[2], items[3], items[0]]);
  };

  const reset = () => setItems(initialItems);

  return (
    <div>
      <h2>React Key & Reconciliation Demo</h2>

      <button onClick={() => setStable(true)}>Stable Keys</button>
      <button onClick={() => setStable(false)}>Index Keys</button>
      <button onClick={shuffle}>Shuffle</button>
      <button onClick={reorder}>Reorder</button>
      <button onClick={reset}>Reset</button>

      <h3>{stable ? "Stable Keys" : "Index Keys"}</h3>

      <List
        items={items}
        useStableKeys={stable}
        onEdit={editItem}
      />

      <p>
        Open React DevTools Profiler and record Shuffle/Reorder/Edit actions.
        Check the console to compare Row renders.
      </p>
    </div>
  );
}
