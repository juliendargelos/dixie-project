Application.DreamySketch.Brush.Pen = class Pen extends Application.DreamySketch.Brush {
  constructor() {
    super();
    this.color = Application.DreamySketch.Color.black;
    this.touches = new Application.DreamySketch.Touch.List();
    this.width = 2;
  }

  compute(touches, offset) {
    var line, previous, width;
    var shapes = new Application.DreamySketch.Brush.Shape.List();

    touches.each((touch, index) => {
      if(this.touches.has(touch)) {
        line = new Application.DreamySketch.Brush.Shape.Line();
        line.origin = this.touches.get(touch.identifier).position;
        line.destination = touch.position;
        this.width = line.width = this.width + (Math.max(30/(touch.speed.abs.sum + 2), 1) - this.width)*0.5;

        shapes.push(line);
      }

      this.touches.push(touch.clone)
    });

    return shapes;
  }
}
