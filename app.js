let gridHome = document.getElementById('grid');
let columns = rows = 50;
let grid = function() {
    for (i = 0; i < columns * rows; i++){
        const gridBlock = document.createElement('div');
        gridBlock.setAttribute('class', 'block');
        gridHome.appendChild(gridBlock);
        gridBlock.addEventListener('mouseover', function(){
            gridBlock.style.backgroundColor = "black";
        })
        document.getElementById('button').addEventListener('click', function(){
            gridBlock.style.backgroundColor = "rgb(219, 205, 205)";
        })
    }
}
grid();
