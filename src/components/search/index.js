import React, {useState} from "react";
import styles from "./styles";

function SearchBar (){

  const [clicked, setClicked] = useState(false);
  const [h, setH] = useState('');

  return (
    <styles.container>
      <styles.icon
          name="search"
        />
        <styles.input
          placeholder="Buscar capacitações, profissionais..."
          value={h}
          onChangeText={setH}
          onFocus={() => {
            setClicked(true);
          }}
        />
    </styles.container>
  );
};
export default SearchBar;


