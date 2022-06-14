import { BsLinkedin } from "react-icons/bs";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import Button from "@mui/material/Button";

type ListProps = {
  desc: String[];
};

const List: React.FC<ListProps> = ({ desc }) => {
  return (
    <div>
      {desc.map((item: any, index: any) => (
        <div>
          <input type="checkbox" id={index} disabled={true} checked={false} />
          <label htmlFor={index}>{item}</label>
        </div>
      ))}
    </div>
  );
};

type TextShelfProps = {
  media: {
    name: string;
    key: number;
    desc: string | String[];
    headshot?: string;
    linkedin?: string;
  }[];
  id: string;
};

const TextShelf: React.FC<TextShelfProps> = ({ media, id }) => {

  function scroll(right: boolean) {
    const elem = document.getElementById(id);
    console.log("right: ", right, " elem: ", elem);
    
    if (right && elem) elem.scrollLeft += 256;
    else if (elem) elem.scrollLeft -= 256;
  }

  return (
    <div className="media-shelf-container">
      <ul className="media-shelf" id={id}>
        {media.map(({ name, key, desc, headshot, linkedin }) => (
          <li key={key} className="media-shelf--item">
            <figure>
              {headshot && <img src={headshot} alt="headshot" />}
              <h2>
                {name}{" "}
                {linkedin && (
                  <BsLinkedin onClick={() => window.open(linkedin, "_blank")} />
                )}
              </h2>
              {typeof desc === "string" ? <p>{desc}</p> : <List desc={desc} />}
            </figure>
          </li>
        ))}
      </ul>
      <div className="media-shelf--text-buttons">
        <IconContext.Provider value={{ color: "white", size: "3em"}}>
          <Button onClick={()=>scroll(false)}><FaArrowCircleLeft /></Button>
          <Button onClick={()=>scroll(true)}><FaArrowCircleRight /></Button>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default TextShelf;
