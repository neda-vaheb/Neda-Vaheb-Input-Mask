import { TbWorldSearch } from "react-icons/tb";

const Input = ({ handleChange, hint }) => {
  return (
    <div className="input">
      <TbWorldSearch className="icon" />

      <label htmlFor="input">{hint[0]}</label>
      <input type="text" id="input" onChange={handleChange} />
      {hint.length > 0 && ( <div className="searchBox">
 
 <ul>
      {hint.map((city,index)=>(
         <li key={index}>{city}</li>
      ))}
   </ul>
   </div>)}
     
    </div>
  );
};

export default Input;
