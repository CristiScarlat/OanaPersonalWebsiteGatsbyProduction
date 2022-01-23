import React from 'react';
import Layout from '../components/layout';
import GraphqlContext from '../context/graphDataContext';
import { Tabs, Tab, Accordion, Card, Button } from 'react-bootstrap';
import GallerySwipe from '../components/gallerySwipe';
import { UI_DESCRIPTION_TEXT } from './ui-large-text';
import './css/portofolio.css';

const Portofolio = () => {
    const [showDescription, setShowDescription] = React.useState(false);
    const { allImages, allAlbums } = React.useContext(GraphqlContext);

    const handleShowDescription = () => {
        setShowDescription(state => !state)
    }

    const handleTabSelect = () => {
        setShowDescription(false)
    }

    return (
        <Layout>
            {(allAlbums && allAlbums.length > 0) && <Tabs defaultActiveKey={allAlbums[3]} className="albums-tabs-container mb-0" onSelect={handleTabSelect}>
                {allAlbums.map(album => (
                    <Tab key={album} eventKey={album} title={album} tabClassName="albums-tab">
                        {/* <Accordion defaultActiveKey="0">
                            <Card bg="dark">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="dark" eventKey="1">
                                        Click to read about the project
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body dangerouslySetInnerHTML={hypnotic}></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion> */}
                        {UI_DESCRIPTION_TEXT[album] &&
                        <>
                        <div className='p-2'>
                            <Button variant='dark' onClick={handleShowDescription}>{!showDescription ? `About ${album}` : 'View the gallery'}</Button>
                        </div>
                        <hr />
                        </>}
                        {showDescription ? <div dangerouslySetInnerHTML={UI_DESCRIPTION_TEXT[album]} className="p-3" /> :
                            <GallerySwipe imageList={allImages.filter(imgObj => imgObj.relativeDirectory === album && !imgObj.originalName.includes('img-0'))} />
                        }
                    </Tab>
                ))}
            </Tabs>}
        </Layout>
    )
}

export default Portofolio;