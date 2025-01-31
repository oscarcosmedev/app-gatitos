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
      const words = data.fact.split(" ");
      const first = words[0];
      setFact(data.fact);
      setFirstWord(first);
      setImageUrl(`https://cataas.com/cat/says/${first}`);
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
        <p className="text-lg font-semibold">{fact}</p>
        {imageUrl && <img src={imageUrl} alt={firstWord} className="mt-4 rounded" />}
      </aside>
      <button onClick={fetchCatFact}>Obtener otro dato</button>
    </main>
  );
}