import {useState} from "react";

const TypeSearch = ({allTypes, onTypeSearch}) => {
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");

  const handleType1Change = (event) => {
    setType1(event.target.value);
  };

  const handleType2Change = (event) => {
    setType2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTypeSearch(type1, type2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type1} onChange={handleType1Change}>
        {allTypes.map((type, index) => (
          <option key={index} value={type.type}>
            {type.type}
          </option>
        ))}
      </select>
      <select value={type2} onChange={handleType2Change}>
        <option value="">Blank</option>
        {allTypes.map((type, index) => (
          <option key={index} value={type.type}>
            {type.type}
          </option>
        ))}
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default TypeSearch;
