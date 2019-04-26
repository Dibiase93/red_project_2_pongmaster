import { SVG_NS, KEYS } from "../settings";


export default class Ball {
    constructor(radius, boardWidth, boardHeight) { //add color to additional balls.
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;
        this.reset();
    }

reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
        
        this.vy = 0;
        while(this.vy === 0) {
        this.vy = Math.floor(Math.random() * 10 - 5);
        }
        this.vx = this.direction * (6 - Math.abs(this.vy));
      } // end of reset

wallCollision() {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;

    if(hitLeft || hitRight){ 
        this.vx = -this.vx; 

    } else if(hitTop || hitBottom) {
        this.vy = -this.vy;
    }
}

    render(svg, player1, player2) {
        let circle = document.createElementNS(SVG_NS, 'circle')
       
    //    update x position with vector direction 60 times a second.
        this.x += this.vx;
        this.y += this.vy;
        
        this.wallCollision();

        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.x); // X position
        circle.setAttributeNS(null, 'cy', this.y); // y position
        circle.setAttributeNS(null, 'fill', "#00f2ff");

        svg.appendChild(circle);
    }

}
  //end of Ball class