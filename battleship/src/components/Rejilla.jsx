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
    const orientation1 = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    const orientation2 = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    const orientation3 = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    const orientation4 = Math.random() < 0.5 ? 'horizontal' : 'vertical';

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
        if (orientation === 'horizontal') {
            for (let i = 0; i < length; i++) {
                if (grid[row].props.children[col + i].props.className === 'RejillaRectangulo barco') {
                    return false;
                }
                if (row - 1 >= 0) {
                    if (grid[row - 1].props.children[col + i].props.className === 'RejillaRectangulo barco') {
                        return false;
                    }
                    if (col + i - 1 >= 0) {
                        if (grid[row - 1].props.children[col + i - 1].props.className === 'RejillaRectangulo barco') {
                            return false;
                        }
                    }
                    if (col + i + 1 < width) {
                        if (grid[row - 1].props.children[col + i + 1].props.className === 'RejillaRectangulo barco') {
                            return false;
                        }
                    }
                }
                if (row + 1 < height) {
                    if (grid[row + 1].props.children[col + i].props.className === 'RejillaRectangulo barco') {
                        return false;
                    }
                    if (col + i - 1 >= 0) {
                        if (grid[row + 1].props.children[col + i - 1].props.className === 'RejillaRectangulo barco') {
                            return false;
                        }
                    }
                    if (col + i + 1 < width) {
                        if (grid[row + 1].props.children[col + i + 1].props.className === 'RejillaRectangulo barco') {
                            return false;
                        }
                    }
                }

                if (col + i - 1 >= 0) {
                    if (grid[row].props.children[col + i - 1].props.className === 'RejillaRectangulo barco') {
                        return false;
                    }
                }

                if (col + i + 1 < width) {
                    if (grid[row].props.children[col + i + 1].props.className === 'RejillaRectangulo barco') {
                        return false;
                    }
                }
            }
        } else {
            for (let i = 0; i < length; i++) {
                if (grid[row + i].props.children[col].props.className === 'RejillaRectangulo barco') {
                    return false;
                }
                if (col - 1 >= 0) {
                    if (grid[row + i].props.children[col - 1].props.className === 'RejillaRectangulo barco') {
                        return false;
                    }
                    if (row + i - 1 >= 0) {
                        if (grid[row + i - 1].props.children[col - 1].props.className === 'RejillaRectangulo barco') {
                            return false;
                        }
                    }
                    if (row + i + 1 < height) {
                        if (grid[row + i + 1].props.children[col - 1].props.className === 'RejillaRectangulo barco') {
                            return false;
                        }
                    }
                }
                if (col + 1 < width) {
                    if (grid[row + i].props.children[col + 1].props.className === 'RejillaRectangulo barco') {
                        return false;
                    }
                    if (row + i - 1 >= 0) {
                        if (grid[row + i - 1].props.children[col + 1].props.className === 'RejillaRectangulo barco') {
                            return false;
                        }
                    }
                    if (row + i + 1 < height) {
                        if (grid[row + i + 1].props.children[col + 1].props.className === 'RejillaRectangulo barco') {
                            return false;
                        }
                    }
                }
                if (row + i - 1 >= 0) {
                    if (grid[row + i - 1].props.children[col].props.className === 'RejillaRectangulo barco') {
                        return false;
                    }
                }
                if (row + i + 1 < height) {
                    if (grid[row + i + 1].props.children[col].props.className === 'RejillaRectangulo barco') {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    // // Colocamos 2 barcos con dimension 3x1; 1 barco con dimension 4x1; y 1 barco con dimension 5x1
    // let row = Math.floor(Math.random() * height);
    // let col = Math.floor(Math.random() * width);
    // let orientation = checkOrientation(orientation1, 3, row, col);
    // if (checkSpace(orientation, 3, row, col)) {
    //     if (orientation === 'horizontal') {
    //         for (let i = 0; i < 3; i++) {
    //             grid[row].props.children[col + i] = <div key={`${row}-${col + i}`} className="RejillaRectangulo barco"></div>;
    //         }
    //     } else {
    //         for (let i = 0; i < 3; i++) {
    //             grid[row + i].props.children[col] = <div key={`${row + i}-${col}`} className="RejillaRectangulo barco"></div>;
    //         }
    //     }
    // }

    // row = Math.floor(Math.random() * height);
    // col = Math.floor(Math.random() * width);
    // orientation = checkOrientation(orientation2, 3, row, col);
    // if (checkSpace(orientation, 3, row, col)) {
    //     if (orientation === 'horizontal') {
    //         for (let i = 0; i < 3; i++) {
    //             grid[row].props.children[col + i] = <div key={`${row}-${col + i}`} className="RejillaRectangulo barco"></div>;
    //         }
    //     } else {
    //         for (let i = 0; i < 3; i++) {
    //             grid[row + i].props.children[col] = <div key={`${row + i}-${col}`} className="RejillaRectangulo barco"></div>;
    //         }
    //     }
    // }

    // row = Math.floor(Math.random() * height);
    // col = Math.floor(Math.random() * width);
    // orientation = checkOrientation(orientation3, 4, row, col);
    // if (checkSpace(orientation, 4, row, col)) {
    //     if (orientation === 'horizontal') {
    //         for (let i = 0; i < 4; i++) {
    //             grid[row].props.children[col + i] = <div key={`${row}-${col + i}`} className="RejillaRectangulo barco" ></div >;
    //         }
    //     } else {
    //         for (let i = 0; i < 4; i++) {
    //             grid[row + i].props.children[col] = <div key={`${row + i}-${col}`} className="RejillaRectangulo barco" ></div >;
    //         }
    //     }
    // }

    // row = Math.floor(Math.random() * height);
    // col = Math.floor(Math.random() * width);
    // orientation = checkOrientation(orientation3, 5, row, col);
    // if (checkSpace(orientation, 5, row, col)) {
    //     if (orientation === 'horizontal') {
    //         for (let i = 0; i < 5; i++) {
    //             grid[row].props.children[col + i] = <div key={`${row}-${col + i}`} className="RejillaRectangulo barco" ></div >;
    //         }
    //     } else {
    //         for (let i = 0; i < 5; i++) {
    //             grid[row + i].props.children[col] = <div key={`${row + i}-${col}`} className="RejillaRectangulo barco" ></div >;
    //         }
    //     }
    // }
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