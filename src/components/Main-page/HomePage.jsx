import React from "react";
import { Myinfo } from "../Top-division-components/Top-division-components.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./about.css";
import { Logo, LogoSectionAbout } from "../logo-section/logoSection.jsx";
import { FirstPrize, PrizeHeading } from "../prize tracks/prizes.jsx";
import { Prizeinfo } from "../../Module/General";
import { Accordion } from "../FAQ/faq.jsx";
// import {theme} from "../themes_test/theme.jsx";
// import {Sponsor, SponsorsHead, SponsorUS} from "../Sponsors/sponsors.jsx";
import { Sponsor, SponsorsHead } from "../Sponsors/sponsors.jsx";
// import Birds from "../Birds/birds.jsx";
import Footer from "../Footer/footer.jsx";
import { Member } from "../team/team.jsx";
// import koii from "../../Module/Assets/sponsorsLogos/koii.png";
import pattern from "./pattern4.png";
// import Media from "../media/media.jsx";
import ThemeType from "../Themes/theme.jsx";
import TimeLine from "../Timeline/Timeline.jsx";
import wolfram from "./sponsorsLogos/wolfram.jpg";
import interviewbuddy from "./sponsorsLogos/ib.png";
import axure from "./sponsorsLogos/axure logo.png";
import bilasmiq from "./sponsorsLogos/bilasmiq logo.png";
import hdfc from "./sponsorsLogos/hdfc logo.jpg";
import mysphere from "./sponsorsLogos/logo_mysphere logo.png";
import xyz from "./sponsorsLogos/xyz logo.png";
import fire from "./sponsorsLogos/Logo blue.png"
import ppa from "./sponsorsLogos/ppa.png";
import certificate from "./sponsorsLogos/certificate.png"
// import filecoin from "../../Module/Assets/sponsorsLogos/filecoin.png";
// import sphere from "https://www.medianews4u.com/wp-content/uploads/2022/04/5ire.jpg";
// import alan from "../../Module/Assets/sponsorsLogos/alan.png";

import {
  TOP_SECTION,
  TeamInfo,
  // JudgesInfo,
  // sponsorLogos,
  frequentlyAskedQuestions,
  // designlogo,
  titlesponsorLogos,
  // bronzeponsorLogos,
  silversponsorLogos,
  goldsponsorLogos,
  educationsponsorLogos,
  certificatesponsorLogos,
  platniumsponsorLogos,
  // FoodLogos
} from "../../Module/General";

// javascript Map for sponsors

function SponsorGroup(props) {
  return (
    <Row justifyContent="center" alignItems="center">
      {props.map((s, key) => (
        <Col
          key={key}
          // justifyContent="center"
          // alignItems="center"
          // sm={12}
          // lg={4}
          // md={6}
        >
          {" "}
          <Sponsor link={s.link} srcx={s.src} />{" "}
        </Col>
      ))}
    </Row>
  );
}

// javascript Map for sponsors end

// Prize group

