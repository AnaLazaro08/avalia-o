import React from 'react';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <center><h1 className='textoo'>Ana Gabryelli</h1>
          <img src='https://lumiere-a.akamaihd.net/v1/images/gallery_princess_rapunzel_2_a7f3c7a8_9fabd1e5.jpeg?region=3%2C0%2C2175%2C1223' alt='rapunzel' width={600} height={350}></img>
          <h3 className='textoo'>Eu me chamo Ana Gabryelli Jesus Lazaro tenho 17 anos e faço aniversario no dia 26/03. Sou lash designer,
             designer de sobrancelhas, e futura esteticista! Sou uma menina carismatica e perfeccionista. Tenho pais 
             presentes e eu amo muito eles, tenho irmãos e um namorado que eu também amo muito! </h3></center>
        </section>
      </main>
    </div>
  );
}


export default App;
