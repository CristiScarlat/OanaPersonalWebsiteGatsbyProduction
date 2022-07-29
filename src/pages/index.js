import * as React from "react";
import GraphqlContext from "../context/graphDataContext";
import Layout from "../components/layout";
import { navigate } from "gatsby";
import "./css/index.css";

const IndexPage = () => {
  const { allImages, allAlbums } = React.useContext(GraphqlContext);

  const cardImages = [
    {
      album: "24 Hours",
      relativeDirectory: "24Hours",
      originalName: "05._.jpg",
      src: "/static/baa4321cd9be03b1cf035845caa903f4/2f1b1/05._.jpg"
    },
    {
      album: "Childhood Spaces",
      relativeDirectory: "childhood-spaces",
      originalName: "case.jpg",
      src: "/static/e6d95de19f7551587a0a034646a2fe67/64124/01.Fairy_Tale_City_I.jpg"
    },
    {
      album: "Hidden Places",
      relativeDirectory: "hidden-places",
      originalName: "02.The_Trip.jpg",
      src: "/static/3a91c8d949ab51dea65aaef263cff2cd/26852/02.The_Trip.jpg"
    },
    {
      album: "Hypnotic",
      relativeDirectory: "hypnotic",
      originalName: "04.The_Magic_Flute.jpg",
      src: "/static/559989e87d42b33bac150ad0fecb72ca/26852/04.The_Magic_Flute.jpg"
    },
    {
      album: "Oneiric Trip",
      relativeDirectory: "oneiric-trip",
      originalName: "01.The_Sign_Of_The_Astronauts_I.jpg",
      src: "/static/9573ec791693f14dbd35e98ac5a3907b/26852/01.The_Sign_Of_The_Astronauts_I.jpg"
    },
    {
      album: "The Realm Of Fairy Tales",
      relativeDirectory: "the-realm-of-fairy-tales",
      originalName: "01.Midnight_I.jpg",
      src: "/static/add9ee992829ac1714ab1d694bc9631b/26852/01.Midnight_I.jpg"
    },
    {
      album: "Digital Prints",
      relativeDirectory: "digital-prints",
      originalName: "04.A_Night_of_chimeras.jpg",
      src: "/static/061c974f4755bded4baf218bf9e849ef/26852/04.A_Night_of_chimeras.jpg"
    }
  ]

  const handleRedirectToGalery = (album) => {
    setTimeout(() => {
      navigate(`/portofolio/${album}`);
    }, 1000)
    
  }

  return (
    <>
      <Layout>
        <div className="d-flex flex-wrap justify-content-center align-items-center p-3">
          {cardImages.map((imageObj) => (
              <div key={imageObj.relativeDirectory} className="home-card-album" onClick={() => handleRedirectToGalery(imageObj.relativeDirectory)}>
                <img
                  src={imageObj?.src}
                  alt="..."
                  className="home-card-image"
                />
                <div className="home-card-text-image">{imageObj.album}</div>
              </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
