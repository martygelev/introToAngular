// 

class ShoppingList2{
    groceries: string[];

    constructor(){
        this.groceries = [];
    }

    addItem(item){
        this.groceries = [...this.groceries,item];
    }

    removeItem(item){
        this.groceries = this.groceries.filter((grocery) => item !== grocery);
    }

}

var shoppingList2 = new ShoppingList2();

shoppingList2.addItem('Pear2');
shoppingList2.addItem('Apple2');

console.log(shoppingList2.groceries);

shoppingList2.removeItem('Apple2');
console.log(shoppingList2.groceries);
