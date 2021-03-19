class Box {

    constructor(x, y) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density: 0.02,

        }

        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.visibility = 255;
        //NameSpacing(renaming width and height)
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
    }

    display() {
        if (this.body.speed < 3) {
            //NameSpacing(renaming position of Ground)
            // console.log(this.body.speed);
            
            var pos = this.body.position;
            var angle= this.body.angle;
            push()
            translate(pos.x,pos.y)
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(2);
            fill("blue");
            rect(0,0, this.width, this.height);
            pop()

        }

        else {

            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5
            pop();
            tint(255, this.Visiblity);

        }
    }
}