class EventsManager {
  constructor(object) {
    this.object = object;
    this.stacks = {};

    object.on = (events, listener) => this.add(events, listener);
    object.off = (events, listener) => this.remove(events, listener);
    object.trigger = (events, data) => this.trigger(events, data);
  }

  has(event) {
    return this.stacks[event] instanceof this.constructor.Stack;
  }

  add(events, listener) {
    this.constructor.events(events, event => {
      if(!this.has(event)) this.stacks[event] = new Stack();
      this.stacks[event].add(listener);
    });
  }

  remove(events, listener) {
    this.constructor.events(events, event => {
      if(this.has(event)) this.stacks[event].remove(listener);
    });
  }

  trigger(events, data) {
    this.constructor.events(events, event => {
      if(this.has(event)) this.stacks[event].trigger(object, data);
    });
  }

  static events(events, callback) {
    events = events.replace(/\s+/, ' ').split(' ');

    for(var i = 0; i < events.length; i++) callback.call(this, events[i]);
  }

  static for(object) {
    return new this(object);
  }
}
