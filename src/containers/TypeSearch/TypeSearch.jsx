import {useState} from "react";
import TypeSearchBar from "../../components/TypeSearchBar/TypeSearchBar";

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
    <div className="type-search-container">
      <TypeSearchBar
        type1={type1}
        type2={type2}
        handleType1Change={handleType1Change}
        handleType2Change={handleType2Change}
        handleSubmit={handleSubmit}
        allTypes={allTypes}
      />
    </div>
  );
};

export default TypeSearch;
