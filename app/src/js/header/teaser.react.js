/**
 * Header section
 * Teaser
 */

import React from 'react';
import ReactDOM from 'react-dom';

module.exports = class Header extends React.Component {
    constructor() {
        super();
        this.state = {
             srcImage: 'http://placehold.it/1080x512'
        }
    }

    render() {
        let srcImage = this.state.srcImage;

        return (
            <div className="teaser--container">
                <img src={srcImage} />
            </div>
        );
    }
}
