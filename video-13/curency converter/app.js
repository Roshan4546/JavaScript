const BASE_URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate currency dropdowns
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let option = document.createElement("option");
        option.value = currCode;
        option.innerText = currCode;

        // Set default values
        if (select.name === "from" && currCode === "USD") {
            option.selected = true;
        } else if (select.name === "to" && currCode === "INR") {
            option.selected = true;
        }

        select.appendChild(option);
    }

    // Update flag on change
    select.addEventListener("change", (e) => {
        updateFlag(e.target);
    });
}

// Update flag based on currency
const updateFlag = (element) => {
    const currCode = element.value;
    const countryCode = countryList[currCode]; // e.g. "US"
    const img = element.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

// Fetch and display exchange rate
const updateExchangeRate = async () => {
    const amountInput = document.querySelector(".amount input");
    let amtVal = parseFloat(amountInput.value);

    // Validate input
    if (isNaN(amtVal) || amtVal < 1) {
        amtVal = 1;
        amountInput.value = "1";
    }

    const from = fromCurr.value.toLowerCase();
    const to = toCurr.value.toLowerCase();
    const url = `${BASE_URL}/${from}/${to}.json`;

    try {
        console.log("Fetching:", url);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        const rate = data[to];
        const converted = (amtVal * rate).toFixed(2);
        msg.innerText = `${amtVal} ${fromCurr.value} = ${converted} ${toCurr.value}`;
    } catch (err) {
        console.error("Fetch error:", err);
        msg.innerText = "Failed to fetch exchange rate.";
    }

};

// Button click event
btn.addEventListener("click", (e) => {
    e.preventDefault();
    updateExchangeRate();
});

// Initial setup on page load
window.addEventListener("load", () => {
    updateFlag(fromCurr);
    updateFlag(toCurr);
    updateExchangeRate();
});
