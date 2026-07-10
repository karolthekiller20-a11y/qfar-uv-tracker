const container = document.getElementById("curriculum");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

let approved = 0;
let total = 0;

function updateProgress() {
    const percentage = (approved / total) * 100;

    progressBar.style.width = percentage + "%";
    progressText.textContent = `${approved} / ${total} ramos aprobados`;
}

semesters.forEach(semester => {

    const column = document.createElement("div");
    column.className = "semester";

    const title = document.createElement("h3");
    title.textContent = semester.label;

    column.appendChild(title);

    semester.courses.forEach(course => {

        total++;

        const card = document.createElement("div");

        card.className =
            course.prerequisites.length === 0
            ? "course available"
            : "course blocked";

        card.innerHTML = `
            <h4>${course.code}</h4>
            <h2>${course.name}</h2>
        `;

        card.addEventListener("click", () => {

            if(card.classList.contains("blocked")) return;

            if(card.classList.contains("approved")){
                card.classList.remove("approved");
                card.classList.add("available");
                approved--;
            }else{
                card.classList.remove("available");
                card.classList.add("approved");
                approved++;
            }

            updateProgress();

        });

        column.appendChild(card);

    });

    container.appendChild(column);

});

updateProgress();
