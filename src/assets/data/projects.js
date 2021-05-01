import { v4 as uuidv4 } from "uuid";
import Img1 from "../images/szujscy.jpeg";
import Img2 from "../images/wapowski.png";
import Img3 from "../images/stanczyk.jpg";
import Img4 from "../images/skarga.jpg";
import Img5 from "../images/rejtan.png";
import Img6 from "../images/1867.jpg";
import Img7 from "../images/kopernik.jpg";
import Img8 from "../images/grunwald.jpg";
import Img9 from "../images/zona.jpg";
import Img10 from "../images/dzieci.jpg";
import Img11 from "../images/wernyhora.jpg";
import Img12 from "../images/jezus.jpg";
import Img13 from "../images/chrzest.jpg";
import Img14 from "../images/lithuania.png";
import Img15 from "../images/autoportret.jpg";

const projects = [
  {
    id: uuidv4(),
    name: "Carowie Szujscy przed Zygmuntem III",
    desc: "1853 (75,5 x 108).",
    img: Img1,
  },
  {
    id: uuidv4(),
    name: "Zabicie Wapowskiego w czasie koronacji Henryka Walezego",
    desc: "1861 (132 x 101).",
    img: Img2,
  },
  {
    id: uuidv4(),
    name: "Stańczyk",
    desc: "1862 (88 x 120).",
    img: Img3,
  },
  {
    id: uuidv4(),
    name: "Kazanie Skargi",
    desc: "1864 (124 x 3947).",
    img: Img4,
  },
  {
    id: uuidv4(),
    name: "Rejtan",
    desc: "1866 (282 x 487).",
    img: Img5,
  },
  {
    id: uuidv4(),
    name: "Wyrok na Matejkę",
    desc: "1867 (56 x 45).",
    img: Img6,
  },
  {
    id: uuidv4(),
    name: "Astronom Kopernik, czyli rozmowa z Bogiem",
    desc: "1871-1873 (226 x 315).",
    img: Img7,
  },
  {
    id: uuidv4(),
    name: "Bitwa pod Grunwaldem, AD 1410",
    desc: "1878 (426 x 987).",
    img: Img8,
  },
  {
    id: uuidv4(),
    name: "Portret żony artysty Teodory z Giebułtowskich",
    desc: "1879 (130 x 106,5).",
    img: Img9,
  },
  {
    id: uuidv4(),
    name: "Portret czworga dzieci artysty",
    desc: "1879 (149 x 209).",
    img: Img10,
  },
  {
    id: uuidv4(),
    name: "Wernyhora",
    desc: "1883-1884 (290 x 204).",
    img: Img11,
  },
  {
    id: uuidv4(),
    name: "Wniebowstąpienie",
    desc: "1884 (103 x 67).",
    img: Img12,
  },
  {
    id: uuidv4(),
    name: "Zaprowadzenie chrześcijaństwa w Polsce, AD 966",
    desc: "1889 (79 x 120)",
    img: Img13,
  },
  {
    id: uuidv4(),
    name: "Chrzest Litwy, AD 1387",
    desc: "1889 (60 x 115,5)",
    img: Img14,
  },
  {
    id: uuidv4(),
    name: "Autoportret",
    desc: "1892 (160 x 110)",
    img: Img15,
  },
];

export default projects;
