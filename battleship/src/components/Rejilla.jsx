import React from 'react';
import './styles/Rejilla.css';

let contador = 0;
let canPlay = true;

const Rejilla = (props) => {

    let height = props.height;
    let width = props.width;

    if (height < 5) {
        height = 5;
    }
    if (width < 5) {
        width = 5;
    }

    contador = ((height * width) / 2).toFixed();
    let contadortext = 'Le quedan ' + contador + ' intentos';
    if (document.getElementById('mostrarContador')) {
        document.getElementById('mostrarContador').innerHTML = contadortext;
    }

    let grid = [];

    for (let row = 0; row < height; row++) {
        let currentRow = [];
        for (let col = 0; col < width; col++) {
            // Celdas de agua
            currentRow.push(<div key={`${row}-${col}`} id={`cell-${row}-${col}`} className="RejillaRectangulo" onClick={(e) => checkCell(e)}></div>);
        }
        grid.push(<div key={row} className="FilasRejilla">{currentRow}</div>);
    }

    // Generamos aleatoriamente la orientación de cada barco
    const shipOrientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';

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
            else {
                for (let i = -1; i < length + 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        if (row + j >= 0 && row + j < height && col + i >= 0 && col + i < width) {
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
            else {
                for (let i = -1; i < length + 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        if (row + i >= 0 && row + i < height && col + j >= 0 && col + j < width) {
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
    let orientation = checkOrientation(shipOrientation, 5, row, col);
    if (checkSpace(orientation, 5, row, col)) {
        if (orientation === 'horizontal') {
            for (let i = 0; i < 5; i++) {
                grid[row].props.children[col + i] = <div key={`${row}-${col + i}`} id={`cell-${row}-${col + i}`} className="RejillaRectangulo barco" onClick={(e) => checkCell(e)}></div>;
            }
        } else {
            for (let i = 0; i < 5; i++) {
                grid[row + i].props.children[col] = <div key={`${row + i}-${col}`} id={`cell-${row + i}-${col}`} className="RejillaRectangulo barco" onClick={(e) => checkCell(e)}></div>;
            }
        }
    }

    row = Math.floor(Math.random() * height);
    col = Math.floor(Math.random() * width);
    orientation = checkOrientation(shipOrientation, 4, row, col);
    if (checkSpace(orientation, 4, row, col)) {
        if (orientation === 'horizontal') {
            for (let i = 0; i < 4; i++) {
                grid[row].props.children[col + i] = <div key={`${row}-${col + i}`} id={`cell-${row}-${col + i}`} className="RejillaRectangulo barco" onClick={(e) => checkCell(e)}></div>;
            }
        } else {
            for (let i = 0; i < 4; i++) {
                grid[row + i].props.children[col] = <div key={`${row + i}-${col}`} id={`cell-${row + i}-${col}`} className="RejillaRectangulo barco" onClick={(e) => checkCell(e)}></div>;
            }
        }
    }

    row = Math.floor(Math.random() * height);
    col = Math.floor(Math.random() * width);
    orientation = checkOrientation(shipOrientation, 3, row, col);
    if (checkSpace(orientation, 3, row, col)) {
        if (orientation === 'horizontal') {
            for (let i = 0; i < 3; i++) {
                grid[row].props.children[col + i] = <div key={`${row}-${col + i}`} id={`cell-${row}-${col + i}`} className="RejillaRectangulo barco" onClick={(e) => checkCell(e)}></div >;
            }
        } else {
            for (let i = 0; i < 3; i++) {
                grid[row + i].props.children[col] = <div key={`${row + i}-${col}`} id={`cell-${row + i}-${col}`} className="RejillaRectangulo barco" onClick={(e) => checkCell(e)}></div >;
            }
        }
    }

    row = Math.floor(Math.random() * height);
    col = Math.floor(Math.random() * width);
    orientation = checkOrientation(shipOrientation, 3, row, col);
    if (checkSpace(orientation, 3, row, col)) {
        if (orientation === 'horizontal') {
            for (let i = 0; i < 3; i++) {
                grid[row].props.children[col + i] = <div key={`${row}-${col + i}`} id={`cell-${row}-${col + i}`} className="RejillaRectangulo barco" onClick={(e) => checkCell(e)}></div >;
            }
        } else {
            for (let i = 0; i < 3; i++) {
                grid[row + i].props.children[col] = <div key={`${row + i}-${col}`} id={`cell-${row + i}-${col}`} className="RejillaRectangulo barco" onClick={(e) => checkCell(e)}></div >;
            }
        }
    }

    const checkCell = (e) => {
        let id = e.target.id;
        let coordinates = id.split("-");
        let row = coordinates[1];
        let col = coordinates[2];

        if(canPlay === true){
            if (contador < 1) {
                alert('No puede seleccionar mas casillas');
            } else {
                if (grid[row].props.children[col].props.className === 'RejillaRectangulo') {
                    document.getElementById('cell-' + row + "-" + col).classList.add("agua");
                    contador--;
                    document.getElementById('mostrarContador').innerHTML = `Le quedan ${contador} intentos`;
                } else if (grid[row].props.children[col].props.className === 'RejillaRectangulo barco') {
                    document.getElementById('cell-' + row + "-" + col).classList.remove("barco");
                    document.getElementById('cell-' + row + "-" + col).classList.add("seleccionado");
                    contador--;
                    document.getElementById('mostrarContador').innerHTML = `Le quedan ${contador} intentos`;
                }    
            }
        }
        checkShipState(e);
    }


    const checkShipState = (e) => {
        var anyShipUntouched = false;

        var childNodeElements = document.getElementsByClassName('Rejilla')[0].childNodes;
        for (let i = 0; i < childNodeElements.length; i++) {
            if (childNodeElements[i].className === "FilasRejilla") {
                var cellsNodeElements = childNodeElements[i].childNodes;
                for (let j = 0; j < cellsNodeElements.length; j++) {
                    if (childNodeElements[i].childNodes[j].className === "RejillaRectangulo barco") {
                        anyShipUntouched = true;
                    }
                }
            }
        }

        if (!anyShipUntouched && canPlay === true) {
            alert("Has ganado la partida");
            canPlay = false;
        }
    }

    return (
        <div className="Rejilla">
            {/* Le decimos al usuario el numero de clicks disponibles */}
            <span id='mostrarContador'>{contadortext}</span>
                {grid}
        </div>
    );
}

export default Rejilla;