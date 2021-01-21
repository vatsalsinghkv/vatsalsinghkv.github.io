// let getButton = document.querySelector('input[type="button"');
// getButton.addEventListener('click', getResult);

//Declaring variable to access question radio buttons
let cOptOne = document.querySelectorAll('.q-1');
let cOptTwo = document.querySelectorAll('.q-2');
let cOptThree = document.querySelectorAll('.q-3');
let cOptFour = document.querySelectorAll('.q-4');
let cOptFive = document.querySelectorAll('.q-5');
let cOptSix = document.querySelectorAll('.q-6');
let cOptSeven = document.querySelectorAll('.q-7');
let cOptEight = document.querySelectorAll('.q-8');
let cOptNine = document.querySelectorAll('.q-9');
let cOptTen = document.querySelectorAll('.q-10');

let questions = document.querySelectorAll('.questions');    //10

let qHeading = document.querySelectorAll('p');  //10 [0,9]

let correctAns = document.querySelectorAll('.explaination');    //div 10 [0,9]
let explain =  document.querySelectorAll('.explain');   //input

let button = document.getElementById('button');

let showResult = document.getElementById('showResult');
let correctAnswers = document.getElementById('correctAnswers');
let percent = document.getElementById('percent');
let finalRes = document.getElementById('finalRes');

let score = 0;

function result()
{
    showResult.style.display = 'block';

    let finalScore = score/4;

    const percentage = () =>  (finalScore / 10) * 100;
    const action = finalScore >= 4 ? true : false;

    if(action) {
        finalRes.innerHTML = 'Pass';
        finalRes.style.color = 'rgb(2, 190, 17)';
    } else {
        finalRes.innerHTML = 'Fail';
        finalRes.style.color = 'red';
    }

    correctAnswers.innerHTML = `Score - <strong>${finalScore} / ${questions.length}</strong>`;
    percent.innerHTML = `Accuracy - <strong>${percentage()}%</strong>`;
}

function formattingBody()
{
    document.querySelector('body').style.color = 'rgba(0, 0 , 0, 0.5)';

    var allDiv = document.querySelectorAll('.opt');
    allDiv.forEach(items => {
        items.style.color = 'black';
    });

    // changing ques color
    qHeading.forEach(items => {
        items.style.color = 'black';
    });

    for(var i = 0; i < explain.length; i++)
    {
        explain[i].checked = true;
        correctAns[i].style.color = 'black';
    }

    showResult.style.color = '#000';
}

/* function Confirm()
{
    var value = confirm('Are you sure you want to submit answers?');
    
    if(value) {
        runSubmit();
    }
} */

