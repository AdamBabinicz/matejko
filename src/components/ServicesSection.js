import React from "react";
import { FaMonument } from "react-icons/fa";
import { GiGothicCross, GiGraveyard } from "react-icons/gi";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle
          subheading="różna działalność artysty"
          heading="Zasługi"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<GiGothicCross />}
            title="--"
            desc="pracował w komisji konserwatorskiej podczas odnawiania gotyckiego ołtarza Wita Stwosza w kościele Mariackim (1867–1869)"
          />
          <ServicesSectionItem
            icon={<GiGraveyard />}
            title="--"
            desc="brał udział w pracach naukowo-badawczych oraz wykonywał rysunki inwentaryzacyjne podczas otwarcia w katedrze wawelskiej grobów: Kazimierza Wielkiego (1869), królowej Jadwigi (1887) i kardynała Oleśnickiego (1887)"
          />
          <ServicesSectionItem
            icon={<FaMonument />}
            title="--"
            desc="uczestniczył w pracach komisji nad stworzeniem ustawy o konserwacji zabytków"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
