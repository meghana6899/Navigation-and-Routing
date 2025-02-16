import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage () {
  const [selection, setSelection] = useState(null)

  const handleSelect = (option) => {
    setSelection(option)
  }

  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'Green'},
    {label: 'Blue', value: 'Blue'},
  ]
  return (
  <div className="flex">
    <Dropdown options={options} value={selection} onChange={handleSelect}/>
    
  </div>
  );
}

export default DropdownPage; 