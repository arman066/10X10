const area = document.getElementById('area');
const cell = document.getElementsByClassName('cell');
const btn = document.getElementById('btn');
const n = document.getElementById('a1');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
    const count = parseInt(n.value);
    const cellcount = count*51.4;
    area.style.width=cellcount+"px";
    area.innerHTML = "";
    for(let i = 1; i <= count*count; i++) {
        area.innerHTML += "<div class='cell' pos=" + i + "></div>";
    }

    for(let i = 0; i < count*count; i+=count+1){
    cell[i].style.backgroundColor='green';
    }


    for (let i = 1; i <= count; i++) {
        cell[i * count - i].style.backgroundColor = 'red';
    }
});

