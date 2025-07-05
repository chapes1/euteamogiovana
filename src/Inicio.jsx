import { useState } from "react";
import gifIloveYou from './assets/i-love-you-gif-1.gif';
import iloveyougif from './assets/turtle-love.gif';
import peluk from './assets/peluk.gif';
import "./App.css";
import { Link } from "react-router";

export default function Inicio() {
  return (
    <>
      <div className="">
        <div className="card">
          <div className="message">
            Lindas paisagens nos inspiram. O mar traz esperança. Mas você, minha linda e doce flor, me traz todo sentimento bom, mesmo que eu não queira. Você é meu sol, minha luz, o que eu mais desejei em uma pessoa.
          </div>
          <div className="gif">
            <img src={gifIloveYou} width="300" alt="I love you" />
            <img src={iloveyougif} width="300" alt="I love you" />
            <img src={peluk} width="200" alt="" />
          </div>
          <div className="buttons">
            <Link to="/euteamo" > 
              <button>
                ================ <br/>
                <div className="heart13">❤</div> * 
                <div className="heart24">❤</div> * 
                <div className="heart13">❤</div> * 
                <div className="heart24">❤</div><br/>
                ================
              </button> 
            </Link>
          </div>
        </div>
    </div>
    </>
  );
}

