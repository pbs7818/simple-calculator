function add(x) 
{
    var display = document.getElementById('display');

    if (x == 0)
    {
        if(display.innerHTML == "")
            return;
    }

    display.innerHTML += x;

}

function allClear()
{
    document.getElementById('display').innerHTML = "";
}

function historyClear()
{
    document.getElementById('history').innerHTML = "";
}

var choice = 0;

function operator(char)
{   
    var element = [];
    var result;
    
    switch (char)
    {
        case '+':
            if(display.innerHTML == "")
                return;
            else
            {
                choice = 1;
                add('+');
            }
            break;
        case '-':
            if(display.innerHTML == "")
                return;
            else
            {
                choice = 2;
                add('-');
            }
            break;
        case '×':
            if(display.innerHTML == "")
                return;
            else
            {
                choice = 3;
                add('×');
            }
            break;
        case '÷':
            if(display.innerHTML == "")
                return;
            {
                choice = 4;
                add('÷');
            }
            break;
        case '=':
            if(choice == 1)
            {  
                element = display.innerHTML.split('+');
                result = Number(element[0]) + Number(element[1]);
                addHistory(element[0] + ' + ' + element[1] + ' = ' + result);
            }
            else if(choice == 2)
            {
                element = display.innerHTML.split('-');
                result = Number(element[0]) - Number(element[1]);
                addHistory(element[0] + ' - ' + element[1] + ' = ' + result);
            }
            else if(choice == 3)
            {
                element = display.innerHTML.split('×');
                result = Number(element[0]) * Number(element[1]);
                addHistory(element[0] + ' × ' + element[1] + ' = ' + result);
            }
            else if(choice == 4)
            {
                element = display.innerHTML.split('÷');
                if(element[1] === "0")
                    addHistory("error");
                else
                {   
                    result = parseFloat(Number(element[0])) / parseFloat(Number(element[1]));
                    addHistory(element[0] + ' ÷ ' + element[1] + ' = ' + result);
                }
            }
            break;
        default:
            break;
    }
}

function addHistory(result)
{
    var tr = document.getElementById('history').insertRow();
    var td = tr.insertCell(0);
    td.textContent = result;
}