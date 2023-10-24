import React, { useState } from 'react';
import styles from '../styles/gallery.module.css';
import Image from 'next/image';

class InfoPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Photo info: ");
        console.log(this.props.selectedPhotoInfo)
        if (!this.props.visibility) return;
        else return (
            <div className={styles.overlay} onClick={this.props.toggle}>
                <div className={styles.infoPanel}>
                    <h2>{"Eyy look at me I'm a panel"}</h2>
                    <Image
                        className={styles.galleryPhoto}
                        src={this.props.selectedPhotoInfo.src.tiny} 
                        width="280" 
                        height="200"
                        alt={this.props.selectedPhotoInfo.url}
                    />
                    <h2>Photographer: {this.props.selectedPhotoInfo.photographer}</h2>
                </div>
            </div>
        );
    }
}

export default InfoPanel;