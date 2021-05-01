import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;
    margin-bottom: 1rem;
    /* .para {
      margin-left: 0;
    } */
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      div {
        margin-top: 0;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Jan Matejko</h1>
          <PText>
            Jan miał 26 lat, gdy odniósł ogromny sukces dzięki "Kazaniu Skargi".
            Dochód ze wstępu na wystawę oddał na sieroty.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Nawigacja"
            links={[
              {
                title: "Start",
                link: "/",
                type: "Link",
              },
              {
                type: "Link",
                title: "Życiorys",
                link: "/zyciorys",
              },
              {
                type: "Link",
                title: "Malarstwo",
                link: "/malarstwo",
              },
              {
                type: "Link",
                title: "Kontakt",
                link: "/kontakt",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Kontakt"
            links={[
              {
                title: "puaro@vp.pl",
                link: "mailto:puaro@vp.pl",
              },
              {
                title: "Radom, Polska",
                link: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Media"
            links={[
              {
                title: "Facebook",
                link: "https://www.facebook.com/muzeum.narodowe.poznan",
              },
              {
                title: "Twitter",
                link: "https://twitter.com/JanMatejkoArt",
              },
              {
                title: "Pinterest",
                link: "https://pl.pinterest.com/cristofesuit/jan-matejko",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div>
          <PText>Radom 2021 - {new Date().getFullYear()}.</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
