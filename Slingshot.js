class Slingshot{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB;
        this.slingshot=Constraint.create(option);
        
        World.add(world,this.slingshot);
    }

    attach(body){
        this.slingshot.bodyA=body;
    }
    fly(){
        this.slingshot.bodyA=null;
    }

    display(){

        if(this.slingshot.bodyA){
            var pointA=this.slingshot.bodyA.position;
            var pointB=this.pointB;

            stroke("#fae");
            strokeWeight(7)
            line(pointA.x,pointA.y,pointB.x,point.y);
        }
       
        }
        
            }      
    
