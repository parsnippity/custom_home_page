import Section from "./AccordianSection";

function Accordian() {
  const sections = [{title: "Coding Documentation", websites:[["Sass", "https://sass-lang.com/documentation/"], ["jQuery", "https://api.jquery.com/"], ["MDN", "https://developer.mozilla.org/en-US/"], ["React Router", "https://reactrouter.com/en/main"], ["React Icons", "https://react-icons.github.io/react-icons/"], ["Axios", "https://axios-http.com/docs/intro"], ["Passport", "https://www.passportjs.org/docs/"], ["Mongoose", "https://mongoosejs.com/docs/guide.html"], ["Express", "https://expressjs.com/en/4x/api.html"], ["Bootstrap", "https://getbootstrap.com/"], ["Node.js", "https://nodejs.org/api/"]]}, {title: "Google Services", websites:[["Slides", "https://docs.google.com/presentation/u/0/?tgif=d"], ["Drive", "https://drive.google.com/drive/my-drive"], ["Chat", "https://mail.google.com/chat/u/0/#chat/home"], ["Gmail", "https://mail.google.com/mail/u/0/#inbox"], ["Docs", "https://docs.google.com/document/u/1/"], ["Sheets", "https://docs.google.com/spreadsheets/u/1/"]]}, {title: "Social Media / Other", websites:[["Twitter", "https://twitter.com"], ["Github", "https://github.com"], ["Pixlr", "https://pixlr.com/editor/"], ["OpenGraph", "https://www.opengraph.xyz/"], ["Color Wheel", "https://color.adobe.com/create/color-wheel"], ["Indeed", "https://www.indeed.com/"], ["LinkedIn", "https://www.linkedin.com/"]]}]
  return (
    <div className="container">
          {sections.map((section, index) => {
            return (
            <Section key={index} {...section}/>
            )
          })}
      </div>
  )
}

export default Accordian;
