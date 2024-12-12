import React from "react";

import logo from "../../public/images/logo.png";
import logoEnsa from "../../public/images/ensa-logo.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="context">
          <h2>Context</h2>
          <p>
            Dans une école moderne, une communication efficace entre étudiants,
            professeurs et responsables est cruciale. Elle améliore la
            collaboration, favorise l&apos;apprentissage et répond rapidement
            aux besoins, créant ainsi un environnement scolaire harmonieux et
            productif.
          </p>
        </div>

        <div className="logos">
          <Image src={logo} height={120} />
          <Image src={logoEnsa} height={120} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
