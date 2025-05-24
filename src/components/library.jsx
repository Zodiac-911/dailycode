import "../styles/libraries.css";
import libraryIMG from "../assets/library-image.png";

import LibrariesTopCardInfos from "../components/libraries-top-card-infos.jsx";
import LibraryCardText from "../components/library-card-text.jsx";

function Library() {
  return (
    <>
      <div className="library-card" data-aos="zoom-out-up">
        <LibrariesTopCardInfos downloads="1.2K" issues="911" stars="3.9" />
        <img src={libraryIMG} alt="" className="library-img" />
        <LibraryCardText
          title="Library Title"
          description="Lorem ipsum dolor sit amet consectetur adipisicing inventore. Possimus quis sunt recusandae?"
        />
      </div>
    </>
  );
}
export default Library;
