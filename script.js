let balance = 0;

function deposit() {
        const amountInput = document.getElementById("amount");
        const amount = Number(amountInput.value);

        if (amount <= 0 || isNaN(amount)) {
                showMessage("Please enter a valid amount", "red");
                return;
        }

        balance += amount;
        updateBalance();
        showMessage("Deposit successful", "green");
        amountInput.value = "";
}

function withdraw() {
        const amountInput = document.getElementById("amount");
        const amount = Number(amountInput.value);

        if (amount <= 0 || isNaN(amount)) {
                showMessage("Please enter a valid amount", "red");
                return;
        }

        if (amount > balance) {
                showMessage("Insufficient balance", "red");
                return;
        }

        balance -= amount;
        updateBalance();
        showMessage("Withdrawal successful", "green");
        amountInput.value = "";
}

function updateBalance() {
        document.getElementById("balance").textContent = `$ ${balance}`;
}

function showMessage(text, color) {
        const message = document.getElementById("message");
        message.textContent = text;
        message.style.color = color;
}