import React from "react";
import Ansi from "../EceBook/EceData/Ansi.jpg";
import biomedical from "../EceBook/EceData/biomedical.jpg";
import circuit from "../EceBook/EceData/circuit.jpg";
import Electrical from "../EceBook/EceData/Electrical.jpg";
import dataCom from "../EceBook/EceData/dataCom.jpg";
import calculus from "../EceBook/EceData/calculus.jpg";

import EceBookCart from "./EceBookCart";

function EceBook(props) {
  const eceBooks = [
    {
      id: 1,
      name: "Electrical Technology",
      author: "B.L.Theraja & A.K Theraja",
      coverPic: Electrical,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1Wd1ov_Ml3rz2G8TvamsMPJW8YAkcWXbd",
    },
    {
      id: 2,
      name: "Introductory Circuit Analysis",
      author: "Boylestad",
      coverPic: circuit,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1hdtZN3qEzS39CjByDSw-NB48V55K2tWG",
    },
    {
      id: 3,
      name: "Data Communication and Networking",
      author: "Forouzan",
      coverPic: dataCom,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=12Cc0Ru1n-gn9SQ6EtvgLMDcingzV0huk",
    },
    {
      id: 4,
      name: "Biomedical Instrumentation",
      author: "R.S. Khandpur",
      coverPic: biomedical,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1IMefsYigxWWGGvh549RgKgs1dngvuiCk",
    },
    {
      id: 5,
      name: "Programming In ANSI C",
      author: "Balagurusamy",
      coverPic: Ansi,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1ScV9vU-j28a9NlVuJudMnCP04CTUosaD",
    },
    {
      id: 6,
      name: "Integral Calculus",
      author: "B.C. Das & B.N. Mukherjee",
      coverPic: calculus,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=13BpNFHYoRlY_jEabfgOqUG0h-MfnZkIe",
    },
  ];

  return (
    <section>
      <div className="mt-3 pt-3">
        <div className="text-center">
          <h2 className="text-dark " style={{ fontSize: "65px" }}>
            ECE BookList
          </h2>
        </div>
        <div className="row justify-content-center d-flex">
          {eceBooks?.map((book) => (
            <EceBookCart book={book}></EceBookCart>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EceBook;
