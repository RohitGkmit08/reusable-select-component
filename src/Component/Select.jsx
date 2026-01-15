import { useState } from "react";

const Select = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ width: "100px" }}>
   
      <div onClick={() => setOpen(!open)}
        style={{
          border: "1px solid #000000ff",
          cursor: "pointer",
          padding:"5px"
        }}
      >
        {value || "Select an option"}
      </div>

      {open && (
        <div style={{ border: "1px solid #000000ff" }}>
          {options.map(option => (
            <div
              key={option}
              onClick={() => {
                onChange(option); 
                setOpen(false);   
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;