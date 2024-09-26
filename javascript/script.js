
document.querySelectorAll('.toggle-btn-ementa').forEach(button => {
// Inicializa o estado do botão e da descrição
const description = button.nextElementSibling;
description.style.display = "none"; // Garante que a descrição comece oculta
button.textContent = "Ver ementa"; // Define o texto inicial do botão


    button.addEventListener('click', function() {
        const description = this.nextElementSibling;
        if (description.style.display === "none" || description.style.display === "") {
            description.style.display = "block";
            this.textContent = "Esconder ementa";
        } else {
            description.style.display = "none";
            this.textContent = "Ver ementa";
        }
    });
});


document.querySelectorAll('.toggle-btn-descricao').forEach(button => {
// Inicializa o estado do botão e da descrição
const description = button.nextElementSibling;
description.style.display = "none"; // Garante que a descrição comece oculta
button.textContent = "Ver Descrição"; // Define o texto inicial do botão

    button.addEventListener('click', function() {
        const description = this.nextElementSibling;
        if (description.style.display === "none" || description.style.display === "") {
            description.style.display = "block";
            this.textContent = "Esconder descrição";
        } else {
            description.style.display = "none";
            this.textContent = "Ver descrição";
        }
    });
});



function sortTable(n) {
    const table = document.getElementById("articlesTable");
    let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    switching = true;
    dir = "asc"; // Set the sorting direction to ascending

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dir === "asc") {
                if (n === 2 || n === 3) { // Sort by number (citations or year)
                    if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                } else { // Sort by text (title, journal)
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else if (dir === "desc") {
                if (n === 2 || n === 3) {
                    if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}