import React from 'react';
import Layout from '../components/layout';
import './css/media.css';


const Media = () => {
    return (
        <Layout>
            <h1 className="p-2">Media</h1>
            <div className="video-container p-2">
                <video width="400" controls>
                    <source src={process.env.GATSBY_MEDIA_1_URL} type="video/mp4" />
                </video>
                <video width="400" controls>
                    <source src={process.env.GATSBY_MEDIA_2_URL} type="video/mp4" />
                </video>
            </div>
        </Layout>
    )
}

export default Media;