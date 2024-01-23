import React from "react";
import PixelatedButton from "./core/presentation/components/pixelated/pixelated_button/pixelated_button";

const App = () => {
  return (
    <div>
      <PixelatedButton>Crear Personaje</PixelatedButton>

      <PixelatedButton secondary>Crear Personaje</PixelatedButton>
    </div>
  );
};

export default App;
