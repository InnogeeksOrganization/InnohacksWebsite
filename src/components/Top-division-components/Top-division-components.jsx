import React from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";

import { TOP_SECTION } from "../../Module/General";

function Btn(props) {
  return (
    <div
      className="apply-button"
      data-hackathon-slug="InnoHacks"
      data-button-theme="light"
      style={{ height: "44px", width: "312px" }}
    ></div>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}



function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <br />
      <p className="shortjoin"> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <br />
      <br />
      <a
        href="https://discord.gg/gjxmTjmxwR"
        // rel="noreferrer"
        class="linkclass"
        target="_blank"
      >
        <button class="dev-button">
          <img
            src="https://www.svgrepo.com/show/353655/discord-icon.svg"
            style={{ width: "3rem", marginRight: "1rem" }}
          />
          Discord
        </button>
      </a>
      <br />
      <br />
      <br />
      <a
        href="https://unstop.com/hackathons/innohacks-20-hack-n-innovate-kiet-group-of-institutions-kiet-ghaziabad-643345"
        target="_blank"
      >
        <button>Learn More</button>
      </a>
    </div>
  );
}

export { Btn, Myinfo };
