import {useState, useEffect} from "react";

const RandomQuote = () => {
  const [oneQuote, setOneQuote] = useState({"quote": "", "author": ""});
  const url = 'https://dummyjson.com/quotes/random';
  const fetchQuote = async() => {
    try {
      let response = await fetch(url);
      let quote = await response.json();
      setOneQuote(quote);
    } catch(err) {
      console.log(err);
    }
  };
  useEffect(() => {
      fetchQuote();
  }, []);
  return (
    <div id="theInfo">
      <h1 id="quote">"{oneQuote.quote}"</h1>
      <h2 id="author">- {oneQuote.author}</h2>
    </div>
  );
}

export default RandomQuote
