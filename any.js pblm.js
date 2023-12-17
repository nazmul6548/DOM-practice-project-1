const myObj = {
    Name: 'Shahin',
    fFruit: ['Mango', 'Apple', 'Banana'],
    printfFruit: function(){
        this.fFruit.forEach(function(e){
            console.log(`${this.Name} like ${e}`);
            console.log(this.Name);
        })
    }
}
myObj.printfFruit();