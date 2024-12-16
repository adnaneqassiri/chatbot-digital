"use client";
import { useState } from "react";
import { auth } from "../firebase"; // Firebase config
import { signOut } from "firebase/auth";

export default function Page() {
  const [annonce, setAnnonce] = useState("");
  const [annonces, setAnnonces] = useState([]);

  const publierAnnonce = () => {
    if (annonce.trim()) {
      setAnnonces([...annonces, annonce]);
      setAnnonce("");
    }
  };

  return (
    <div className="prof">
      <main className="container">
        <h1>Interface Professeurs</h1>
        <div>
          <textarea
            placeholder="Rédigez votre annonce ici..."
            value={annonce}
            onChange={(e) => setAnnonce(e.target.value)}
          />
          <button className="btn" onClick={publierAnnonce}>
            Publier Annonce
          </button>
        </div>
        <section>
          <h2>Annonces Publiées</h2>
          {annonces.map((a, index) => (
            <div key={index} className="annonce">
              {a}
            </div>
          ))}
        </section>
        <button onClick={() => signOut(auth)}>Se déconnecter</button>
      </main>
    </div>
  );
}
