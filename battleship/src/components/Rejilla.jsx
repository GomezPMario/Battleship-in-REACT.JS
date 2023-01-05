import React from 'react';
import './styles/Rejilla.css';


const Rejilla = (props) => {
    let height = props.height;
    let width = props.width;

    if (height < 5) {
        height = 5;
    }
    if (width < 5) {
        width = 5;
    }

    let grid = [];

    for (let row = 0; row < height; row++) {
        let currentRow = [];
        for (let col = 0; col < width; col++) {
            currentRow.push(<div key={`${row}-${col}`} className="RejillaRectangulo"></div>);
        }
        grid.push(<div key={row} className="FilasRejilla">{currentRow}</div>);
    }

    return (
        <div className="Rejilla">
            {grid}
        </div>
    );
}

export default Rejilla;