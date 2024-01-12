import Section from "./AccordianSection";

function Accordian() {
  const sections = [{title: "Coding Documentation", websites:[["Sass", "https://sass-lang.com/documentation/"], ["jQuery", "https://api.jquery.com/"]]}, {title: "Google Services", websites:[["Slides", "https://docs.google.com/presentation/u/0/?tgif=d"], ["Drive", "https://drive.google.com/drive/my-drive"]]}, {title: "Social Media / Other", websites:[["Twitter", "https://twitter.com"], ["Github", "https://github.com"]]}];
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