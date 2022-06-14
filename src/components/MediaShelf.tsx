import Modal from "@mui/material/Modal";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import getText from "./IslandInfo";
import Button from "@mui/material/Button";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";

type MediaItemProps = {
  imageUrl: any;
  caption: any;
};

const MediaItem: React.FC<MediaItemProps> = ({ imageUrl, caption }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li key={`${caption}-${imageUrl}`} className="media-shelf--item">
        <figure>
          <picture>
            <img src={`${imageUrl}`} alt={caption} loading="lazy" />
          </picture>
          <figcaption>{caption}</figcaption>
          <Button
            onClick={() => {
              setOpen(!open);
            }}
          >
            Learn More
          </Button>
        </figure>
      </li>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="media-modal">
          <div className="media-modal--container">
            <Button onClick={() => setOpen(false)}>
              <GrClose />
            </Button>

            <img src={`${imageUrl}`} alt={caption} loading="lazy" />

            <div className="media-modal--container--text">
              <h1>{caption}</h1>
              <p>{getText(caption)}</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

type MediaShelfProps = {
  media: { imageUrl: string; caption: string }[];
  id: string;
};

const MediaShelf: React.FC<MediaShelfProps> = ({ media, id }) => {

  function scroll(right: boolean) {
    const elem = document.getElementById(id);
    console.log("right: ", right, " elem: ", elem);
    
    if (right && elem) elem.scrollLeft += 256;
    else if (elem) elem.scrollLeft -= 256;
  }

  return (
    <div className="media-shelf-container">
      <ul className="media-shelf" id={id}>
        {media.map(({ imageUrl, caption }) => (
          <MediaItem imageUrl={imageUrl} caption={caption} />
        ))}
      </ul>
      <div className="media-shelf--land-buttons">
        <IconContext.Provider value={{ color: "white", size: "3em"}}>
          <Button onClick={()=>scroll(false)} aria-label="Left"><FaArrowCircleLeft /></Button>
          <Button onClick={()=>scroll(true)} aria-label="Right"><FaArrowCircleRight /></Button>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default MediaShelf;
