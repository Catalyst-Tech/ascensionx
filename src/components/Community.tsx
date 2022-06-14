import Socials from "./Socials";
import Leaf from "./Leaf";

const Community: React.FC = () => {
  return (
    <>
      <Leaf side="Left">
        <h1>Community</h1>
        <p>
          Community has always been a cornerstone of the Ascension Ecoverse
          project, and with the combined efforts of the Ascension team and the
          community members themselves, we grow stronger on a daily basis.
        </p>
        <p>
          If you want updates on or wish to get involved with the $ASCN token,
          the Ascension Land NFTs, or the Ascension Ecoverse game, follow our
          social platforms and join our Discord community!
        </p>
        <div className="community">
          <Socials id="Social-Media-Menu-2"/>
        </div>
      </Leaf>
    </>
  );
};

export default Community;
