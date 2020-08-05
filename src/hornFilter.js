import React from 'react';
import images from './data.js';
import { Options } from './options.js';
import { ImageItem } from './imageItem.js';
import './imageFilter.css';

export class HornFilter extends React.Component {
    state = { selected: null };
  
    handleChange = (e) => {
        this.setState({ selected: e.target.value });
    };

    
    render() {

        return (
            <div>
                Pick A Horned Creature by <span className='bold'>Their Number of Horns</span> Below!
                <select onChange={this.handleChange}>
                        {images.map((creature) => <Options key={creature.title} title={creature.horns} />)}
                </select>
                <ul>
                {
                    images.filter(creature => {
                        return creature.horns === this.state.selected;
                    })
                        .map((creature) => <ImageItem key={creature.title} title={creature.title} image={creature.url} description={creature.description} />)      
                }
            </ul>
            </div>
        )
    }
}