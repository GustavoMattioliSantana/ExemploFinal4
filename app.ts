import { Counter } from './counter';

const counter = new Counter();

const incrementButton = document.getElementById("increment") as HTMLButtonElement;
const decrementButton = document.getElementById("decrement") as HTMLButtonElement;
const display = document.getElementById("display") as HTMLElement;

function updateDisplay(): void {
    display.textContent = counter.getCount().toString();
}

incrementButton.addEventListener("click", () => {
    counter.increment();
    updateDisplay();
});

decrementButton.addEventListener("click", () => {
    counter.decrement();
    updateDisplay();
});

updateDisplay();