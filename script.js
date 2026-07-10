const container = document.getElementById("curriculum");

semesters.forEach(semester => {

    const column = document.createElement("div");
    column.className = "semester";

    const title = document.createElement("h3");
    title.textContent = semester.label;

    column.appendChild(title);

    semester.courses.forEach(course => {

        const card = document.createElement("div");

        card.className =
            course.prerequisites.length === 0
            ? "course available"
            : "course blocked";

        card.innerHTML = `
            <h4>${course.code}</h4>
            <h2>${course.name}</h2>
        `;

        column.appendChild(card);

    });

    container.appendChild(column);

});
