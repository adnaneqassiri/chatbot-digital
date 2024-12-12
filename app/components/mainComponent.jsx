import React from "react";
import insertIcon from "../../public/images/insert.png";
import Image from "next/image";
import enterIcon from "../../public/images/next.png";
function Home() {
  return (
    <div className="App">
      <div className="container">
        <div className="prompt">
          <h2>How can I help you today ? </h2>
          <div className="iyad">
            <input type="text" placeholder="Message NextGen..." />
          </div>
          <div className="icons">
            <Image src={insertIcon} height={35} />
            <Image src={enterIcon} height={35} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
