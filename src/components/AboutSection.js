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
            subheading="rodzina Matejk??w"
            heading="Dzieci"
          />
          <PText>
            Gdy Matejko zosta?? nagrodzony medalem, uradowana Teodora pisa??a
            w&nbsp;li??cie: ???Jasiek jest medalowany, ch??opiec ciaciany???. Jeszcze
            w&nbsp;tym samym roku (1864) Matejk??w spotka??o kolejne szcz????cie ???
            urodzi?? si?? ich pierwszy syn Tadeusz. P????niej przysz??a pora
            na&nbsp;dwie c??rki: Helen?? urodzon?? w&nbsp;roku 1867 i&nbsp;dwa lata
            m??odsz?? od&nbsp;niej Beat??. Najm??odszy Jerzy, zwany Iziem, przyszed??
            na&nbsp;??wiat w&nbsp;1873 roku. By?? to czas, kiedy Matejko
            z&nbsp;wielk?? czu??o??ci?? szkicowa?? ??on??.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Malarstwo" btnLink="/malarstwo" />
            <Button btnText="Czytaj wi??cej" btnLink="/zyciorys" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
