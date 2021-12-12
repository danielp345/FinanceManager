const incomeSection = document.querySelector(".income-area");
const expensesSection = document.querySelector(".expenses-area");
const availableMoney = document.querySelector(".available-moeny");
const addTransactionPanel = document.querySelector(".add-transaction-panel");

const nameInput = document.querySelector("#name");
const amountInput = document.querySelector("#amount");
const categoryInput = document.querySelector("#category");

const addTransactionBtn = document.querySelector(".add-transaction");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const deleteBtn = document.querySelector(".delete");
const deleteAllBtn = document.querySelector(".delete-all");
const lightStyleBtn = document.querySelector(".light");
const darkStyleBtn = document.querySelector(".dark");

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moenyArray = [0];

const showPanel = () => {
	addTransactionPanel.style.display = "flex";
};

const closePanel = () => {
	addTransactionPanel.style.display = "none";
	clearInputs();
};

const checkForm = () => {
	if (
		(nameInput.value !== "" && amountInput.value !== "",
		categoryInput.value !== "none")
	) {
		console.log("git");
	} else {
		alert("Wypełnij wszystkie pola");
	}
};

const clearInputs = () => {
	nameInput.value = "";
	amountInput.value = "";
	categoryInput.value = "none";
};

const createNewTransaction = () => {
	const newTransaction = document.createElement("div");
	newTransaction.classList.add("transaction");
	newTransaction.setAttribute("id", ID);

	newTransaction.innerHTML = `
    <p class="transaction-name"> ${categoryIcon} ${nameInput.value}</p>
    <div class="transaction-amount">${amountInput.value} zł<button class="delete" onclick="deleteTransaction(${ID})"><i
                class="fas fa-times"></i></button>
    `;
};

addTransactionBtn.addEventListener("click", showPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", checkForm);
