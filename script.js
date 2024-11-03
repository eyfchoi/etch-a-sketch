let first = true;
let resolution = 16; // Default
let change = document.querySelector('#change');
let container = document.querySelector("#container");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

change.addEventListener('click', (e) => {

    while (container.firstChild)
    {
        container.removeChild(container.lastChild);
    }

    if (first)
        first = false;
    else
        resolution = Number(prompt("Please enter a Grid Resolution (Min = 1, Max = 100): "));

    let gridLength = String((container.clientHeight - 100) / resolution) + "px";

    for (let i = 0; i < resolution * resolution; i++)
    {
        if ((i % resolution) == 0)
        {
            let breaks = document.createElement("div");
            breaks.classList.add("break");
            container.append(breaks);
        }

        let div = document.createElement("div");
        div.classList.add("grid");
        div.style.width = div.style.height = gridLength;
        div.addEventListener('mouseenter', (e) => {e.target.style.backgroundColor = getRandomColor(); e.target.style.opacity -=  '-0.1'; console.log(e.target.style)});//  div.addEventListener('mouseover', (e) => {e.target.style.opacity += 0.1; });
        container.append(div);
    }
});

// container.addEventListener('mouseover', (e) => {
//     console.log(e);
// });

change.dispatchEvent(new Event('click'));