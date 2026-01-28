class Calculator{
    constructor(){
        this.result = 0;
    }
    add(number){
        this.result += number;
    }
    subtract(number){
        this.result -= number;
    }
    multiply(number){
        this.result *= number;
    }
    divide(number){
        if(number==0){
            throw new Error("Invalid Expression: Division by zero");
        }
        this.result /= number;
    }
    clear(){
        this.result = 0;
    }
    getResult(){
        return this.result;
    }
    calculate(expression){
        const temp = expression;
        const cleanedExpression = temp.replace(/\s+/g, '');
        const validExpression = /^[0-9+\-*/().]+$/.test(cleanedExpression);
        
        if(!validExpression){
            throw new Error("Invalid Expression");
        }
        try{
            this.result = eval(cleanedExpression);
        } catch(error){
            throw new Error("Invalid Expression");
        }
    }
}