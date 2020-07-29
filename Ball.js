class Ball{
constructor(x,y,radius){

    var option={
        restitution:0.8,
        friction:1.0,
        density:1.0
    }

    this.body=Bodies.circle(x,y,radius,option);
    this.radius=radius;
    World.add(world,this.body);
}

display(){
    fill("yellow");
    var position=this.body.position;

    ellipseMode(RADIUS);
    ellipse(position.x,position.y,this.radius);

}

    
}