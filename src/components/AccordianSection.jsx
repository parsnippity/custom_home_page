import {useState} from 'react';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const AccordianSection = ({title, websites}) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className="accordianSection">
            <header className="accordianTitle">
                <h4 className="accordianName">{title}</h4>
                <button className="btn" onClick={() => {
                    let ding = new Audio("./click.wav");
	                ding.play();
                    setShowInfo(!showInfo);
                }}>{showInfo ? <FaAngleUp/> : <FaAngleDown/>}</button>
            </header>
            {showInfo && 
            <div className="websiteHolder">
            {websites.map((site, index) => {
                let favicon = `https://www.google.com/s2/favicons?domain=${site[1]}&sz=32`;
                return (
                    <div className="job-desc" key={index}>
                        <a href={site[1]}><img src={favicon} id="siteIcon" alt={`icon for ${site[0]}`}/></a>
                        <p>{site[0]}</p>
                    </div>
                )
            })}
            </div>}
        </article>
    )
}

export default AccordianSection;
