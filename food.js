class Food {
    constructor(){
        this.foodStock =0;
        this.lastFed =0;
        this.image = loadImage("Milk.png"); 
    }
    getFoodStock(){
        
       var foodStockRef = database.ref('Food');
        foodStockRef.on("value",function(data){
        foodStock = data.val();
        });
        this.foodStock = foodStock;
        return foodStock;
    }
    updateFoodStock(data){
        database.ref('/').update({
            Food:data
          });
        this.foodStock = data;
    } 
    
    bedroom(){
        background(bedroom,550,500);
    }
    garden(){
        background(garden,550,500);
    }
    washroom(){
        background(washroom,550,500);
    }

    display(){
        var x=80, y=100;
        imageMode(CENTER);
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10 === 0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50); 
                x=x+30;
            }
        }
    }
}