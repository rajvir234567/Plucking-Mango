class Mango {
    constructor(x,y){ 
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':0
        }
        this.body=Bodies.circle(x,y,20);
       
        this.radius=20;
    
        World.add(world, this.body);

        this.image = loadImage("Plucking mangoes/mango.png");
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.radius);
        pop();
    }
}