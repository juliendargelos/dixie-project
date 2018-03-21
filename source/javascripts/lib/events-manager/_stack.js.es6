EventsManager.Stack = class Stack {
  constructor() {
    this.listeners = [];
  }

  each(callback) {
    for(var i = 0; i < this.listeners.length; i++) {
      if(callback.call(this, this.listeners[i]) === false) break;
    }
  }

  call(context, data) {
    this.each(listener => listener.call(context, data));
  }

  add(listener) {
    this.listeners.push(listener);
  }

  trigger(listener) {
    var index = this.listeners.indexOf(listener);
    if(index !== -1) this.listeners.splice(index, 1);
  }
}
