import React, { useState } from 'react';
import styles from '../styles/gallery.module.css';
import Image from 'next/image';

const InfoPanel = (props) => {

    if (!props.visibility) return;
    else return (
        <div className={styles.overlay} onClick={props.toggle}>
            <div className={styles.infoPanel}>
                <h2>{"Eyy look at me I'm a panel"}</h2>
                <Image
                    className={styles.galleryPhoto}
                    src={props.selectedPhotoInfo.image} 
                    width="280" 
                    height="200"
                    alt={props.selectedPhotoInfo.description}
                />
                <h2>Name: {props.selectedPhotoInfo.name}</h2>
            </div>
        </div>
    );
}

export default InfoPanel;