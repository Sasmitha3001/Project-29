class Box{
    constructor(x,y,width,height){
        var option={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);

    }
    display(){
        fill(this.color);
        // fill("yellow");
        var position=this.body.position;
       
        push();
        translate(position.x,position.y)
        rotate(this.body.angle);

        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }
}