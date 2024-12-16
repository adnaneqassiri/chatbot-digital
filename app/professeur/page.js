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
          <p className="note">Annonce publiée avec succès</p>
          <button className="btn" onClick={publierAnnonce}>
            Publier Annonce
          </button>
        </div>
        <section>
          {annonces.map((a, index) => (
            <div key={index} className="annonce">
              {a}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