function runSubmit()
{
    //For Question-1
    for(let i = 0; i < cOptOne.length; i++)
    {
        //If correct option is selected
        if(cOptOne[1].checked)
        {
            //li
            cOptOne[1].parentElement.style.backgroundColor = 'rgba(163, 222, 131, 0.8)';    //Light Green
            cOptOne[1].parentElement.style.color = '#000';
    
            //Ques
            qHeading[0].style.color = 'rgb(2, 190, 17)';    //Dark Green
            
            //tick
            document.querySelector('.correct-1').style.display = 'inline';

            score++;
        }
        //If wrong options are seleced
        else if(cOptOne[i].checked)
        {
            cOptOne[i].parentElement.style.backgroundColor = 'rgba(250, 70, 89, 0.3)';  // Light Red
            document.querySelector('.wrong-1').style.display = 'inline';

            //Correct Answer
            correctAns[0].style.display = 'inline';

            //Ques
            qHeading[0].style.color = 'red'; 
        }
        //If nothing is selected
        else
        {
            continue;
        }
    }


    //For Question-2
    for(let i = 0; i < cOptTwo.length; i++)
    {
        //If correct option is selected
        if(cOptTwo[2].checked)
        {
            //li
            cOptTwo[2].parentElement.style.backgroundColor = 'rgba(163, 222, 131, 0.8)';    //Light Green
            cOptTwo[2].parentElement.style.color = '#000';
    
            //Ques
            qHeading[1].style.color = 'rgb(2, 190, 17)';    //Dark Green
            
            //tick
            document.querySelector('.correct-2').style.display = 'inline';

            score++;
        }
        //If wrong options are selected
        else if(cOptTwo[i].checked)
        {
            cOptTwo[i].parentElement.style.backgroundColor = 'rgba(250, 70, 89, 0.3)';  //Light Red
            document.querySelector('.wrong-2').style.display = 'inline';

            //Correct Answer
            correctAns[1].style.display = 'inline';

            //Ques
            qHeading[1].style.color = 'red';
        }
        //If nothing is selected
        else
        {
            continue;
        }
    }


    //For Question-3
    for(let i = 0; i < cOptThree.length; i++)
    {
        //If correct option is selected
        if(cOptThree[1].checked)
        {
            //li
            cOptThree[1].parentElement.style.backgroundColor = 'rgba(163, 222, 131, 0.8)';    //Light Green
            cOptThree[1].parentElement.style.color = '#000';
    
            //Ques
            qHeading[2].style.color = 'rgb(2, 190, 17)';    //Dark Green
            
            //tick
            document.querySelector('.correct-3').style.display = 'inline';

            score++;
        }
        //If wrong options are selected
        else if(cOptThree[i].checked)
        {
            cOptThree[i].parentElement.style.backgroundColor = 'rgba(250, 70, 89, 0.3)';  //Light Red
            document.querySelector('.wrong-3').style.display = 'inline';

            //Correct Answer
            correctAns[2].style.display = 'inline';

            //Ques
            qHeading[2].style.color = 'red';
        }
        //If nothing is selected
        else
        {
            continue;
        }
    }


    //For Question-4
    for(let i = 0; i < cOptFour.length; i++)
    {
        //If correct option is selected
        if(cOptFour[1].checked)
        {
            //li
            cOptFour[1].parentElement.style.backgroundColor = 'rgba(163, 222, 131, 0.8)';    //Light Green
            cOptFour[1].parentElement.style.color = '#000';
    
            //Ques
            qHeading[3].style.color = 'rgb(2, 190, 17)';    //Dark Green
            
            //tick
            document.querySelector('.correct-4').style.display = 'inline';

            score++;
        }
        //If wrong options are selected
        else if(cOptFour[i].checked)
        {
            cOptFour[i].parentElement.style.backgroundColor = 'rgba(250, 70, 89, 0.3)';  //Light Red
            document.querySelector('.wrong-4').style.display = 'inline';

            //Correct Answer
            correctAns[3].style.display = 'inline';

            //Ques
            qHeading[3].style.color = 'red';
        }
        //If nothing is selected
        else
        {
            continue;
        }
    }


    //For Question-5
    for(let i = 0; i < cOptFive.length; i++)
    {
        //If correct option is selected
        if(cOptFive[0].checked)
        {
            //li
            cOptFive[0].parentElement.style.backgroundColor = 'rgba(163, 222, 131, 0.8)';    //Light Green
            cOptFive[0].parentElement.style.color = '#000';
    
            //Ques
            qHeading[4].style.color = 'rgb(2, 190, 17)';    //Dark Green
            
            //tick
            document.querySelector('.correct-5').style.display = 'inline';

            score++;
        }
        //If wrong options are selected
        else if(cOptFive[i].checked)
        {
            cOptFive[i].parentElement.style.backgroundColor = 'rgba(250, 70, 89, 0.3)';  //Light Red
            document.querySelector('.wrong-5').style.display = 'inline';

            //Correct Answer
            correctAns[4].style.display = 'inline';

            //Ques
            qHeading[4].style.color = 'red';
        }
    }


    //For Question-6
    for(let i = 0; i < cOptSix.length; i++)
    {
        //If correct option is selected
        if(cOptSix[3].checked)
        {
            //li
            cOptSix[3].parentElement.style.backgroundColor = 'rgba(163, 222, 131, 0.8)';    //Light Green
            cOptSix[3].parentElement.style.color = '#000';
    
            //Ques
            qHeading[5].style.color = 'rgb(2, 190, 17)';    //Dark Green
            
            //tick
            document.querySelector('.correct-6').style.display = 'inline';

            score++;
        }
        //If wrong options are selected
        else if(cOptSix[i].checked)
        {
            cOptSix[i].parentElement.style.backgroundColor = 'rgba(250, 70, 89, 0.3)';  //Light Red
            document.querySelector('.wrong-6').style.display = 'inline';

            //Correct Answer
            correctAns[5].style.display = 'inline';

            //Ques
            qHeading[5].style.color = 'red';
        }
    }


    //For Question-7
    for(let i = 0; i < cOptSeven.length; i++)
    {
        //If correct option is selected
        if(cOptSeven[3].checked)
        {
            //li
            cOptSeven[3].parentElement.style.backgroundColor = 'rgba(163, 222, 131, 0.8)';    //Light Green
            cOptSeven[3].parentElement.style.color = '#000';
    
            //Ques
            qHeading[6].style.color = 'rgb(2, 190, 17)';    //Dark Green
            
            //tick
            document.querySelector('.correct-7').style.display = 'inline';

            score++;
        }
        //If wrong options are selected
        else if(cOptSeven[i].checked)
        {
            cOptSeven[i].parentElement.style.backgroundColor = 'rgba(250, 70, 89, 0.3)';  //Light Red
            document.querySelector('.wrong-7').style.display = 'inline';

            //Correct Answer
            correctAns[6].style.display = 'inline';

            //Ques
            qHeading[6].style.color = 'red';
        }
    }


    //For Question-8
    for(let i = 0; i < cOptEight.length; i++)
    {
        //If correct option is selected
        if(cOptEight[1].checked)
        {
            //li
            cOptEight[1].parentElement.style.backgroundColor = 'rgba(163, 222, 131, 0.8)';    //Light Green
            cOptEight[1].parentElement.style.color = '#000';
    
            //Ques
            qHeading[7].style.color = 'rgb(2, 190, 17)';    //Dark Green
            
            //tick
            document.querySelector('.correct-8').style.display = 'inline';

            score++;
        }
        //If wrong options are selected
        else if(cOptEight[i].checked)
        {
            cOptEight[i].parentElement.style.backgroundColor = 'rgba(250, 70, 89, 0.3)';  //Light Red
            document.querySelector('.wrong-8').style.display = 'inline';

            //Correct Answer
            correctAns[7].style.display = 'inline';

            //Ques
            qHeading[7].style.color = 'red';
        }
    }


    //For Question-9
    for(let i = 0; i < cOptNine.length; i++)
    {
        //If correct option is selected
        if(cOptNine[1].checked)
        {
            //li
            cOptNine[1].parentElement.style.backgroundColor = 'rgba(163, 222, 131, 0.8)';    //Light Green
            cOptNine[1].parentElement.style.color = '#000';
    
            //Ques
            qHeading[8].style.color = 'rgb(2, 190, 17)';    //Dark Green
            
            //tick
            document.querySelector('.correct-9').style.display = 'inline';

            score++;
        }
        //If wrong options are selected
        else if(cOptNine[i].checked)
        {
            cOptNine[i].parentElement.style.backgroundColor = 'rgba(250, 70, 89, 0.3)';  //Light Red
            document.querySelector('.wrong-9').style.display = 'inline';

            //Correct Answer
            correctAns[8].style.display = 'inline';

            //Ques
            qHeading[8].style.color = 'red';
        }
    }


    //For Question-10
    for(let i = 0; i < cOptTen.length; i++)
    {
        //If correct option is selected
        if(cOptTen[0].checked)
        {
            //li
            cOptTen[0].parentElement.style.backgroundColor = 'rgba(163, 222, 131, 0.8)';    //Light Green
            cOptTen[0].parentElement.style.color = '#000';
    
            //Ques
            qHeading[9].style.color = 'rgb(2, 190, 17)';    //Dark Green
            
            //tick
            document.querySelector('.correct-10').style.display = 'inline';

            score++;
        }
        //If wrong options are selected
        else if(cOptTen[i].checked)
        {
            cOptTen[i].parentElement.style.backgroundColor = 'rgba(250, 70, 89, 0.3)';  //Light Red
            document.querySelector('.wrong-10').style.display = 'inline';

            //Correct Answer
            correctAns[9].style.display = 'inline';

            //Ques
            qHeading[9].style.color = 'red';
        }
    }

    button.style.display = 'none';

    //Formatting Body
    formattingBody();

    //Get Result
    result();
}