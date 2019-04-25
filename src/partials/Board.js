import { SVG_NS } from "../settings";

export default class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    render(svg) {
        //...
        let rect = document.createElementNS(SVG_NS, "rect");
        rect.setAttributeNS(null, "fill", "#353535");
        rect.setAttributeNS(null, "width", this.width);
        rect.setAttributeNS(null, "height", this.height);

        let line = document.createElementNS(SVG_NS, 'line');
        line.setAttributeNS(null, 'x1', this.width / 2);
        line.setAttributeNS(null, 'y1', 0);
        line.setAttributeNS(null, 'x2', this.width / 2);
        line.setAttributeNS(null, 'y2', this.height);
        line.setAttributeNS(null, "stroke", '#912424');
        line.setAttributeNS(null, "stroke-dasharray", '15');
        line.setAttributeNS(null, 'stroke-width', '4');

        // let centerCircle = document.createElementNS(SVG_NS, 'circle');
        // centerCircle.setAttributeNS(null, 'cx', '256');
        // centerCircle.setAttributeNS(null, 'cy', '128');
        // centerCircle.setAttributeNS(null, 'r', '50');
        // centerCircle.setAttributeNS(null, 'stroke-width', '3');
        // centerCircle.setAttributeNS(null, 'stroke', '#912424');
        // centerCircle.setAttributeNS(null, 'stroke-dasharray', '10, 5, 5');


        // svg.appendChild(centerCircle);
        svg.appendChild(rect);
        svg.appendChild(line);
    }
}