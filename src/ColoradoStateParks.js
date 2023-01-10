import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";
import {elevation as Elevation} from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  RMFunctions.wildlife();
  console.log(RMFunctions.trees)
  Elevation();

  return (
    <>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
      
    </>
  );
}

export default ColoradoStateParks;