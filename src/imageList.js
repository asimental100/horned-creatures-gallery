import React from 'react';
import './imageList.css';
import images from './data.js';
import { ImageItem } from './imageItem.js';

export class ImageList extends React.Component {
    render() {
        return (
            
            <ul className="image-list">
          {
              images.map((creature) => <ImageItem key={creature.title} title={creature.title} image={creature.url} description={creature.description} />)
          }
            </ul>
        )
    }
}