import React, { useState } from 'react';
import Rejilla from './Rejilla';

const CrearRejilla = () => {
    const [height, setHeight] = useState(5);
    const [width, setWidth] = useState(5);
    const [grid, setGrid] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsPlaying(true);
        setGrid(<Rejilla width={width} height={height} />);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="widht">Anchura:</label>
                <input
                    type="number"
                    id="widht"
                    name="widht"
                    min={5}
                    value={width}
                    onChange={(event) => setWidth(event.target.value)}
                />
                <br />
                <label htmlFor="height">Altura:</label>
                <input
                    type="number"
                    id="height"
                    name="height"
                    min={5}
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                />
                <br />
                <button type="submit">Crear cuadrícula</button>
            </form>
            <br />
            <div id='gridContainer'>
                {grid}
            </div>
        </div>
    );
}

export default CrearRejilla;