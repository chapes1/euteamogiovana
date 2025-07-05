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
            <p>Você</p> é o som que ecoa no meu peito, 
            <p>Você</p> é o riso que torna tudo perfeito.
            <p>Você</p> é o céu quando o dia amanhece, 
            <p>Você</p> é o sonho que nunca esquece.
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

