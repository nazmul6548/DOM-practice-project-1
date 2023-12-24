const myObj = {
    Name: 'Shahin',
    fFruit: ['Mango', 'Apple', 'Banana'],
    printfFruit: function(){
        this.fFruit.forEach((e) =>
            console.log(`${this.Name} like ${e}`));
            console.log(this.Name);
        }
    
}
myObj.printfFruit();

const result = document.querySelector("#footer").innerHTML="<h1> 'hhhhh' </h1>";
console.log(result);