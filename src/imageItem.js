import React from 'react';
import './imageItem.css';

export class ImageItem extends React.Component {
    render() {
        return (
            <li className="image-item">
                {this.props.title}
                <img src={this.props.image} alt={this.props.alt}/>
                {this.props.description}
            </li>
        )
    }
}