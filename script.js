let first = true;
let resolution = 16; // Default
let change = document.querySelector('#change');
let container = document.querySelector("#container");

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
        container.append(div);
    }
});

change.dispatchEvent(new Event('click'));
