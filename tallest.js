function getMax(numbers){
    let max=numbers[0];
    let min=numbers[0];
    for(let number of numbers){
      
        if(number>max){
            max=number
        }
        if(number<min){
            min=number
        }
    }
    return [max,min];
}
const numbers=getMax([12,4,22,54,67,12,89,55])
console.log(numbers)