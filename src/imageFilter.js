import React from 'react';
import images from './data.js';
import { Options } from './options.js';
import { ImageItem } from './imageItem.js';
import './imageFilter.css';

export class ImageFilter extends React.Component {
    state = { selected: null };
  
    handleChange = (e) => {
        this.setState({ selected: e.target.value });
    };

    
    render() {

        return (
            <div>
                Pick A Horned Creature by <span className='bold'>Their Keyword</span> Below!
                <select onChange={this.handleChange}>
                        {images.map((creature) => <Options key={creature.title} title={creature.keyword} />)}
                </select>
                <ul>
                {
                    images.filter(creature => {
                        return creature.keyword === this.state.selected;
                    })
                        .map((creature) => <ImageItem key={creature.title} title={creature.title} image={creature.url} description={creature.description} />)      
                }
            </ul>
            </div>
        )
    }
}