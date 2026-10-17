import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Habilidades from "./components/Habilidades";
import Formacao from "./components/Formacao";
import Contato from "./components/Contato";
import InstituicoesCarousel from "./components/InstituicoesCarousel";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Formacao />
      <InstituicoesCarousel />
      <Projetos />
      <Habilidades />
      <Contato />
    </>
  );
}

export default App;
