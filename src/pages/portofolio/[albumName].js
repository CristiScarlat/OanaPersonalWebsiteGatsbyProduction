import React from "react";
import Layout from "../../components/layout";
import GraphqlContext from "../../context/graphDataContext";
import { Tabs, Tab, Button } from "react-bootstrap";
import GallerySwipe from "../../components/gallerySwipe";
import { UI_DESCRIPTION_TEXT } from "../../components/ui-large-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { Link, navigate } from "gatsby";
import "../css/portofolio.css";

const Portofolio = (props) => {
  const [showDescription, setShowDescription] = React.useState(false);
  const { allImages, allAlbums } = React.useContext(GraphqlContext);

  const handleShowDescription = () => {
    setShowDescription((state) => !state);
  };

  console.log(props, allAlbums);
  const album = props.albumName;
  return (
    <Layout>
      {/* <div className="d-flex h-100" > */}
      {/* <aside className="portofolio-aside">{allAlbums.map(album => <Link to={`/portofolio/${album}`}>{album}</Link>)}</aside> */}
      <div className="w-100">
        <div className="d-flex">
          <div className="p-2">
            <Button variant="dark" onClick={() => navigate("/")}>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </Button>
          </div>
          {UI_DESCRIPTION_TEXT[album] && (
            <div className="p-2">
              <Button variant="dark" onClick={handleShowDescription}>
                {!showDescription ? `About ${album}` : "View the gallery"}
              </Button>
            </div>
          )}
        </div>
        <hr />
        {showDescription ? (
          <div
            dangerouslySetInnerHTML={UI_DESCRIPTION_TEXT[album]}
            className="p-3"
          />
        ) : (
          <GallerySwipe
            imageList={allImages.filter(
              (imgObj) =>
                imgObj.relativeDirectory === album &&
                !imgObj.originalName.includes("img-0")
            )}
          />
        )}
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default Portofolio;
