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

    for (let i = 0; i < resolution * resolution; i++)
    {
        let div = document.createElement("div");
        div.classList.add("grid");
        container.append(div);
    }
});

change.dispatchEvent(new Event('click'));
