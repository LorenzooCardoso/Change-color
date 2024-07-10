import React, {useState} from 'react'

function Mudar() {

  const [escuro, setEscuro] = useState(false)

  const tema = {
   backgroundColor: escuro ? "black" : "white",
   color: escuro ?  "white" : "black"
  }

  function mudarTema(){
    setEscuro(!escuro)
  }

  return (
    <div style={tema}>
      <h1>Tema claro/ escuro</h1>
      <button onClick ={mudarTema}>Tema</button>
    </div>
  );
}

export default Mudar;
