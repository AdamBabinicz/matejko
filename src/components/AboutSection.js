import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import AboutImg from "../assets/images/6.jpg";

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .aboutSection__right {
    position: relative;
    .empty {
      width: 100%;
      height: 100%;
    }
    .about1,
    .about2 {
      border: 2px solid var(--gray-1);
    }
    .about1 {
      position: absolute;
      max-width: 450px;
      min-width: 350px;
      width: 65%;
      height: auto;
      right: 0;
      top: 0;
    }
    .about2 {
      position: absolute;
      max-width: 200px;
      height: auto;
      right: 50%;
      top: 50%;
    }
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            className="section-title"
            subheading="rodzina Matejków"
            heading="Dzieci"
          />
          <PText>
            Gdy Matejko został nagrodzony medalem, uradowana Teodora pisała
            w&nbsp;liście: „Jasiek jest medalowany, chłopiec ciaciany”. Jeszcze
            w&nbsp;tym samym roku (1864) Matejków spotkało kolejne szczęście –
            urodził się ich pierwszy syn Tadeusz. Później przyszła pora
            na&nbsp;dwie córki: Helenę urodzoną w&nbsp;roku 1867 i&nbsp;dwa lata
            młodszą od&nbsp;niej Beatę. Najmłodszy Jerzy, zwany Iziem, przyszedł
            na&nbsp;świat w&nbsp;1873 roku. Był to czas, kiedy Matejko
            z&nbsp;wielką czułością szkicował żonę.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Malarstwo" btnLink="/malarstwo" />
            <Button btnText="Czytaj więcej" btnLink="/zyciorys" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
