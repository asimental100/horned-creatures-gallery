import React from 'react';
import './imageList.css';
import images from './data.js';
import { ImageItem } from './imageItem.js';

export class ImageList extends React.Component {    
    render() {
        return (
            <div>
                <h3> Here Are All of the Horned Creatures! </h3>
                <p> Down Under you can filter the Creatures! </p>
                <ul className="image-list">
            {
                images.map((creature) => <ImageItem key={creature.title} title={creature.title} image={creature.url} description={creature.description} />)
            }
                </ul>
            </div>
        )
    }
}