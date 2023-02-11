import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import { menu, shopCat, help } from "../../../Data";
import Image from "../Image";
import { AiOutlineInstagram, FaFacebookF, TfiLinkedin } from "../../../Icons";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="bg-third py-14">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3">
            <div>
              <h4 className="text-base font-bold uppercase text-primary">
                Menu
              </h4>
              <ul className="mt-5">
                {menu.map((item, index) => (
                  <li key={index} className={"mb-2 text-secondery"}>
                    <Link to={`/${item.link.toLowerCase()}`}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold uppercase text-primary">
                shop
              </h4>
              <ul className="mt-5">
                {shopCat.map((item, index) => (
                  <li key={index} className={"mb-2 text-secondery"}>
                    <Link to={`/${item.link.toLowerCase()}`}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold uppercase text-primary">
                help
              </h4>
              <ul className="mt-5">
                {help.map((item, index) => (
                  <li key={index} className={"mb-2 text-secondery"}>
                    <Link to={`/${item.link.toLowerCase()}`}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2">
            <div>
              <p className="text-base font-bold text-primary">(052) 611-5711</p>
              <p className="mt-3 text-base font-bold text-primary">
                company@domain.com
              </p>
              <p className="mt-3 text-base text-secondery">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
            <div className="mt-5 md:mt-0">
              <Image src={"images/logo.png"} />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between sm:flex-row">
          <div className="flex gap-5 ">
            <FaFacebookF />
            <TfiLinkedin />
            <AiOutlineInstagram />
          </div>
          <p className="text-base text-secondery">
            {year} Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
