import {useState} from 'react'

const Tabs = () => {
  const [value, setValue] = useState(0);
  const links = [{title: "Coding Documentation", websites:[["Sass", "https://sass-lang.com/documentation/"], ["jQuery", "https://api.jquery.com/"], ["MDN", "https://developer.mozilla.org/en-US/"], ["React Router", "https://reactrouter.com/en/main"], ["React Icons", "https://react-icons.github.io/react-icons/"], ["Axios", "https://axios-http.com/docs/intro"], ["Passport", "https://www.passportjs.org/docs/"], ["Mongoose", "https://mongoosejs.com/docs/guide.html"], ["Express", "https://expressjs.com/en/4x/api.html"], ["Bootstrap", "https://getbootstrap.com/"], ["Node.js", "https://nodejs.org/api/"]]}, {title: "Google Services", websites:[["Slides", "https://docs.google.com/presentation/u/0/?tgif=d"], ["Drive", "https://drive.google.com/drive/my-drive"], ["Chat", "https://mail.google.com/chat/u/0/#chat/home"], ["Gmail", "https://mail.google.com/mail/u/0/#inbox"]]}, {title: "Social Media / Other", websites:[["Twitter", "https://twitter.com"], ["Github", "https://github.com"], ["Pixlr", "https://pixlr.com/editor/"], ["OpenGraph", "https://www.opengraph.xyz/"], ["Color Wheel", "https://color.adobe.com/create/color-wheel"], ["Indeed", "https://www.indeed.com/"], ["LinkedIn", "https://www.linkedin.com/"]]}]
  const {websites} = links[value];
  return (
    <table>
      <thead>
      <tr>
          {links.map((item, index) => {
            return (
              <th key={index}>
              <button onClick={() => {
                setValue(index);
                let ding = new Audio("./click.wav");
	              ding.play();
              }} className={`link-btn ${index === value && "active-btn"}`}
              >{item.title}</button>
              </th>
            )
          })}
      </tr>
      </thead>
      <tbody>
      <tr>
        <td className="site-info" colSpan={3}>
          {websites.map((site, index) => {
            let favicon = `https://www.google.com/s2/favicons?domain=${site[1]}&sz=48`;
            return (
              <div className="site-desc" key={index}>
                <a href={site[1]}><img src={favicon} alt={`icon for ${site[0]}`}/></a>
                <p>{site[0]}</p>
              </div>
            )
          })}
        </td>
      </tr>
      </tbody>
    </table>
  )
}

export default Tabs;