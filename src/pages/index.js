import * as React from "react";
import GraphqlContext from "../context/graphDataContext";
import Layout from "../components/layout";
import Card from "../components/card";
import { Link } from "gatsby";
import "./css/index.css";

const IndexPage = () => {
  const { allImages, allAlbums } = React.useContext(GraphqlContext);

  console.log(allImages, allAlbums);
  const cardImages = [
    {
      relativeDirectory: "24Hours",
      originalName: "05._.jpg",
      src: "/static/baa4321cd9be03b1cf035845caa903f4/2f1b1/05._.jpg"
    },
    {
      relativeDirectory: "childhood-spaces",
      originalName: "case.jpg",
      src: "/static/e6d95de19f7551587a0a034646a2fe67/64124/01.Fairy_Tale_City_I.jpg"
    },
    {
      relativeDirectory: "hidden-places",
      originalName: "02.The_Trip.jpg",
      src: "/static/3a91c8d949ab51dea65aaef263cff2cd/26852/02.The_Trip.jpg"
    },
    {
      relativeDirectory: "hypnotic",
      originalName: "04.The_Magic_Flute.jpg",
      src: "/static/559989e87d42b33bac150ad0fecb72ca/26852/04.The_Magic_Flute.jpg"
    },
    {
      relativeDirectory: "oneiric-trip",
      originalName: "01.The_Sign_Of_The_Astronauts_I.jpg",
      src: "/static/9573ec791693f14dbd35e98ac5a3907b/26852/01.The_Sign_Of_The_Astronauts_I.jpg"
    },
    {
      relativeDirectory: "the-realm-of-fairy-tales",
      originalName: "01.Midnight_I.jpg",
      src: "/static/add9ee992829ac1714ab1d694bc9631b/26852/01.Midnight_I.jpg"
    },
    {
      relativeDirectory: "digital-prints",
      originalName: "04.A_Night_of_chimeras.jpg",
      src: "/static/061c974f4755bded4baf218bf9e849ef/26852/04.A_Night_of_chimeras.jpg"
    }
  ]
  return (
    <>
      <Layout>
        {/* <Link to="/portofolio" className="home-button">Wellcome</Link> */}
        <div className="d-flex flex-wrap justify-content-center align-items-center p-3">
          {cardImages.map((imageObj) => (
            <Card key={imageObj?.src} className="home-card-main m-3">
              <div>
                <img
                  src={imageObj?.src}
                  alt="..."
                  className="home-card-image"
                />
              </div>
            </Card>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
