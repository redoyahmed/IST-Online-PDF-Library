import React from "react";
import FooterCol from "../Footer/FooterCol";
import "../Footer/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const contact = [
    {
      name: "House # 54, Road # 15/A (Old-26) Dhanmondi,(East of Shankar Bus Stand)",
    },
    { name: "Dhaka-1209,Bangladesh" },
  ];
  const developedBy = [
    { name: "Md.Mahfuz Alam,ECE-11th Batch" },
    { name: "Md.Hridoy Ahmed,ECE-11th Batch" },
  ];
  const ourClubs = [
    { name: "Electronics, Communication and Robotics Club of IST (ECRC)" },
    { name: "Programming Club of IST (pcIST)" },
    { name: "Programming Club of IST (pcIST)" },
  ];

  return (
    <footer className="footer-area  mt-5">
      <div className="container ">
        <div className="row py-5">
          <div className="col-md-3">
            <div>
              <h3 className="text-dark mt-2 ml-2">About</h3>
              <div>
                <p className="text-dark mt-3">
                  Institute of Science and Technology (IST), affiliated with
                  National University, Bangladesh, is celebrating its 29th
                  anniversary this year. Over the last decade, IST has earned
                  local and global reputation by creating...
                  <a href="https://ist.edu.bd/about-ist/">[readmore]</a>
                </p>
              </div>
            </div>
            <FooterCol key={1} menuTitle="Clubs" menuItems={ourClubs} />
            <FooterCol
              key={2}
              menuTitle="DevelopedBy"
              menuItems={developedBy}
            ></FooterCol>
            <FooterCol key={3} menuTitle="Contacts" menuItems={contact}>
              <ul className="social-media list-inline">
                <li className="list-inline-item">
                  <a href="//facebook.com">
                    <FontAwesomeIcon
                      className="icon active-icon"
                      icon={faFacebookF}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="//google.com">
                    <FontAwesomeIcon
                      className="icon active-icon"
                      icon={faGooglePlusG}
                    />
                  </a>
                </li>
              </ul>
              <div className="mt-2">
                <h6 className="text-dark">Call now</h6>
                <button className="btn btn-danger">
                  <i class="fas fa-phone-alt">+88 02-55029352</i>
                </button>
                <button className="btn btn-danger">
                  <i class="fas fa-phone-alt">+88 02-55029353</i>
                </button>
                <button className="btn btn-danger">
                  <i class="fas fa-phone-alt">+88 017 2693 7910</i>
                </button>
              </div>
            </FooterCol>
          </div>
        </div>
        <div className="copyRight text-center text-dark p-4">
          <p>
            Copyright {new Date().getFullYear()} IST Online Library All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
