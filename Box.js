class Box {
     constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':0.3
            }
            this.Visiblity=225;
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            this.angle = angle;
            World.add(world, this.body);
          }
          display(){
            if(this.body.speed <2){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
            } else{
              World.remove(world, this.body);
              push();
              this.Visiblity = this.Visiblity-5;
              tint(225, this.Visiblity);
              pop();
            }
          }
          score(){
            if(this.Visiblity<0 && this.Visiblity>-105){
              score ++;
            }
          }
  };