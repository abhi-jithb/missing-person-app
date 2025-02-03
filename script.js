// Get form and list container
const form = document.getElementById("missingForm");
const missingList = document.getElementById("missingList");


// Handle form submission
form.addEventListener("submit", function (event) {


    event.preventDefault(); //browser reload deny

    // Get input values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;

    // Create missing person card
    const card = document.createElement("div");
    card.classList.add("missing-card");

    card.innerHTML = `
        <img src="${image}" alt="${name}">
        <div>
            <h3>${name} (Age: ${age})</h3>
            <p>${description}</p>
        </div>
    `;

    // Append to list
    missingList.appendChild(card);

    // Clear form fields
    form.reset();
});
     