let num = document.querySelector('input[type="number"]');
let btn = document.querySelector('input[type="button"]');
let printRes = document.getElementById('printBinary');

btn.addEventListener('click', () => {

    var numValue = num.value;
    var binary = new Array(16);
    var test = 10;

    if(numValue > 0 && numValue <= 65535)
    {
        printBinary.style.display = 'inline-block';
        printRes.innerHTML = '';

        for(var i = 15; i >= 0; i--)
        {
        binary[i] = Math.floor(numValue % 2);
        numValue /= 2;
        }
    }
    else
    {
        alert('Enter Positive Integers Only!\nmax: 65535');
        printBinary.style.display = 'none';
    }

    binary.forEach((value) => printRes.innerHTML += value);
});