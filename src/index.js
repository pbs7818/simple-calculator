// 여러 항 계산 가능하도록 수정 -> 0이 맨 처음에도 올 수 있도록 수정
// 하지만, 아직 순서대로만 계산함 (우선순위 고려 x)
// 연산자는 맨 처음에 못 오도록 함
// history 지우는 부분 추가
// 연산자가 계산 마지막에 오거나 또는 연산자가 중복되면, 마지막 값 또는 그 사이 값을 0으로 계산하는 부분을 history에 표현

var opers = [];
var calc_times = 0;

function add(x) 
{
    var display = document.getElementById('display');
    display.innerHTML += x;
}

function allClear()
{
    document.getElementById('display').innerHTML = "";
    opers = [];
    calc_times = 0;
}

function historyClear()
{
    document.getElementById('history').innerHTML = "";
}

function operator(oper)
{
    if(oper === '=')
        calc();
    else if(display.innerHTML == "")
        return;
    else
    {
        add(oper);
        opers[calc_times] = oper;
        calc_times++;
    }
}

function calc()
{
    var element = [];
    var result;
    var history = "";

    element = document.getElementById('display').innerHTML.split(/\D/);

    for(var j = 0; j < element.length; j++)
    {
        if(element[j] == "")
            element[j] = "0";
    }

    console.log(element);

    result = Number(element[0]);
    history = element[0];
    for(var i = 1; i <= calc_times; i++)
    {
        switch (opers[i-1])
        {
            case '+':
                result += Number(element[i]);
                history += ' + ' + element[i];
                break;
            case '-':
                result -= Number(element[i]);
                history += ' - ' + element[i];  
                break;
            case '×':
                result *= Number(element[i]);
                history += ' × ' + element[i];
                break;
            case '÷':
                result /= parseFloat(Number(element[i]));
                history += ' ÷ ' + element[i];
                break;
            default:
                break;
        }
    }
    addHistory(history + ' = ' + result);
}

function addHistory(history)
{
    var tr = document.getElementById('history').insertRow();
    var td = tr.insertCell(0);
    td.textContent = history;
}