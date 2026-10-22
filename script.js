const steps = {
    "paper-use": {
        title: "Step 1: Reduce Paper Usage",
        paragraphs: [
            "Making less paper waste means fewer trees need to be cut down and less energy is used to make and transport paper."
        ],
        tips: [
            "Read and share documents digitally when you can.",
            "Choose electronic bills, statements, and receipts.",
            "If you need to print, use both sides of the page and print only what you need."
        ]
    },
    "recycle-paper": {
        title: "Step 2: Recycle Paper",
        image: "paper.jpg",
        imageAlt: "Paper ready to be recycled",
        paragraphs: [
            "Recycling gives used paper another purpose and reduces the amount of new material needed. Check your local recycling rules, since accepted items can vary."
        ],
        tips: [
            "Recycle clean paper, newspapers, and cardboard if your local program accepts them.",
            "Keep paper recycling dry and free of food or grease.",
            "Reuse the blank side of sheets for notes before recycling them."
        ]
    },
    "plant-trees": {
        title: "Step 3: Plant Trees",
        image: "treeplant.jpg.jpg",
        imageAlt: "A person planting a young tree",
        paragraphs: [
            "Trees provide habitat, shade, and cleaner air. Planting the right tree in the right place helps it thrive for years."
        ],
        tips: [
            "Look for a local community planting event or tree-planting group.",
            "Choose a tree suited to your climate and available space.",
            "Ask for permission before planting on property you do not own, and follow care instructions for watering."
        ]
    }
};

const stepList = document.querySelector("#step-list");
const detailScreen = document.querySelector("#step-detail");
const detailTitle = document.querySelector("#detail-title");
const detailContent = document.querySelector("#detail-content");
const backButton = document.querySelector("#back-button");

function showStep(stepId) {
    const step = steps[stepId];
    if (!step) {
        return;
    }

    detailTitle.textContent = step.title;
    detailContent.replaceChildren();

    if (step.image) {
        const image = document.createElement("img");
        image.src = step.image;
        image.alt = step.imageAlt;
        image.className = "detail-image";
        detailContent.append(image);
    }

    step.paragraphs.forEach((text) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        detailContent.append(paragraph);
    });

    const tipsHeading = document.createElement("h2");
    tipsHeading.textContent = "What you can do";
    detailContent.append(tipsHeading);

    const tipsList = document.createElement("ul");
    step.tips.forEach((tip) => {
        const item = document.createElement("li");
        item.textContent = tip;
        tipsList.append(item);
    });
    detailContent.append(tipsList);

    stepList.hidden = true;
    detailScreen.hidden = false;
    backButton.focus();
}

document.querySelectorAll(".step").forEach((button) => {
    button.addEventListener("click", () => showStep(button.dataset.step));
});

backButton.addEventListener("click", () => {
    detailScreen.hidden = true;
    stepList.hidden = false;
    stepList.querySelector("button").focus();
});