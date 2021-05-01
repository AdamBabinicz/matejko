import React, { useState } from "react";
import styled from "styled-components";
import PText from "../components/PText";
import AboutImg from "../assets/images/12.jpg";
import AboutImg1 from "../assets/images/rodzenstwo.jpeg";
import AboutInfoItems from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;

    .button {
      font-size: 2.2rem;
      background: ${(props) =>
        props.outline ? "transparent" : "var(--gray-1)"};
      padding: 0.7em 2em;
      border-radius: 8px;
      display: inline-block;
      border: 2px solid var(--gray-1);
      color: ${(props) => (props.outline ? "var(--gray-1)" : "var(--gray-2)")};
      cursor: pointer;
    }
  }

  .right {
    flex: 2;
    .par {
      margin-top: 1rem;
      text-align: center;
      font-size: 1.5rem;
    }
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Zyciorys() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Jan <span>Matejko</span>
              </p>
              <h2 className="about__heading">Malarz historyczny i religijny</h2>
              <div className="about__info">
                <PText>
                  Jan Alojzy Matejko (ur. 24 czerwca [a] 1838 w Krakowie, zm. 1
                  listopada 1893 tamże) – polski malarz, twórca obrazów
                  historycznych i batalistycznych, historiozof. Był autorem
                  ponad trzystu obrazów olejnych oraz kilkuset rysunków i
                  szkiców [1]. Jeden z najwybitniejszych polskich malarzy w
                  historii [2]. W latach 1852–1858 studiował u Władysława
                  Łuszczkiewicza i Wojciecha Stattlera w Szkole Sztuk Pięknych w
                  Krakowie, której później był dyrektorem (od 1873). Jego
                  uczniami byli m.in. Maurycy Gottlieb, Jacek Malczewski, Józef
                  Mehoffer i Stanisław Wyspiański.
                  <br /> <br />
                  Ojciec malarza, Franciszek Ksawery Matejko, właśc. František
                  Xaver Matějka (Matieyka), był Czechem, urodzonym w Roudnicy
                  koło Hradca Králové jako syn chłopski. Przybył do Galicji w
                  charakterze guwernera i nauczyciela muzyki. Początkowo
                  pracował u rodziny Wodzickich w Kościelnikach (dziś część
                  Nowej Huty), a następnie przeniósł się do Krakowa, gdzie
                  poślubił Joannę Karolinę Rossberg (1802–1845), wywodzącą się z
                  polsko-niemieckiej rodziny zamożnych rymarzy. Franciszek był
                  katolikiem, Joanna – protestantką. Matejkowie zamieszkali przy
                  ulicy Floriańskiej w Krakowie.
                  <br />
                  <br />
                  Jan Matejko był dziewiątym dzieckiem, z jedenastu, jakie mieli
                  państwo Matejkowie (było wśród nich dziewięciu chłopców i dwie
                  dziewczynki). Gdy Matejko miał siedem lat, zmarła jego matka;
                  dziećmi zajęła się jej siostra. Śmierć matki niewątpliwie
                  wywarła wpływ na osobowość przyszłego malarza. Jego
                  dzieciństwo obfitowało w lęki i przykrości [3], nie zaznawał
                  także raczej przesadnie starannej opieki (jego złamany nos nie
                  zwrócił niczyjej uwagi i zrósł się krzywo) [4]. Ojciec nie
                  okazywał dzieciom swoich uczuć, był surowy i pozbawiony
                  akceptacji dla artystycznej pasji syna.
                  <br />
                  <br />
                  Od 1847 r. Jan Matejko uczęszczał do szkoły św. Barbary.
                  Wkrótce został przeniesiony do Gimnazjum św. Anny (obecnie I
                  Liceum Ogólnokształcące im. Bartłomieja Nowodworskiego w
                  Krakowie). Mimo zdradzanych od najmłodszych lat niepospolitych
                  zdolności plastycznych, z pozostałymi dziedzinami radził sobie
                  z ogromnym trudem. Także koledzy nie byli dla niego
                  wyrozumiali i, jak pisał Marian Gorzkowski, doświadczał od
                  swych współtowarzyszy pewnego znęcania się nawet [5]. Choć
                  Matejko i jego rodzeństwo z pochodzenia w połowie byli
                  Czechami, czuli się polskimi patriotami, o czym świadczy
                  działalność wyzwoleńcza dwóch starszych braci Jana, Edmunda i
                  Zygmunta, uczestników powstania węgierskiego (1848–1849).
                </PText>
                <br />
                <PText>
                  <i>pl.wikipedia.org/wiki/Jan_Matejko</i>
                </PText>
              </div>
              <button
                className="button"
                btnText="zobacz więcej"
                onClick={() => setModalIsOpen(true)}
              >
                więcej
              </button>

              <Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                  overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,.8)",
                  },
                  content: {
                    position: "absolute",
                    top: "80px",
                    left: "40px",
                    right: "40px",
                    bottom: "40px",
                    border: "1px solid #ccc",
                    background: "#fff",
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch",
                    borderRadius: "4px",
                    outline: "none",
                    padding: "20px",
                  },
                }}
              >
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    marginBottom: "2rem",
                    color: "var(--gray-1)",
                  }}
                >
                  Matejko o sobie
                </h2>
                <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
                  W domu naszym zawsze było tłoczno i gwarno – miałem bowiem aż
                  ośmiu braci i dwie siostry! Wychowywałem się więc w rodzinie
                  licznej, doświadczonej wieloma troskami, ale też pełnej
                  miłości i wzajemnego zrozumienia, co zawdzięczaliśmy w dużej
                  mierze naszej Matce. Ojciec był wprawdzie człowiekiem surowym,
                  nie okazującym nam ciepła, ale za to bardzo dbającym o nasze
                  materialne potrzeby – całymi dniami udzielał lekcji muzyki, by
                  zarobić na utrzymanie naszej gromadki. Nas też uczył gry na
                  fortepianie – ja sam nie lubiłem tych lekcji, choć dźwięki
                  były dla mnie ważne. Szczególnie podobało mi się jak z
                  Wawelskiego Wzgórza rozbrzmiewał Dzwon Zygmunta – słuchałem go
                  wtedy z wielką uwagą.
                </p>
                <br />
                <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
                  Jednakże, moje szczęśliwe dzieciństwo szybko się skończyło.
                  Gdy miałem siedem lat moja Matka odeszła na zawsze. Ojciec nie
                  mógł pogodzić się z jej śmiercią i pracował jeszcze więcej, a
                  nasze wychowanie powierzył siostrze naszej nieodżałowanej Mamy
                  – Katarzynie Rossberg-Zamojskiej. Ciotka była dla nas dobra i
                  bardzo o nas dbała, ale nie zawsze potrafiła nam okazać tyle
                  serca i ciepła co Mama, za którą bardzo mi było tęskno.
                </p>
                <br />
                <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
                  Odkąd nauczyłem się czytać, odkryłem jedną z największych
                  swoich pasji – historię. Moimi ulubionymi książkami były
                  opowieści historyczne – niemal na pamięć znałem całe ustępy ze
                  Śpiewów historycznych Juliana Ursyna Niemcewicza. Jako dziecko
                  potrafiłem też cytować różne fragmenty z Don Kichota
                  Cervantesa. Wiem, że dobór lektur może się wydawać dość
                  dziwny, ale byłem nietypowym dzieckiem – nad wiek poważnym,
                  lubiącym samotność i ciszę. Potrafiłem godzinami bawić się
                  sam, przebierając się i odgrywając różne scenki z dawnych
                  dziejów.
                </p>
                <br />
                <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
                  Od najmłodszych lat samodzielnie rysowałem i wycinałem z
                  tektury figurki wojów i rycerzy, by następnie prowadzić ich do
                  wielkich i zwycięskich bitew. Jak wspomniałem nie lubiłem
                  tłumów, ale za to chętnie uczestniczyłem w różnych
                  nabożeństwach religijnych, na które prowadzali nas rodzice.
                  Moja wrodzona niechęć do tłumnych, hałaśliwych spotkań oraz
                  oficjalnych uroczystości cechowała mnie również, gdy byłem już
                  dorosłym człowiekiem i właściwie pozostała mi do dziś.
                </p>
                <br />
                <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
                  Może dla wielu zaskakującym będzie fakt, że jako dziecko
                  chętnie bawiłem się w odprawianie Mszy Świętej. Byłem w tym
                  tak wiarygodny, że mój ojciec uważał, iż w przyszłości
                  powinienem zostać księdzem. Uważał mnie za chłopca życiowo
                  nieporadnego i duchowny stan wydawał mu się rozwiązaniem dla
                  mnie bezpiecznym.
                </p>
                <br />
                <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
                  Tylko mama, ta dobra i mądra istota, wiedziała, że ja miałem
                  inne rojenia w głowie – moim największym marzeniem było
                  malowanie. To właśnie ona zachęcała mnie do rysowania i
                  chwaliła wszystko, co utrwalałem na papierze – od sprzętów
                  domowych, po podobizny ludzi i zwierząt.
                </p>
                <br />
                <p
                  style={{
                    fontSize: "1.3rem",
                    color: "var(--gray-1)",
                    fontStyle: "italic",
                  }}
                >
                  https://niezlasztuka.net/o-sztuce/jan-matejko-o-sobie-samym
                </p>
                <div>
                  <button
                    style={{
                      width: "2rem",
                      height: "2rem",
                      position: "absolute",
                      top: ".5rem",
                      right: ".5rem",
                      background: "transparent",
                      border: "none",
                    }}
                    onClick={() => setModalIsOpen(false)}
                  >
                    <MdClose />
                  </button>
                </div>
              </Modal>
            </div>
            <div className="right">
              <div>
                <img src={AboutImg1} alt="rodzeństwo" />
              </div>
              <p className="par">
                Portret Franciszka Matejki z dziećmi (u dołu Kazimierz, wyżej
                Jan i Marianna), 1853/54, obraz ze zbiorów Muzeum Narodowego we
                Wrocławiu w depozycie Domu Matejki.
              </p>
              <br /> <br />
              <div>
                <img src={AboutImg} alt="Jan" />
              </div>
              <p className="par">
                Jan Matejko. Reprodukcja fotografii wykonanej w 1862 roku w
                zakładzie fotograficznym Sebald z Krakowa.
              </p>
              <p className="par">
                <i>https://niezlasztuka.net/artysta/jan-matejko</i>
              </p>
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Edukacja</h1>

              <AboutInfoItems
                title="1838"
                items={["Szkoła Sztuk Pięknych w Krakowie"]}
              />
              <AboutInfoItems
                title="1852 - 1858"
                items={[
                  "Szkoła Sztuk Pięknych w Krakowie (u Władysława Łuszczkiewicza i Wojciecha Stattlera)",
                ]}
              />
              <AboutInfoItems
                title="1858 - 1859"
                items={[
                  "stypendium w Akademii Sztuk Pięknych w Monachium (u Hermanna Anschütza)",
                ]}
              />
              <AboutInfoItems
                title="1867"
                items={[
                  "stypendysta na studiach muzealnych w Wiedniu (dawne malarstwo włoskie)",
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Odznaczenia</h1>

              <AboutInfoItems
                title="1865"
                items={["w Paryżu odebrał złoty medal za 'Kazanie Skargi'"]}
              />
              <AboutInfoItems
                title="1867"
                items={[
                  "złoty medal na Paryskim Salonie za obraz 'Rejtan – upadek Polski' (1866), który zakupił cesarz Franciszek Józef",
                ]}
              />
              <AboutInfoItems
                title="1870"
                items={[
                  "otrzymanie Legii Honorowej (najwyższego odznaczenia francuskiego)",
                ]}
              />
              <AboutInfoItems
                title="1873"
                items={["członkostwo Académie des Beaux-Arts w Paryżu"]}
              />
              <AboutInfoItems
                title="1878"
                items={[
                  "wręczono mu w Krakowie symboliczne berło – na znak 'panowania w sztuce'",
                ]}
              />
              <AboutInfoItems
                title="1882"
                items={["honorowe obywatelstwo Krakowa"]}
              />
              <AboutInfoItems
                title="1886"
                items={[
                  "tytuł doktora honoris causa Uniwersytetu Jagiellońskiego za obraz 'Dziewica Orleańska' (1886)",
                ]}
              />
              <AboutInfoItems
                title="1888"
                items={[
                  "został członkiem wiedeńskiego Stowarzyszenia Artystycznego (Wiener Kunstverein)",
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Działalność</h1>

              <AboutInfoItems
                title="Pedagogika"
                items={[
                  "kierownik wydziału artystycznego na Kursach Wyższych dla Kobiet im. Adriana Baranieckiego; wykształcił wielu malarzy; najważniejszymi uczniami byli Mehoffer, Wyspiański, Tetmajer i Malczewski, wybitni przedstawiciele polskiego modernizmu",
                ]}
              />
              <AboutInfoItems
                title="Konserwacja"
                items={["Sukiennice wraz z T. Prylińskim"]}
              />
              <AboutInfoItems
                title="Lobbing"
                items={[
                  "W roku 1871, z inicjatywy Jana Matejki, wybudowano na Rynku w Bochni pomnik Kazimierza Wielkiego",
                ]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
