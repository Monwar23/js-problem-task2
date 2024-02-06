
function lowest(string){
   let low=string[0]
   for(let str of string){
    if(str.length<low.length){
        low=str;
    }
   }
   return low
    
}
const string=lowest(['rahim', 'robin', 'rafi', 'ron', 'rashed'])
console.log(string)