function PrizeGroup(props) {
  // "start": "react-scripts start",
  return (
    <Row>
      {props.map((s, key) => (
        <Col key={key} className="" sm={12} lg={4} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}

// Prize group ending
function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map((s, k) => (
        <Col key={k} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
}

function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map((s, k) => (
        <Col key={k} className="" sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
}

export default function HomePage(props) {

  window.onscroll = () => {
    toggleTopButton();
    console.log(document.body.scrollHeight);
    console.log(document.body.scrollTop);
    console.log("Diff", document.body.scrollHeight - document.body.scrollTop);
  }

  const scrollToTop = (event) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleTopButton() {
    if ((document.body.scrollHeight - document.body.scrollTop) < 800) {
      document.getElementById('back-to-up').style.display = 'none';
    }
    else if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
      document.getElementById('back-to-up').style.display = 'block';
    } else {
      document.getElementById('back-to-up').style.display = 'none';
    }
  }



  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="top"
      className="Whole_div"
      style={{
        backgroundImage: `
    // "start": "react-scripts start",
    // "start": "react-scripts start",url(${pattern})`,
      }}
    >
      <div className="color_sectiom">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={4}>
              <img alt="img" src={TOP_SECTION.IMG_SRC} />
              <br />
            </Col>
          </Row>

          {/*          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>*/}
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection" id="about">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {/*Theme Section*/}
        <Row className="prizesection non-coding" id="themes">
          <PrizeHeading type="Hackathon Themes" />
          <ThemeType />
        </Row>

        {/*TimeLine Section*/}
        <Row className="timeline" id="timeline">
          <PrizeHeading type="Hackathon TimeLine" />
          <TimeLine />
        </Row>

        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prizes" />
        </Row>
        <div class="row1-container">
          <div class="box red">
            <h2>Best Idea</h2>
            {/* <img
              class="imgright"
              src="https://img.icons8.com/emoji/96/000000/1st-place-medal-emoji.png"
              alt=""
            /> */}
            <h4>
              <b>Prize</b>: Seed funding of <br />₹ 10,00,000 <br />
              {/* Swags, Goodies & Promo Codes */}
              <br />
              <br />
              {/* <a href="https://duhacks.devfolio.co/#prizes">Load More</a> */}
            </h4>
          </div>
          <div class="box red">
            <h2>Overall First</h2>
            <img
              class="imgright"
              src="https://img.icons8.com/emoji/96/000000/1st-place-medal-emoji.png"
              alt=""
            />
            <h4>
              <b>Prize</b>: ₹ 50,000 <br />
              Swags, Goodies & Promo Codes
              <br />
              <br />
              {/* <a href="https://duhacks.devfolio.co/#prizes">Load More</a> */}
            </h4>
          </div>

          <div class="box box-down cyan">
            <h2>Overall Second</h2>
            <img
              className="imgright"
              src="https://img.icons8.com/emoji/96/000000/2nd-place-medal-emoji.png"
              alt=""
            />
            <h4>
              <b>Prize</b>: ₹ 25,000 <br />
              Swags, Goodies & Promo Codes
              <br />
              <br />
            </h4>
          </div>

          <div class="box box-down blue">
            <h2>Overall Third</h2>
            <img
              class="imgright"
              src="https://img.icons8.com/emoji/96/000000/3rd-place-medal-emoji.png"
              alt=""
            />
            <h4>
              <b>Prize</b>: ₹ 15,000 <br />
              Swags, Goodies & Promo Codes
              <br />
              <br />
              {/* <a href="https://duhacks.devfolio.co/#prizes">Load More</a> */}
            </h4>
          </div>
        </div>
        {/*      <div class="row2-container">
        <div class="box orange">
          <h2>Karma</h2>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img class="imgright" src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        </div>
      </div>*/}
        <div class="row1-container margfromsponsor">
          <div class="box box-down color2">
            <h2>Best Women Team</h2>
            <img
              class="imgright"
              src="https://img.icons8.com/cute-clipart/64/000000/granny-lesbian.png"
              alt=""
            />
            <h4>
              <b>Prize</b>:<br /> ₹ 5,000 <br />
              Swags, Goodies & Promo Codes
              <br />
              <br />
              {/* <a href="https://duhacks.devfolio.co/#prizes">Load More</a> */}
            </h4>
          </div>

          <div class="box color1">
            <h2>Best Use of XR</h2>
            <img
              class="imgright"
              src="https://img.icons8.com/emoji/96/000000/sports-medal-emoji.png"
              alt=""
            />
            <h4>
              <b>Prize</b>:<br /> ₹ 5,000 <br />
              Swags, Goodies & Promo Codes
              <br />
              <br />
              {/* <a href="https://duhacks.devfolio.co/#prizes">Load More</a> */}
            </h4>
          </div>
          <div class="box color1">
            <h2>Best Use of AIoT</h2>
            <img
              class="imgright"
              src="https://img.icons8.com/emoji/96/000000/sports-medal-emoji.png"
              alt=""
            />
            <h4>
              <b>Prize</b>:<br /> ₹ 5,000 <br />
              Swags, Goodies & Promo Codes
              <br />
              <br />
              {/* <a href="https://duhacks.devfolio.co/#prizes">Load More</a> */}
            </h4>
          </div>
          <div class="box color1">
            <h2>Best Use of Blockchain</h2>
            <img
              class="imgright"
              src="https://img.icons8.com/emoji/96/000000/sports-medal-emoji.png"
              alt=""
            />
            <h4>
              <b>Prize</b>:<br /> ₹ 5,000 <br />
              Swags, Goodies & Promo Codes
              <br />
              <br />
              {/* <a href="https://duhacks.devfolio.co/#prizes">Load More</a> */}
            </h4>
          </div>
          <div class="box color1">
            <h2>Socially most impactful Idea</h2>
            <img
              class="imgright"
              src="https://img.icons8.com/emoji/96/000000/sports-medal-emoji.png"
              alt=""
            />
            <h4>
              <b>Prize</b>:<br /> ₹ 5,000 <br />
              Swags, Goodies & Promo Codes
              <br />
              <br />
              {/* <a href="https://duhacks.devfolio.co/#prizes">Load More</a> */}
            </h4>
          </div>

          <div class="box box-down orange">
            <h2>All Participants</h2>
            <img
              class="imgright"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-prizes-circus-flaticons-lineal-color-flat-icons.png"
              alt=""
            />
            <h4>
              <b>Participation Certificate</b>
              <br />
              Web Development Course, Promo Codes
              <br />
              <br />
              {/* <a href="https://duhacks.devfolio.co/#prizes">Load More</a> */}
            </h4>
          </div>
        </div>

        <center>
          <div class="containertrack">
            <div class="cardtrack">
              <div class="boxtrack">
                <div class="contenttrack">
                  {/*<h1>Polygon</h1>*/}
                  <img
                    className="imgtrack"
                    src="https://www.medianews4u.com/wp-content/uploads/2022/04/5ire.jpg"
                  />
                  <br />
                  <br />
                  <b>
                    <lu>
                      <li>
                        5ire is a Platinum Sponsor of Innohacks 2.0 and is
                        offering a product track for project building.
                      </li>
                      <li>
                        Top 10 projects in the 5ire track will get a cash prize
                        of 10,000 INR and a swag-kit.
                      </li>
                      <li>
                        Participants who build on 5ire during the hackathon will
                        receive a swag-kit.
                      </li>
                    </lu>
                  </b>
                  {/* <a href="https://www.notion.so/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c">
                    Read More
                  </a> */}
                </div>
              </div>
            </div>

            {/* <div class="cardtrack">
              <div class="boxtrack">
                <div class="contenttrack">
                  <img className="imgtrack" src={koii} />
                  <br />
                  <br />
                  <b>
                    <lu>
                      <li>$200 prize for best use of koii network.</li>
                      <li>$100 prize for second best use of koii network.</li>
                      <h5>Guidelines:</h5>
                      <lu>
                        <li>UI must be responsive.</li>
                        <li>
                          Prizes may vary based on the project complexity.
                        </li>
                      </lu>
                    </lu>
                  </b> */}
            {/*<a href="https://www.notion.so/Tezos-Devfolio-Hackathon-Season-Prize-e90b6811b0df43e5a7dadf534fc000ff">Read More</a>*/}
            {/* </div>
              </div>
            </div>

            <div class="cardtrack">
              <div class="boxtrack">
                <div class="contenttrack">
                  <img className="imgtrack" src={alan} />
                  <br />
                  <br />
                  <b>
                    <lu>
                      <li>Alan track prize winner ₹7,500</li>
                      <h5>Guidelines:</h5>
                      <lu>
                        <li>UI must be responsive.</li>
                        <li>
                          Project must use the Alan Ai slots method in the
                          project.
                        </li>
                        <li>Project should be live.</li>
                      </lu>
                    </lu>
                  </b> */}
            {/*<a href="https://www.notion.so/Tezos-Devfolio-Hackathon-Season-Prize-e90b6811b0df43e5a7dadf534fc000ff">Read More</a>*/}
            {/* </div>
              </div>
            </div> */}

            {/* <div class="cardtrack">
              <div class="boxtrack">
                <div class="contenttrack">
                  {/*<h1>Filecoin</h1>*/}
            {/* <img className="imgtrack" src={filecoin} />
                  <br />
                  <br />
                  <b>
                    <lu>
                      <li>₹20000 for best use of IPFS and/or Filecoin.</li>
                    </lu>
                  </b>
                  <a href="https://devfolio.notion.site/Filecoin-Devfolio-Hackathon-Season-Prize-998fc3fe477e474086ae1d5ed1685203">
                    Read More
                  </a>
                </div>
              </div>
            </div> */}

            {/*<div class="cardtrack">
              <div class="boxtrack">
                <div class="contenttrack">
                  <img className="imgtrack" src={celo} />
                  <br /><br />
                  <b><lu>
                    <li>₹20000 for best Dapp built on Celo.</li>
                  </lu></b>
                  <a href="https://www.notion.so/Celo-Devfolio-Hackathon-Season-Prize-8b98dac17f134abeae863d5d98c01ff0">Read More</a>
                </div>
              </div>
            </div>*/}
          </div>
        </center>
        {/*Theme end*/}

        {/* <Birds top="100vh" left="0vh" type="" /> */}

        {/* *******Prizes here ***** */}
        {/*        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prizes" /><br/>
          <div className="prize--cards">
          {Prizeinfo.map(PrizeGroup)}
          </div>
        </Row>*/}
        {/* ********Prizes ending here ***** */}

        {/* ********Sponsors here ***** */}

        <Row className="prizesection" id="sponsors">
          <SponsorsHead heading="Sponsors & Partners" />
        </Row>
        <PrizeHeading type="Title Sponsor" />
        <br />
        <br />
        <div class="row1-container">
          <img class="sponsorImg" src={hdfc} alt="" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <PrizeHeading type="Education Partner" />
        <br />
        <br />
        <div class="row1-container">
          <img class="sponsorImg" style={{ width: "35rem" }} src={ppa} alt="" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <PrizeHeading type="Certificate Partner" />
        <br />
        <br />
        <div class="row1-container">
          <img
            class="sponsorImg"
            style={{ width: "35rem" }}
            src={certificate}
            alt=""
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <PrizeHeading type="Platinum Sponsor" />
        <br />
        <br />
        <div class="row1-container">
          <img
            class="sponsorImg"
            style={{ width: "20rem", marginRight: "5rem" }}
            src={mysphere}
            alt=""
          />
          <img
            class="sponsorImg"
            style={{ width: "20rem" }}
            src={fire}
            alt=""
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <PrizeHeading type="Gold Sponsor" />
        <br />
        <br />
        <div class="row1-container">
          <img
            class="sponsorImg"
            style={{ width: "30rem" }}
            src="https://appwarstechnologies.com/wp-content/uploads/2020/12/Logo-01.png"
            alt=""
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <PrizeHeading type="Silver Sponsor" />
        <br />
        <br />
        <div class="row1-container">
          <img class="sponsorImg" style={{ width: "20rem" }} src={xyz} alt="" />
          <img
            class="sponsorImg"
            style={{ width: "20rem" }}
            src={axure}
            alt=""
          />
          <img
            class="sponsorImg"
            style={{ width: "20rem" }}
            src={interviewbuddy}
            alt=""
          />
          <img
            class="sponsorImg"
            style={{ width: "20rem" }}
            src={bilasmiq}
            alt=""
          />
          <img
            class="sponsorImg"
            style={{ width: "20rem" }}
            src={wolfram}
            alt=""
          />
        </div>

        {/* <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <h1 className="">Title Sponsors</h1>
          <br />
          {titlesponsorLogos.map(SponsorGroup)}
          <br />
          <br />
          <h1 className="">Education Partner</h1>
          <br />
          {educationsponsorLogos.map(SponsorGroup)}
          <br />
          <br />
          <h1 className="">Certificate Partner</h1>
          <br />
          {certificatesponsorLogos.map(SponsorGroup)}
          <br />
          <br />
          <h1 className="">Gold Sponsors</h1>
          <br />
          {goldsponsorLogos.map(SponsorGroup)}
          <br />
          <br />
          <h1 className="">Silver Sponsors</h1>
          <br />
          {silversponsorLogos.map(SponsorGroup)}
          <br />
          <br /> */}
        {/* <h1 className="">Bronze Sponsors</h1>
          <br />
          {bronzeponsorLogos.map(SponsorGroup)}
          <br />
          <br /> */}
        {/* <SponsorUS /> */}
        {/* <br />
          <br /> */}
        {/* <h1 className="">Design & Media Partners</h1>
          <br />
          {designlogo.map(SponsorGroup)}
          <br />
          <br />
          <h1 className="">Food Sponsors</h1>
          <br />
          {FoodLogos.map(SponsorGroup)} */}
        {/* </Row> */}
        {/* ********Sponsors ending here ***** */}

        {/* ********Team here ***** */}
        {/* <h1 id="team">Mentor</h1>


        {JudgesInfo.map(TeamMembers)} */}

        {/* <h1 id="teams">Our Team</h1> */}
        {/* {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={FOOTER.JOIN_TEAM}
            content="Interested in joining our team"
          />
        )} */}
        {/* {TeamInfo.map(TeamMembers)} */}
        {/* ********Team ending here ***** */}

        {/* ********Team ending here ***** */}
        <br />

        <Row className="prizesection" id="sponsors">
          <SponsorsHead heading="Mini Events" />
        </Row>
        <center>
          <div class="containertrack">
            <div class="cardtrack">
              <div class="boxtrack">
                <div class="contenttrack">
                  {/*<h1>Polygon</h1>*/}
                  <img
                    style={{ width: "80%", marginBottom: "20%" }}
                    src={mysphere}
                  />
                  <br />
                  <br />
                  <b>
                    Have the chance to win exciting prizes such as Amazon
                    vouchers worth 2k and Innohacks Swag Kits.
                  </b>
                  {/* <a href="https://www.notion.so/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c">
                    Read More
                  </a> */}
                </div>
              </div>
            </div>

            <div class="cardtrack">
              <div class="boxtrack">
                <div class="contenttrack">
                  {/*<h1>Polygon</h1>*/}
                  <img
                    // className="imgtrack"
                    style={{ width: "80%", marginBottom: "20%" }}
                    src={ppa}
                  />
                  <br />
                  <br />
                  <b>Stay Tuned For Updates.....</b>
                  {/* <a href="https://www.notion.so/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c">
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </center>

        <h1 id="faqs">FAQs</h1>
        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>
      </Container>
      <br />
      {/* <center>
        <div
          class="apply-button"
          data-hackathon-slug="duhacks"
          data-button-theme="light"
          // style="height: 44px; width: 312px"
        ></div>
      </center> */}

      <Footer />
      <div class="backtotop" id="back-to-up">
        <a onClick={scrollToTop}>
          <p>
            <i class="fa-solid fa-arrow-up"></i>
          </p>
        </a>
      </div>
    </div>
  );



}
