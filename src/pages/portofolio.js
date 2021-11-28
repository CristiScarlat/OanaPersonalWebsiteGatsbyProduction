import React from 'react';
import Layout from '../components/layout';
import GraphqlContext from '../context/graphDataContext';
import { Tabs, Tab } from 'react-bootstrap';
import GallerySwipe from '../components/gallerySwipe';
import './css/portofolio.css';

const Portofolio = () => {
    const { allImages, allAlbums } = React.useContext(GraphqlContext)

    return (
        <Layout>
            {(allAlbums && allAlbums.length > 0) && <Tabs defaultActiveKey={allAlbums[3]} className="albums-tabs-container mb-3">
                {allAlbums.map(album => (
                <Tab key={album} eventKey={album} title={album} tabClassName="albums-tab">
                    <GallerySwipe imageList={allImages.filter(imgObj => imgObj.relativeDirectory === album && !imgObj.originalName.includes('img-0'))} />
                </Tab>
                ))}
            </Tabs>}
        </Layout>
    )
}

export default Portofolio;