let titleName = "Elzero", descriptionValue = "Elzero Web School", dateValue = "25/10";

let card = `
    <div class="card">
        <h3>Hello ${titleName}</h3>
        <p>${descriptionValue}</p>
        <span>${dateValue}</span>
    </div>
`;

// document.write(card);
// document.write(card);
// document.write(card);
// document.write(card);

let result = card.repeat(4);
document.write(result);