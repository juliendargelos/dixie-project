Application.DreamySketch.Touch = class Touch extends Component {
  constructor(position, speed, identifier) {
    super();

    this.origin = Application.DreamySketch.Vector.from(position);
    this.position = this.origin.clone;
    this.speed = Application.DreamySketch.Vector.from(speed);
    this.identifier = arguments.length >= 3 ? identifier : 1;
  }

  get identifier() {
    return this._identifier;
  }

  set identifier(v) {
    this._identifier = v + '';
  }

  update(x, y) {
    var position = new Application.DreamySketch.Vector(x, y);

    this.speed.set(position.x - this.position.x, position.y - this.position.y);
    this.position.set(position);
  }

  updateFromMouseEvent(event) {
    this.update(event.clientX, event.clientY);
  }

  updateFromTouchEvent(touch) {
    this.update(touch.pageX, touch.pageY);
  }

  static fromMouseEvent(event) {
    return new this({x: event.clientX, y: event.clientY});
  }

  static fromTouchEvent(touch) {
    return new this({x: touch.pageX, y: touch.pageY}, null, touch.identifier);
  }
}
