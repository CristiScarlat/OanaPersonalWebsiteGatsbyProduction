import React from 'react';
import Layout from '../components/layout';
import InterviewMovie from '../assets/a.mp4';
import HypnoticVideo from '../assets/Hypnotic.mp4';
import './css/media.css';


const Media = () => {

    return (
        <Layout>
            <h1 className="p-2">Media</h1>
            <div className="video-container p-2">
                <video width="400" controls>
                    <source src={InterviewMovie} type="video/mp4" />
                </video>
                <video width="400" controls>
                    <source src={HypnoticVideo} type="video/mp4" />
                </video>
            </div>
        </Layout>
    )
}

export default Media;