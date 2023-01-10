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

    // Generamos aleatoriamente la orientación de cada barco
    const shipOrientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    // const orientation2 = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    // const orientation3 = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    // const orientation4 = Math.random() < 0.5 ? 'horizontal' : 'vertical';

    // Comprobamos que la orientación de cada barco no se sale de la rejilla
    const checkOrientation = (orientation, length, row, col) => {
        if (orientation === 'horizontal') {
            if (col + length > width) {
                return 'vertical';
            }
        } else {
            if (row + length > height) {
                return 'horizontal';
            }
        }
        return orientation;
    }

    // Comprobamos si hay espacio suficiente en la rejilla para colocar el barco y además entre barco y barco tiene que haber una separación de una casilla
    const checkSpace = (orientation, length, row, col) => {
        let flag = true;
        if (orientation === 'horizontal') {
            if (col + length > width) {
                flag = false;
            }
            else{
                for (let i = -1; i < length+1; i++) {
                    for(let j = -1; j <=1; j++) {
                        if (row + j >= 0 && row + j < height && col + i >= 0 && col + i < width ) {
                            if (grid[row + j].props.children[col + i].props.className === 'RejillaRectangulo barco') {
                                flag = false;
                            }
                        }
                    }
                }
            }
        } 
        else {
            if (row + length > height) {
                flag = false;
            }
            else{
                for (let i = -1; i < length+1; i++) {
                    for(let j = -1; j <=1; j++) {
                        if (row + i >= 0 && row + i < height && col + j >= 0 && col + j < width ) {
                            if (grid[row + i].props.children[col + j].props.className === 'RejillaRectangulo barco') {
                                flag = false;
                            }
                        }
                    }
                }
            }
        }
        return flag;
    }

    // Colocamos 2 barcos con dimension 3x1; 1 barco con dimension 4x1; y 1 barco con dimension 5x1
    let row = Math.floor(Math.random() * height);
    let col = Math.floor(Math.random() * width);
    let orientation = checkOrientation(shipOrientation, 3, row, col);
    if (checkSpace(orientation, 3, row, col)) {
        if (orientation === 'horizontal') {
            for (let i = 0; i < 3; i++) {
                grid[row].props.children[col + i] = <div key={`${row}-${col + i}`} className="RejillaRectangulo barco"></div>;
            }
        } else {
            for (let i = 0; i < 3; i++) {
                grid[row + i].props.children[col] = <div key={`${row + i}-${col}`} className="RejillaRectangulo barco"></div>;
            }
        }
    }

    row = Math.floor(Math.random() * height);
    col = Math.floor(Math.random() * width);
    orientation = checkOrientation(shipOrientation, 3, row, col);
    if (checkSpace(orientation, 3, row, col)) {
        if (orientation === 'horizontal') {
            for (let i = 0; i < 3; i++) {
                grid[row].props.children[col + i] = <div key={`${row}-${col + i}`} className="RejillaRectangulo barco"></div>;
            }
        } else {
            for (let i = 0; i < 3; i++) {
                grid[row + i].props.children[col] = <div key={`${row + i}-${col}`} className="RejillaRectangulo barco"></div>;
            }
        }
    }

    row = Math.floor(Math.random() * height);
    col = Math.floor(Math.random() * width);
    orientation = checkOrientation(shipOrientation, 4, row, col);
    if (checkSpace(orientation, 4, row, col)) {
        if (orientation === 'horizontal') {
            for (let i = 0; i < 4; i++) {
                grid[row].props.children[col + i] = <div key={`${row}-${col + i}`} className="RejillaRectangulo barco" ></div >;
            }
        } else {
            for (let i = 0; i < 4; i++) {
                grid[row + i].props.children[col] = <div key={`${row + i}-${col}`} className="RejillaRectangulo barco" ></div >;
            }
        }
    }

    row = Math.floor(Math.random() * height);
    col = Math.floor(Math.random() * width);
    orientation = checkOrientation(shipOrientation, 5, row, col);
    if (checkSpace(orientation, 5, row, col)) {
        if (orientation === 'horizontal') {
            for (let i = 0; i < 5; i++) {
                grid[row].props.children[col + i] = <div key={`${row}-${col + i}`} className="RejillaRectangulo barco" ></div >;
            }
        } else {
            for (let i = 0; i < 5; i++) {
                grid[row + i].props.children[col] = <div key={`${row + i}-${col}`} className="RejillaRectangulo barco" ></div >;
            }
        }
    }


    

    // const ships = [{ size: 3, count: 2 }, { size: 4, count: 1 }, { size: 5, count: 1 }];

    // ships.forEach(ship => {
    //     for (let i = 0; i < ship.count; i++) {
    //         let row, col, orientation;
    //         do {
    //             row = Math.floor(Math.random() * height);
    //             col = Math.floor(Math.random() * width);
    //             orientation = checkOrientation(shipOrientation, ship.size, row, col);
    //         } while (!checkSpace(orientation, ship.size, row, col));

    //         for (let j = 0; j < ship.size; j++) {
    //             if (orientation === 'horizontal') {
    //                 grid[row].props.children[col + j] = <div key={`${row}-${col + j}`} className="RejillaRectangulo barco"></div>;
    //             } else {
    //                 grid[row + j].props.children[col] = <div key={`${row + j}-${col}`} className="RejillaRectangulo barco"></div>;
    //             }
    //         }
    //     }
    // });

    // return grid;

    // Entre barco y barco, tiene que haber una separación
    // const checkSpace = (orientation, length, row, col) => {
    //     if (orientation === 'horizontal') {
    //         for (let i = 0; i < length; i++) {
    //             if (grid[row].props.children[col + i].props.className === 'RejillaRectangulo barco') {

    //                 return false;
    //             }
    //         }
    //     } else {
    //         for (let i = 0; i < length; i++) {
    //             if (grid[row + i].props.children[col].props.className === 'RejillaRectangulo barco') {
    //                 return false;

    //             }
    //         }
    //     }
    //     return true;



    // Si el usuario clica sobre una porcion del barco, esa casilla se pone en color verde.
    // Si el usuario completa un barco, los colores de esas casillas se ponen en color rojo.
    // Si el usuario clica sobre una casilla vacia, esa casilla se pone en color azul.
    // const clickHandler = (e) => {
    //     if (e.target.className === 'RejillaRectangulo barco') {
    //         e.target.className = 'RejillaRectangulo BarcoSeleccionado';
    //         contador++;
    //     } else if (e.target.className === 'RejillaRectangulo BarcoSeleccionado') {
    //         e.target.className = 'RejillaRectangulo barco';
    //         contador--;
    //     } else if (e.target.className === 'RejillaRectangulo BarcoCompleto') {
    //         e.target.className = 'RejillaRectangulo BarcoCompletoSeleccionado';
    //         contador++;
    //     } else if (e.target.className === 'RejillaRectangulo BarcoCompletoSeleccionado') {
    //         e.target.className = 'RejillaRectangulo BarcoCompleto';
    //         contador--;
    //     } else if (e.target.className === 'RejillaRectangulo') {
    //         e.target.className = 'RejillaRectangulo seleccionado';
    //         contador++;
    //     } else if (e.target.className === 'RejillaRectangulo seleccionado') {
    //         e.target.className = 'RejillaRectangulo';
    //         contador--;
    //     }
    //     if (contador > (width * height) / 2) {
    //         alert('No puedes seleccionar mas casillas');
    //         contador--;
    //     }
    // }

    return (
        <div className="Rejilla">
            {grid}
        </div>
    );
}

export default Rejilla;