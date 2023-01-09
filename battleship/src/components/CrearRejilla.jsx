import React, { useState } from 'react';
import Rejilla from './Rejilla';


const CrearRejilla = () => {
    const [height, setHeight] = useState(5);
    const [width, setWidth] = useState(5);
    const [grid, setGrid] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // setGrid(<Rejilla width={width} height={height} />);
        setGrid(Rejilla({width, height}));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="width">Anchura:</label>
                <input
                    type="number"
                    id="width"
                    name="width"
                    min={5}
                    value={width}
                    onChange={(event) => setWidth(event.target.value)}
                />
                <br />
                <button type="submit">Crear cuadrícula</button>
            </form>
            {grid}
        </div>
    );
}

export default CrearRejilla;