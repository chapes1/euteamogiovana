import { useState } from "react";
import Animation from "./elements/Animations";
import Heart from "./elements/Heart";
import minhalinda from "./assets/minhalinda.jpg";
import minhalinda2 from "./assets/minhalinda2.jpg";
import minhalinda3 from "./assets/minhalinda3.jpg";
import minhalinda4 from "./assets/minhalinda4.jpg";
import minhalinda5 from "./assets/minhalinda5.jpg";
import "./App.css";


function App() {
  const [mostrarPrimeiro, setMostrarPrimeiro] = useState(true);
    const [fadeClass, setFadeClass] = useState('fade fade-in');
    const getRandomItem = (arr)=>{
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }
    const FotoAleatoria = () => {
      const images = [minhalinda, minhalinda2, minhalinda3, minhalinda4, minhalinda5]
    
      return getRandomItem(images);
    }
    const [randomImage, setRandomImage] = useState(FotoAleatoria());
    
    const handleClick = () => {
      setRandomImage(FotoAleatoria())
      Animations()
      if (isAnimatingEmojis || isAnimationgConfettis) return;
  
      setFadeClass('fade fade-out');
  
      setTimeout(() => {
        setMostrarPrimeiro((prev) => !prev); // troca a imagem
        setFadeClass('fade fade-in');        // volta com fade-in
      }, 500); // tempo do fade-out
    };
    const AnimationPositions = () => {
      return (
        <>
          <span id="emojis" style={{ width: 2, height: 2, background: "red" }} />
  
          <span
            id="confettis"
            style={{
              position: "fixed",
              top: 0,
              textAlign: "center",
            }}
          />
        </>
      );
    };
    const { emojis, isAnimatingEmojis } = Animation.Emojis("emojis");
  
    const { confetti: confetti, isAnimationgConfettis } =
      Animation.Confettis("confettis");
    function Animations() {
      emojis();
      confetti();
    }
  return (
    <>
      {AnimationPositions()}
      <div className="body">
        <div
          onClick={handleClick}
          className={fadeClass}
        >
          <Heart
            img={randomImage}
            zIndex={2}
          />
        </div>
      </div>
    </>
  );
}

export default App;
