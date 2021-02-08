class box{
    constructor(x,y,width,height){
        var bounce ={
            restitution :0.9,
            density :0.5,
            friction : 0.001
            
          }
      this.box = Bodies.rectangle(x,y,width,height, bounce); //x,y,w,h     r =20
      this.width = width
      this.height =height
      World.add(earth,this.box);
    }
display(){
    push()
   translate(this.box.position.x, this.box.position.y)
   rotate(this.box.angle)
   
    
    
    rectMode(CENTER);
    

    rect(0,0, this.width,this.height); //x,y,w,h
pop()}
}