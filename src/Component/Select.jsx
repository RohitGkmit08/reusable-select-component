import { useState } from "react";
import "./Select.css";

const Select = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="select-container">
      <div className="select-handler" onClick={() => setOpen(!open)}>
        {value || "Select an option"}
      </div>

      {open && (<div className="select-dropdown">
          {options.map(option => (
            <div
              key={option}
              className="select-option"
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
