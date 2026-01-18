import { useState } from "react";
import Select from "./Select";

const Framework = () => {
  const frameworks = ["React", "Vue", "Angular"];
  const [selectedFramework, setSelectedFramework] = useState("");

  return (
    <div>
        
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

export default Framework;
