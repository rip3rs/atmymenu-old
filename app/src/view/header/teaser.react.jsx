/**
 * Teaser section
 * Teaser
 */

//TODO: add altImage to have restaurant title.
import React, { Component } from 'react';

module.exports = class Teaser extends Component {
  constructor() {
    super();
    this.state = {
      mobileImage: '../../../uploads/placeholder_425x239.jpg',
      tabletImage: '../../../uploads/placeholder_768x432.jpg',
      laptopImage: '../../../uploads/placeholder_1024x576.jpg',
      desktopImage: '../../../uploads/placeholder_1080x607.jpg',
      altImage: 'For now its this... This will be the title of the page',
    };
  }

  render() {
    const srcImage = this.state.desktopImage;
    const srcSetImages =
      `${this.state.mobileImage} 425w,
       ${this.state.tabletImage} 768w,
       ${this.state.laptopImage} 1024w,
       ${this.state.desktopImage} 1440w`;
    const altImage = this.state.altImage;

    return (
      <div className="teaser--container">
        <img  src={srcImage}
              srcSet={srcSetImages}
              alt={altImage} />
      </div>
    );
  }
};
