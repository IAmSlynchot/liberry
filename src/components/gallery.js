import React, { useState } from 'react';
import InfoPanel from './info-panel';
import Image from 'next/image';
import styles from '../styles/gallery.module.css';


const Gallery = (props) => {

    const [showInfoPanel, setShowInfoPanel] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState({});

    const openInfoPanel = ((photo) => {
        setShowInfoPanel(true);
        setSelectedPhoto(photo);
    });

    const closeInfoPanel = (() => {
        setShowInfoPanel(false);
        // TODO call handler to pass updated props up to parent
        setSelectedPhoto({});
    });

    return (
        <div key={props.photoData} className={styles.galleryContainer}> 
            <InfoPanel 
            visibility={showInfoPanel} 
            toggle={closeInfoPanel}
            selectedPhotoInfo={selectedPhoto}
            />
            { props.photoData.map((pic) => (
                <div className={styles.photoWrapper} key={pic.id}>
                    <Image
                    className={styles.galleryPhoto}
                    src={pic.image} 
                    width="400" 
                    height="600"
                    alt={pic.description}
                    onClick={() => (openInfoPanel(pic))}
                    />
                </div>
            ))} 
        </div> 
    );
};

export default Gallery;