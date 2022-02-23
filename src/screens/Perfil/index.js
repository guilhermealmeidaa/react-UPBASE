import React from "react";
import SearchBar from "../../components/search";
import AlertBox from "../../components/alertBox";
import ProfileBox from "../../components/profileBox";
import MenuScroll from "../../components/menuScroll";
import style from "./styles";

export default function App() {
  return (
    <style.container>
      
      <style.header>
        <SearchBar />
      </style.header>

      <AlertBox />

      <ProfileBox />

      <style.Line />


      <style.complete>
        <style.completeButton
          underlayColor="tranparent"
          onPress={() => { }}
        >
          <style.completeText>Completar perfil</style.completeText>
        </style.completeButton>
        <style.icon name="arrow-right" />

      </style.complete>


     <style.capatacitation>

      <style.capatacitationTitle>Capacitações profissionais</style.capatacitationTitle>
      <style.capacitationButton
          underlayColor="tranparent"
          onPress={() => { }}
        >
          <style.capacitationMore>Ver mais</style.capacitationMore>
        </style.capacitationButton>

     </style.capatacitation>

      <MenuScroll />

    </style.container>
  );
}