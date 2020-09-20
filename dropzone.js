class DropZone {
    constructor(x, y) {
      var options = {
          isStatic: true
      }
      this.bottom = Bodies.rectangle(x, y-50, 200, 20, options);
      this.side1 = Bodies.rectangle(x+100, y, 20, 100, options);
      this.side2 = Bodies.rectangle(x-100, y, 20, 100, options);
      this.bwidth = 200;
      this.bheight = 20;
      this.swidth = 20;
      this.sheight = 100;
      
      World.add(world, this.bottom);
      World.add(world, this.side1);
      World.add(world, this.side2);
    }
    display(){
      var bPos =this.bottom.position;
      var bAngle = this.bottom.angle;
      var s1Pos =this.bottom.position;
      var s1Angle = this.bottom.angle;
      var s2Pos =this.bottom.position;
      var s2Angle = this.bottom.angle;
      push();
      translate(bPos.x, bPos.y);
      rotate(bAngle);
      translate(s1Pos.x, s1Pos.y);
      rotate(s1Angle);
      translate(s2Pos.x, s2Pos.y);
      rotate(s2Angle);
      rectMode(CENTER);
      fill(255, 0, 0);
      rect(0, 0, this.bwidth, this.bheight);
      rect(0, 0, this.swidth, this.sheight);
      rect(0, 0, this.swidth, this.sheight);
      pop();
    }
  };
  