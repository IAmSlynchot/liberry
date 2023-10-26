import React, { useState } from 'react';
import InfoPanel from './info-panel';
import Image from 'next/image';
import styles from '../styles/gallery.module.css';


class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            infoPanelVisible: false,
            photos: props.photoData,
            selectedPhotoInfo: {}
        }

        this.toggleInfoPanel = this.toggleInfoPanel.bind(this);
        this.openInfoPanel = this.openInfoPanel.bind(this);
        this.closeInfoPanel = this.closeInfoPanel.bind(this);
    }

    toggleInfoPanel(photoData) {
        this.setState(state => ({
            infoPanelVisible: !state.infoPanelVisible,
            selectedPhotoInfo: photoData
        }));
    }

    openInfoPanel(photoData) {
        this.setState({
            infoPanelVisible: true,
            selectedPhotoInfo: photoData
        });
    }

    closeInfoPanel() {
        this.setState({
            infoPanelVisible: false
        });
    }

    render() {
        return (
            <div className={styles.galleryContainer}> 
                {/* {this.state.infoPanelVisible ? <InfoPanel /> : null} */}
                <InfoPanel 
                visibility={this.state.infoPanelVisible} 
                toggle={this.closeInfoPanel}
                selectedPhotoInfo={this.state.selectedPhotoInfo}
                />
                { this.state.photos.map((pic) => (
                    <div className={styles.photoWrapper} key={pic.id}>
                        <Image
                        className={styles.galleryPhoto}
                        src={pic.src.portrait} 
                        width="400" 
                        height="600"
                        alt={pic.url}
                        onClick={() => (this.openInfoPanel(pic))}
                        />
                    </div>
                ))} 
            </div> 
        );
    }
}

export default Gallery;