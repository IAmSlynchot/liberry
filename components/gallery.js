import React, { useState } from 'react';
import InfoPanel from '../components/info-panel';
import Image from 'next/image';
import styles from '../styles/gallery.module.css';


export default class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            infoPanelVisible: false,
            photos: props.photoData 
        }

        this.toggleInfoPanel = this.toggleInfoPanel.bind(this);
    }

    toggleInfoPanel() {
        this.setState(state => {
            infoPanelVisible: !state.infoPanelVisible
        });
    }

    render() {
        return (
            <div className={styles.galleryContainer}> 
                {this.state.infoPanelVisible ? <InfoPanel /> : null}
                { this.state.photos.map((pic) => (
                    <div className={styles.photoWrapper} key={pic.id}>
                        <Image
                        className={styles.galleryPhoto}
                        src={pic.src.portrait} 
                        width="400" 
                        height="600"
                        alt={pic.url}  />
                    </div>
                ))} 
            </div> 
        );
    }
}