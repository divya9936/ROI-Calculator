import React,{ useState} from "react";
const NumberBox = ({def}) => {
  const[value,setValue]=useState(def);
  const handleChange=(event)=>{
    setValue(event.target.value);
    };


  return(
    <div>
      <label>
        <input type="number" value={value}  onChange={handleChange}/>
        </label>
    </div>
  );
};
export default NumberBox;

 