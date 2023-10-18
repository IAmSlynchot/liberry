import React, { useState } from 'react';
import styles from '../styles/gallery.module.css';

class InfoPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.visibility) return;
        else return (
            <div className={styles.overlay} onClick={this.props.toggle}>
                <div className={styles.infoPanel}>
                    <h2>Eyy look at me I'm a panel</h2>
                </div>
            </div>
        );
    }
}

export default InfoPanel;