import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

Modal.setAppElement("#root");

function Modaldom() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
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
            top: "40px",
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
        <h2 className="text-center font-bold lg:text-2xl sm:text-xl mt-4 mb-6">
          Objawienia i mistyczne przeżycia
        </h2>
        <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
          Na polecenie jednego ze swoich spowiedników, ks. Michała Sopoćki,
          Faustyna zaczęła prowadzić szczegółowy zapis swoich przeżyć, znany
          potem jako Dzienniczek. Opisywała w nim cierpienia
          i&nbsp;przeciwności, stany mistyczne jakich doznawała, przede
          wszystkim liczne wizje i&nbsp;objawienia. Dotyczyły one między innymi
          namalowania obrazu Jezu ufam Tobie (do którego Jezus miał dać
          szczegółowe wskazówki), modlitw Koronki do Miłosierdzia Bożego
          i&nbsp;Godziny Miłosierdzia [17], ustanowienia święta Miłosierdzia
          Bożego (w&nbsp;pierwszą niedzielę po Wielkanocy), szerzenia czci
          Miłosierdzia i&nbsp;obietnic z&nbsp;nim związanych, oraz powołania do
          życia nowego zgromadzenia, czyli takiego dzieła w&nbsp;Kościele, które
          by podjęło zadanie wypraszania miłosierdzia dla świata (Apostolski
          Ruch Bożego Miłosierdzia). Zapisała również polecenie Jezusa Chrystusa
          żądającego, by zostało założone nowe zgromadzenie głoszące na cały
          świat kult Miłosierdzia Bożego. Zgromadzenie to miało również zrzeszać
          wszystkich świeckich wiernych Kościoła katolickiego. Nakaz ten
          urzeczywistnił się wraz z&nbsp;powołaniem do życia Zgromadzenia Sióstr
          Jezusa Miłosiernego i&nbsp;powołaniem świeckiego Apostolskiego Ruchu
          Bożego Miłosierdzia [5].
        </p>
        <br />
        <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
          Objawienia, których doznała święta, dotyczyły przede wszystkim roli
          Miłosierdzia Bożego w&nbsp;życiu duchowym człowieka oraz szerzenia
          kultu tego przymiotu [16][4]. Jezus uczynił Faustynę swoją sekretarką
          [18], której misją było przekazanie światu prawdy o&nbsp;jego miłości
          [19]. Z&nbsp;zapisków wynika, że Miłosierdzie jest największym
          z&nbsp;boskich przymiotów, będącym zwieńczeniem dzieł Boga -
          Stworzyciela [20]. Jest ono powszechne, nieograniczone i&nbsp;dostępne
          dla wszystkich ludzi, w&nbsp;sposób szczególny dla grzeszników [21].
          Chrystus zalecał bezgraniczne zaufanie boskiej miłości, przez co
          człowiek ma osiągać mistyczną doskonałość [21]. Opisała również
          otrzymane dary bilokacji, stygmatów ukrytych [2], czytania
          w&nbsp;duszach ludzkich, proroctwa, mistycznych zrękowin
          i&nbsp;zaślubin [1]. Miała doznawać ataków złych sił nadprzyrodzonych
          [22].
        </p>
        <br />
        <p className="lg:px-10 sm:px-2 lg:text-left sm:text-justify">
          Kluczowe objawienie miało miejsce 22 lutego 1931 roku, w płockim
          Sanktuarium Miłosierdzia Bożego. Jezus polecił jej wtedy namalowanie
          obrazu z&nbsp;podpisem: „Jezu, ufam Tobie”. Według „Dzienniczka” 22
          lutego 1931 miała wizję Jezusa, który kazał jej namalować obraz
          Miłosierdzia Bożego [23]. Miało to miejsce w&nbsp;Płocku,
          w&nbsp;dzisiejszym Sanktuarium Miłosierdzia Bożego [24]. Kolejne
          widzenie dotyczyło ustanowienia Święta Miłosierdzia Bożego,
          obchodzonego w&nbsp;pierwszą niedzielę po Wielkanocy [25].
          W&nbsp;listopadzie 1932, podczas rekolekcyjnej spowiedzi u&nbsp;o.
          Edmunda Eltera SJ, otrzymała pierwsze potwierdzenie nadprzyrodzonego
          pochodzenia objawień [5].
        </p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>
            <MdClose className="absolute right-3 top-6 text-2xl" />
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Modaldom;
