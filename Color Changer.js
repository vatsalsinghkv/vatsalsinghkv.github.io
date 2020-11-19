let button = document.querySelector('input[type="button"]');

let colorText = document.querySelector('input[type="text"]');

let h1 = document.querySelector('h1');

let body = document.querySelector('body');

let colorPicker = document.getElementById('colorPicker');

let printColor = document.getElementById('printColor');

let colorValueOption = document.getElementById('colorValueOption');

let checkBox = document.querySelector('input[type="checkbox"]');

var count = 0;

checkBox.addEventListener('click', () => {

    if (count % 2 == 0) {

        colorValueOption.style.display = 'block';

        colorPicker.style.display = 'none';

    } else {

        colorValueOption.style.display = 'none';

        colorPicker.style.display = 'block';

    }

    count++;

})

/*

if(checkBox.seleected) {

    colorValueOption.style.display = 'block';

    

} else {

    colorValueOption.style.display = 'none';

}

*/

button.addEventListener('click', () => {

    if(count % 2 == 1)

    {

        let color = colorText.value;

        var regx = /^#[a-f 0-9]{6}$/i;

        var colorList = ['red', 'blue'];

        /*    function getColorValue()

        {

            var color;

            for(color of colorList)

            {

                return color;

            }

        }   */

        if( regx.test(colorText.value) /*|| colorText.value == getColorValue()*/)

        {

            body.style.backgroundColor = color;

            printColor.style.display = 'block';

            printColor.style.color = color;

            colorPicker.style.borderColor = color;

            printColor.firstChild.innerHTML = color;

            colorText.style.borderColor = color;

         //   h1.style.color = color;

        } 

        else 

        {

            alert('Invalid Color Value');

        }

    }

    else 

    {

        let color = colorPicker.value;

    

        body.style.backgroundColor = color;

        printColor.style.display = 'block';

        printColor.style.color = color;

        colorPicker.style.borderColor = color;

        printColor.firstChild.innerHTML = color;

        colorText.style.borderColor = color;

    //    h1.style.color = color;

    }

    // button.style.backgroundColor = color;

})
