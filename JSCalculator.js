let checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', function(){
        if(this.checked){
            document.documentElement.setAttribute('data-theme', 'dark');
       }
        else{
            document.documentElement.setAttribute('data-theme', 'light');
       }
    });
 function getHistory(){
    return document.getElementById('upper-value').innerText;
}
function printHistory(num){
    document.getElementById("upper-value").innerText=num;
}
function getOutput(){
    return document.getElementById("lower-value").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("lower-value").innerText=num;
    }else{
        document.getElementById("lower-value").innerText=getFormattedNumber(num);
    } 
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output=="" && history!=""){

                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output = output=="" ? output : reverseNumberFormat(output);
                history = history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }

                else if(this.id=="%"){
                    var n = reverseNumberFormat(getOutput());
                    var percent = n / 100;
                    printOutput(percent.toFixed(4));
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        //if output is a number
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
            
        }
    });
}