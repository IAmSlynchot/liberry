import React, { useState } from 'react';

export default class InfoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    render() {
        return (
            <div className="infoPanel">
                <h2>Eyy look at me I'm a panel</h2>
            </div>
        );
    }
}