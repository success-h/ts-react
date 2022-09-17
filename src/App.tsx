import { ReactNode, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Heading, Container } from "./components/Component";

interface textwithnum {
  children: (num: number) => ReactNode;
  header?: (num: number) => ReactNode;
}

export function TextWithNumber({ children, header }: textwithnum) {
  const [state, setState] = useState<number>(1);

  return (
    <div>
      <h2>{header?.(state)}</h2>
      <div className="">{children(state)}</div>
      <div>
        <button onClick={() => setState(state + 1)}>add</button>
      </div>
    </div>
  );
}

// list function

function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Heading children="Hello Children" title="Hello world"></Heading>
      <Container>Hello</Container>
      <TextWithNumber header={(num: number) => <span>Header: {num}</span>}>
        {(num: number) => <div>Todays's number is num {num}</div>}
      </TextWithNumber>
      <List
        items={["Jack", "Sidie", "Oso"]}
        render={(item: string) => <div>{item.toLowerCase()}</div>}
      />
    </div>
  );
}

export default App;
