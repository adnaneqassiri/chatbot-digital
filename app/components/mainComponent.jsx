import React from "react";
import insertIcon from "../../public/images/insert.png";
import Image from "next/image";
import enterIcon from "../../public/images/next.png";
function Home() {
  return (
    <div className="App">
      <div className="container">
        <h2>Le chatbot est encore de retablissement.</h2>
        <div className="prompt">
          <h2>Comment puis-je vous aider aujourd&apos;hui ?</h2>
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
