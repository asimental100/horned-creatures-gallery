import React from 'react';
import './header.css';
import images from './data.js';
import { ImageItem } from './imageItem.js';

export class ImageList extends React.Component {
    render() {
        return (
            
            <ul className="image-list">
          {
              images.map((creatue) => <ImageItem key={creatue.title} title={creatue.title} image={creatue.url} description={creatue.description} />)
          }
            </ul>
        )
    }
}