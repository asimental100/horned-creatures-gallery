import React from 'react';
import images from './data.js';
import { Options } from './options.js';
import { ImageItem } from './imageItem.js';
import './imageFilter.css';

export class FoodFilter extends React.Component {
    state = { selected: null };
  
    handleChange = (e) => {
        this.setState({ selected: e.target.value });
    };

    
    render() {

        return (
            <div>
                Pick A Horned Creature by <span className='bold'>Their Favorite Food</span> Below!
                <select onChange={this.handleChange}>
                        {images.map((creature) => <Options key={creature.title} title={creature.favoriteFood} />)}
                </select>
                <ul>
                {
                    images.filter(creature => {
                        return creature.favoriteFood === this.state.selected;
                    })
                        .map((creature) => <ImageItem key={creature.title} title={creature.title} image={creature.url} description={creature.description} />)      
                }
            </ul>
            </div>
        )
    }
}