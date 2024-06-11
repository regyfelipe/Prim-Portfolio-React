import React from "react";

import iconArrow from "../assets/icons/Arrow.svg";

import "./style.css";

export class Container extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="texto">
          <h2>Websites&</h2>
          
          <h2>Branding</h2>
          </div>
          <button>
            SCROLL DOWN <img src={iconArrow} alt="button arrow" />
          </button>
        </div>

        <div className="container-inf">
          <div className="inf-cont">
            <h3>Let's Task</h3>
            <p>hello@felip.ink</p>
          </div>
          <div className="text">
            <p>
              Hello, I'm Fep, an online product desing focusing on brand
              identity, advertising, and no-code instruments.
            </p>
          </div>
        </div>
      </main>
    );
  }
}
