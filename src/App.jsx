import { useState } from "react";
import Select from "./Component/Select";

const App = () => {
  const frameworks = ["React", "Vue", "Angular"];

  const [selectedFramework, setSelectedFramework] = useState("");

  return (
    <div style={{ padding: "40px" }}>
      <h2>Choose a framework</h2>

      <Select
        options={frameworks}
        value={selectedFramework}
        onChange={setSelectedFramework}
      />

      <p>Selected value: {selectedFramework}</p>
    </div>
  );
};

export default App;