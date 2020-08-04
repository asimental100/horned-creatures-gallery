import React from 'react';
import images from './data.js';
import { Options } from './options.js';
import './imageFilter.css';

export class ImageFilter extends React.Component {
    render() {
        return (
            <select>
                    {images.map((creature) => <Options title={creature.title} />)}
            </select>
        )
    }
}