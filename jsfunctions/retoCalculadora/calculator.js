/* Calculadora */


let num1 = 1;
let num2 = 1;

while(num1 != 0 || num2 != 0) {
    let operation = (prompt("Ingrese la operación que desea hacer: + , - , * , / , sqrt , pow , % , ^ , max , min"));
    if(operation == "sqrt"){
        num1 = Number(prompt("Ingrese el número"));
        if((num1 <= 100 && num1 >= 0)){
            let sqrt = (a) => {
                sqrt = Math.sqrt(a);
                return sqrt;
            }
            if(operation == "sqrt"){
                    console.log(sqrt(num1));
            }
        }
        else{
            console.log("Usted excede las especificaciones");
        }
    }
    else if(operation == "pow"){
        num1 = Number(prompt("Ingrese el número"));
        if((num1 <= 100 && num1 >= 0)){
            let pow = (a) => {
                pow = Math.pow(a, 2);
                return pow;
            }
            if (operation == "pow"){
                console.log(pow(num1));
            }
        }
        else {
            console.log("Usted excede las especificaciones")
        }
    }
    else{
        num1 = Number(prompt("Ingrese el primer número"));
        num2 = Number(prompt("Ingrese el segundo número"));
        if((num1 <= 100 && num1 >= 0) && (num2 <= 100 && num2 >= 0)){     

            let sum = (a, b) => {
                sum = a + b;
                return sum;
            }
            let sub = (a, b) => {
                sub = a - b;
                return sub;
            }
            let mul = (a, b) => {
                mul = a * b;
                return mul;
            }
            let div = (a, b) => {
                div = a / b;
                return div;
            }
            let mod = (a, b) => {
                mod = a % b;
                return mod;
            }
            let exp = (a, b) => {
                exp = a ** b;
                return exp;
            }
            let max = (a, b) => {
                if (a > b){
                    max = a;
                    return max;
                }
                else{
                    max = b
                    return max;
                }
            }
            let min = (a,b) => {
                if (a < b){
                    min = a;
                    return min;;
                }
                else{
                    min = b;
                    return min;
                }
            }             
            if(operation == "+"){
                console.log(sum(num1, num2,));
                
            }
            else if(operation == "-"){
                console.log(sub(num1, num2));
            }
            else if(operation == "*"){
                console.log(mul(num1, num2));
            }
            else if(operation == "/"){
                console.log(div(num1, num2));
            }
            else if(operation == "%"){
                console.log(mod(num1, num2));
            }
            else if(operation == "^"){
                console.log(exp(num1, num2));
            }
            else if(operation == "max"){
                console.log("El valor máximo es " + max(num1, num2));
            }
            else if(operation == "min"){
                console.log("El valor mínimo es " + min(num1, num2));
            }
        }
        else{
            console.log("Usted excede las especificaciones");
        }
    }
}