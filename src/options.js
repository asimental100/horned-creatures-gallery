import React from 'react';
import './imageItem.css';

export class Options extends React.Component {
    render() {
        return (
            <option>
                {this.props.title}
            </option>
        )
    }
}