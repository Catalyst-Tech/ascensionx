import { BsLinkedin } from "react-icons/bs";

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
};

const TextShelf: React.FC<TextShelfProps> = ({ media }) => {
  return (
    <div className="media-shelf-container">
      <ul className="media-shelf">
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
    </div>
  );
};

export default TextShelf;
