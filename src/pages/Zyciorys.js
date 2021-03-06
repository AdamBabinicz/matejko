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
      margin-bottom: 2rem;
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
                  Jan Alojzy Matejko (ur. 24 czerwca [a] 1838 w&nbsp;Krakowie,
                  zm. 1&nbsp;listopada 1893 tam??e) ??? polski malarz, tw??rca
                  obraz??w historycznych i&nbsp;batalistycznych, historiozof. By??
                  autorem ponad trzystu obraz??w olejnych oraz&nbsp;kilkuset
                  rysunk??w i&nbsp;szkic??w [1]. Jeden z&nbsp;najwybitniejszych
                  polskich malarzy w&nbsp;historii [2]. W&nbsp;latach 1852???1858
                  studiowa?? u&nbsp;W??adys??awa ??uszczkiewicza i&nbsp;Wojciecha
                  Stattlera w&nbsp;Szkole Sztuk Pi??knych w&nbsp;Krakowie, kt??rej
                  p????niej by?? dyrektorem (od 1873). Jego uczniami byli m.in.
                  Maurycy Gottlieb, Jacek Malczewski, J??zef Mehoffer
                  i&nbsp;Stanis??aw Wyspia??ski.
                  <br /> <br />
                  Ojciec malarza, Franciszek Ksawery Matejko, w??a??c. Franti??ek
                  Xaver Mat??jka (Matieyka), by?? Czechem, urodzonym
                  w&nbsp;Roudnicy ko??o Hradca Kr??lov?? jako syn ch??opski. Przyby??
                  do Galicji w&nbsp;charakterze guwernera i&nbsp;nauczyciela
                  muzyki. Pocz??tkowo pracowa?? u&nbsp;rodziny Wodzickich
                  w&nbsp;Ko??cielnikach (dzi?? cz?????? Nowej Huty), a&nbsp;nast??pnie
                  przeni??s?? si?? do Krakowa, gdzie po??lubi?? Joann?? Karolin??
                  Rossberg (1802???1845), wywodz??c?? si?? z&nbsp;polsko-niemieckiej
                  rodziny zamo??nych rymarzy. Franciszek by?? katolikiem, Joanna ???
                  protestantk??. Matejkowie zamieszkali przy ulicy Floria??skiej
                  w&nbsp;Krakowie.
                  <br />
                  <br />
                  Jan Matejko by?? dziewi??tym dzieckiem, z&nbsp;jedenastu, jakie
                  mieli pa??stwo Matejkowie (by??o w??r??d nich dziewi??ciu ch??opc??w
                  i&nbsp;dwie dziewczynki). Gdy Matejko mia?? siedem lat, zmar??a
                  jego matka; dzie??mi zaj????a si?? jej siostra. ??mier?? matki
                  niew??tpliwie wywar??a wp??yw na osobowo???? przysz??ego malarza.
                  Jego dzieci??stwo obfitowa??o w&nbsp;l??ki i&nbsp;przykro??ci [3],
                  nie zaznawa?? tak??e raczej przesadnie starannej opieki (jego
                  z??amany nos nie zwr??ci?? niczyjej uwagi i&nbsp;zr??s?? si??
                  krzywo) [4]. Ojciec nie okazywa?? dzieciom swoich uczu??, by??
                  surowy i&nbsp;pozbawiony akceptacji dla artystycznej pasji
                  syna.
                  <br />
                  <br />
                  Od 1847 r. Jan Matejko ucz??szcza?? do szko??y ??w. Barbary.
                  Wkr??tce zosta?? przeniesiony do Gimnazjum ??w. Anny (obecnie I
                  Liceum Og??lnokszta??c??ce im. Bart??omieja Nowodworskiego
                  w&nbsp;Krakowie). Mimo zdradzanych od najm??odszych lat
                  niepospolitych zdolno??ci plastycznych, z&nbsp;pozosta??ymi
                  dziedzinami radzi?? sobie z&nbsp;ogromnym trudem. Tak??e koledzy
                  nie byli dla niego wyrozumiali i, jak pisa?? Marian Gorzkowski,
                  do??wiadcza?? od swych wsp????towarzyszy pewnego zn??cania si??
                  nawet [5]. Cho?? Matejko i&nbsp;jego rodze??stwo
                  z&nbsp;pochodzenia w&nbsp;po??owie byli Czechami, czuli si??
                  polskimi patriotami, o&nbsp;czym ??wiadczy dzia??alno????
                  wyzwole??cza dw??ch starszych braci Jana, Edmunda
                  i&nbsp;Zygmunta, uczestnik??w powstania w??gierskiego
                  (1848???1849).
                </PText>
                <br />
                <PText>
                  <i>pl.wikipedia.org/wiki/Jan_Matejko</i>
                </PText>
              </div>
              <button
                className="button"
                btnText="zobacz wi??cej"
                onClick={() => setModalIsOpen(true)}
              >
                wi??cej
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
                  W domu naszym zawsze by??o t??oczno i&nbsp;gwarno ??? mia??em
                  bowiem a??&nbsp;o??miu braci i&nbsp;dwie siostry! Wychowywa??em
                  si?? wi??c w&nbsp;rodzinie licznej, do??wiadczonej wieloma
                  troskami, ale te?? pe??nej mi??o??ci i&nbsp;wzajemnego
                  zrozumienia, co zawdzi??czali??my w&nbsp;du??ej mierze naszej
                  Matce. Ojciec by?? wprawdzie cz??owiekiem surowym, nie
                  okazuj??cym nam ciep??a, ale za&nbsp;to bardzo dbaj??cym
                  o&nbsp;nasze materialne potrzeby ??? ca??ymi dniami udziela??
                  lekcji muzyki, by zarobi?? na utrzymanie naszej gromadki. Nas
                  te?? uczy?? gry na fortepianie ??? ja sam nie lubi??em tych lekcji,
                  cho?? d??wi??ki by??y dla mnie wa??ne. Szczeg??lnie podoba??o mi si??
                  jak z&nbsp;Wawelskiego Wzg??rza rozbrzmiewa?? Dzwon Zygmunta ???
                  s??ucha??em go wtedy z wielk?? uwag??.
                </p>
                <br />
                <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
                  Jednak??e, moje szcz????liwe dzieci??stwo szybko si?? sko??czy??o.
                  Gdy mia??em siedem lat moja Matka odesz??a na zawsze. Ojciec nie
                  m??g?? pogodzi?? si?? z&nbsp;jej ??mierci?? i&nbsp;pracowa?? jeszcze
                  wi??cej, a&nbsp;nasze wychowanie powierzy?? siostrze naszej
                  nieod??a??owanej Mamy ??? Katarzynie Rossberg-Zamojskiej. Ciotka
                  by??a dla nas dobra i&nbsp;bardzo o&nbsp;nas dba??a, ale nie
                  zawsze potrafi??a nam okaza?? tyle serca i&nbsp;ciep??a co Mama,
                  za kt??r?? bardzo mi by??o t??skno.
                </p>
                <br />
                <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
                  Odk??d nauczy??em si?? czyta??, odkry??em jedn?? z&nbsp;
                  najwi??kszych swoich pasji ??? histori??. Moimi ulubionymi
                  ksi????kami by??y opowie??ci historyczne ??? niemal na pami???? zna??em
                  ca??e ust??py ze&nbsp;??piew??w historycznych Juliana Ursyna
                  Niemcewicza. Jako dziecko potrafi??em te?? cytowa?? r????ne
                  fragmenty z&nbsp;Don Kichota Cervantesa. Wiem, ??e&nbsp;dob??r
                  lektur mo??e si?? wydawa?? do???? dziwny, ale&nbsp;by??em nietypowym
                  dzieckiem ??? nad wiek powa??nym, lubi??cym samotno????
                  i&nbsp;cisz??. Potrafi??em godzinami bawi?? si?? sam, przebieraj??c
                  si?? i&nbsp;odgrywaj??c r????ne scenki z&nbsp;dawnych dziej??w.
                </p>
                <br />
                <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
                  Od najm??odszych lat samodzielnie rysowa??em i&nbsp;wycina??em
                  z&nbsp;tektury figurki woj??w i&nbsp;rycerzy, by nast??pnie
                  prowadzi?? ich do wielkich i&nbsp;zwyci??skich bitew. Jak
                  wspomnia??em nie lubi??em t??um??w, ale za&nbsp;to ch??tnie
                  uczestniczy??em w&nbsp;r????nych nabo??e??stwach religijnych, na
                  kt??re prowadzali nas rodzice. Moja wrodzona niech???? do
                  t??umnych, ha??a??liwych spotka?? oraz&nbsp;oficjalnych
                  uroczysto??ci cechowa??a mnie r??wnie??, gdy by??em ju?? doros??ym
                  cz??owiekiem i&nbsp;w??a??ciwie pozosta??a mi do dzi??.
                </p>
                <br />
                <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
                  Mo??e dla wielu zaskakuj??cym b??dzie fakt, ??e&nbsp;jako dziecko
                  ch??tnie bawi??em si?? w&nbsp;odprawianie Mszy ??wi??tej. By??em
                  w&nbsp;tym tak wiarygodny, ??e&nbsp;m??j ojciec uwa??a??,
                  i??&nbsp;w&nbsp;przysz??o??ci powinienem zosta?? ksi??dzem. Uwa??a??
                  mnie za&nbsp;ch??opca ??yciowo nieporadnego i&nbsp;duchowny stan
                  wydawa?? mu si?? rozwi??zaniem dla mnie bezpiecznym.
                </p>
                <br />
                <p style={{ fontSize: "1.5rem", color: "var(--gray-2)" }}>
                  Tylko mama, ta dobra i&nbsp;m??dra istota, wiedzia??a,
                  ??e&nbsp;ja mia??em inne rojenia w&nbsp;g??owie ??? moim
                  najwi??kszym marzeniem by??o malowanie. To w??a??nie ona zach??ca??a
                  mnie do&nbsp;rysowania i&nbsp;chwali??a wszystko, co utrwala??em
                  na papierze ??? od sprz??t??w domowych, po podobizny ludzi
                  i&nbsp;zwierz??t.
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
                <img src={AboutImg1} alt="rodze??stwo" />
              </div>
              <p className="par">
                Portret Franciszka Matejki z&nbsp;dzie??mi (u&nbsp;do??u
                Kazimierz, wy??ej Jan i&nbsp;Marianna), 1853/54, obraz
                ze&nbsp;zbior??w Muzeum Narodowego we&nbsp;Wroc??awiu
                w&nbsp;depozycie Domu Matejki.
              </p>
              <br /> <br />
              <div>
                <img src={AboutImg} alt="Jan" />
              </div>
              <p className="par">
                Jan Matejko. Reprodukcja fotografii wykonanej w&nbsp;1862 roku
                w&nbsp;zak??adzie fotograficznym Sebald z&nbsp;Krakowa.
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
                items={["Szko??a Sztuk Pi??knych w Krakowie"]}
              />
              <AboutInfoItems
                title="1852 - 1858"
                items={[
                  "Szko??a Sztuk Pi??knych w Krakowie (u W??adys??awa ??uszczkiewicza i Wojciecha Stattlera)",
                ]}
              />
              <AboutInfoItems
                title="1858 - 1859"
                items={[
                  "stypendium w Akademii Sztuk Pi??knych w Monachium (u Hermanna Ansch??tza)",
                ]}
              />
              <AboutInfoItems
                title="1867"
                items={[
                  "stypendysta na studiach muzealnych w Wiedniu (dawne malarstwo w??oskie)",
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Odznaczenia</h1>

              <AboutInfoItems
                title="1865"
                items={["w Pary??u odebra?? z??oty medal za 'Kazanie Skargi'"]}
              />
              <AboutInfoItems
                title="1867"
                items={[
                  "z??oty medal na Paryskim Salonie za obraz 'Rejtan ??? upadek Polski' (1866), kt??ry zakupi?? cesarz Franciszek J??zef",
                ]}
              />
              <AboutInfoItems
                title="1870"
                items={[
                  "otrzymanie Legii Honorowej (najwy??szego odznaczenia francuskiego)",
                ]}
              />
              <AboutInfoItems
                title="1873"
                items={["cz??onkostwo Acad??mie des Beaux-Arts w Pary??u"]}
              />
              <AboutInfoItems
                title="1878"
                items={[
                  "wr??czono mu w Krakowie symboliczne ber??o ??? na znak 'panowania w sztuce'",
                ]}
              />
              <AboutInfoItems
                title="1882"
                items={["honorowe obywatelstwo Krakowa"]}
              />
              <AboutInfoItems
                title="1886"
                items={[
                  "tytu?? doktora honoris causa Uniwersytetu Jagiello??skiego za obraz 'Dziewica Orlea??ska' (1886)",
                ]}
              />
              <AboutInfoItems
                title="1888"
                items={[
                  "zosta?? cz??onkiem wiede??skiego Stowarzyszenia Artystycznego (Wiener Kunstverein)",
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Dzia??alno????</h1>

              <AboutInfoItems
                title="Pedagogika"
                items={[
                  "kierownik wydzia??u artystycznego na Kursach Wy??szych dla Kobiet im. Adriana Baranieckiego; wykszta??ci?? wielu malarzy; najwa??niejszymi uczniami byli Mehoffer, Wyspia??ski, Tetmajer i Malczewski, wybitni przedstawiciele polskiego modernizmu",
                ]}
              />
              <AboutInfoItems
                title="Konserwacja"
                items={["Sukiennice wraz z T. Pryli??skim"]}
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
