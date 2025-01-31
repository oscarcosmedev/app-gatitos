import { useEffect, useState } from "react";
import './App.css'

export default function CatFactApp() {
  
  const [fact, setFact] = useState("");
  const [firstWord, setFirstWord] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const fetchCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      const words = data.fact.split(" ").slice(0, 3).join(' ');

      setFact(data.fact);
      setFirstWord(words);
      setImageUrl(`https://cataas.com/cat/says/${words}?fontSize=50&fontColor=orange&?type=square`);

    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <main>
      <aside>
        <p>{fact}</p>
        {imageUrl && <img src={imageUrl} alt={firstWord} />}
      </aside>
      <button onClick={fetchCatFact}>Obtener otro gato</button>
    </main>
  );
}