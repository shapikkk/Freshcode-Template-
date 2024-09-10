const sumElement = document.querySelector('.animated-number');
let sumValue = Number(sumElement.textContent.replace(/\D/g, ''));

function updateSum()
{
    const formattedSum = String(sumValue).padStart(8, '0');
    sumElement.textContent = formattedSum.slice(0, 2) + ' | ' + formattedSum.slice(2, 5) + ' | ' + formattedSum.slice(5, 8);
}

setInterval(() => {
    sumValue += 1000;
    updateSum();
}, 1000);