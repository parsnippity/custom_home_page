//regulate sizing of favicons (I put in a width but it isn't working)
//my colspan isn't working
//change document title
//music overflows on desktop (didn't used to)

import {useState, useEffect} from "react";
import Music from "./components/Music";
import RandomQuote from "./components/RandomQuote";
import Tabs from "./components/Tabs";
import Accordian from "./components/Accordian";
import GoogleSearch from "./components/GoogleSearch";
import "./App.css";

const App = () => {
  const [beBig, setBeBig] = useState(true);
  const checkSize = () => {
    if(window.innerWidth > 768) {
      setBeBig(true);
    }
    if(window.innerWidth <= 768) {
      setBeBig(false);
    }
  }
  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize)
    return () => {
      window.removeEventListener("resize", checkSize);
    }
  }, [])
  return (
    <div>
      {beBig ? <>
        <div id="topBig">
          <RandomQuote/>
          <div><img src="https://live.staticflickr.com/4112/5170590074_714d36db83_b.jpg" alt="profile picture" id="profilePic"/></div>
          <Music/>
        </div>
        <GoogleSearch/>
        <Tabs/>
      </> : <>
        <div id="topSmall">
          <img src="https://live.staticflickr.com/4112/5170590074_714d36db83_b.jpg" alt="profile picture" id="profilePic"/>
          <GoogleSearch/>
        </div>
        <RandomQuote/>
        <Accordian/>
        <Music/>
      </>}
    </div>
  )
}

export default App;
