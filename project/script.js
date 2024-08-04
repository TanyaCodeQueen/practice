document.addEventListener("DOMContentLoaded", () => {

    let contractState = "Active";


    const updateContractState = () => {
        document.querySelector(".buttonActive").textContent = contractState;
    };


    const addEvent = (eventType) => {

        const eventsContainer = document.querySelector(".secondFooter .date");
        const newEvent = document.createElement("div");
        newEvent.className = "date2";
        const currentDate = new Date().toLocaleString();
        newEvent.innerHTML = `<span class="Date2">${currentDate}</span><span class="${eventType.replace(" ", "").toLowerCase()}">${eventType}</span>`;
        eventsContainer.insertBefore(newEvent, eventsContainer.firstChild);
    };


    const editInfo = (infoElements) => {
        infoElements.forEach(element => {
            const newValue = prompt("Edit:", element.textContent);
            if (newValue !== null && newValue !== "") {
                element.textContent = newValue;
            }
        });
    };


    const showModal = (title, text) => {
        const modal = document.createElement("div");
        modal.className = "modal";
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.backgroundColor = "white";
        modal.style.padding = "20px";
        modal.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
        modal.style.zIndex = "1000";

        const modalTitle = document.createElement("h2");
        modalTitle.textContent = title;

        const modalText = document.createElement("p");
        modalText.textContent = text;

        const closeModal = document.createElement("button");
        closeModal.textContent = "Close";
        closeModal.onclick = () => {
            document.body.removeChild(modal);
        };

        modal.appendChild(modalTitle);
        modal.appendChild(modalText);
        modal.appendChild(closeModal);

        document.body.appendChild(modal);
    };


    document.querySelector(".green").onclick = () => {
        contractState = "Active";
        updateContractState();
        addEvent("Buy Now");
    };

    document.querySelector(".red").onclick = () => {
        contractState = "Closed";
        updateContractState();
        addEvent("Close Offer");
    };

    document.querySelector(".customer .edit").onclick = () => {
        const customerInfoElements = document.querySelectorAll(".customerInfo span");
        editInfo(customerInfoElements);
    };

    document.querySelector(".vehicle .editCar").onclick = () => {
        const vehicleInfoElements = document.querySelectorAll(".VehicleInfo span");
        editInfo(vehicleInfoElements);
    };





    document.querySelector(".firstButton").onclick = () => {
        showModal("General Information", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    };

    document.querySelector(".secondButton").onclick = () => {
        showModal("Statistics", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    };
});
