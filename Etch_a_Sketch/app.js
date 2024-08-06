const container = document.querySelector('#grid');
const rowjump = document.createElement('div');
const button = document.querySelector('button');

function createGrid(size) {

    for (let i = 0; i < size; i++) {

        const row = document.createElement('div');
        row.setAttribute('class', 'rows');

        for (let j = 0; j < size; j++) {
            const box = document.createElement('div');
            box.setAttribute('class', 'box');

            box.addEventListener('mousemove', () => {
                box.style.backgroundColor = `#1d3557`;
            })

            row.appendChild(box);

        }

        rowjump.appendChild(row);
    }
    container.appendChild(rowjump);
}

let size = 16;
createGrid(size);

button.addEventListener('click', () => 
{
    size = +prompt("Set the number of squares per side for the nee grid (MAX: 100x100)")
    if (size >= 0 && size <= 100) 
    {
        rowjump.textContent = '';
        createGrid(size);
    }
    else if (size > 100)
    {
        alert("Grid sizes is bigger than 100x100");
    }
    else if (size < 0)
    {
        alert("Grid size is lower than 0x0");
    }
    else
    {
        alert("Is not a number!");
    }
})


