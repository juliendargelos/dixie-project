class Component {
  static get upperCase() {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  static get components() {
    var components = [];

    for(var component in this) {
      if(this.hasOwnProperty(component) && this.hasComponent(component)) components.push(this[component]);
    }

    return components;
  }

  static hasComponent(component) {
    return this.upperCase.includes((component + '')[0]);
  }

  static init() {
    this.components.forEach(component => {
      if(typeof component.init === 'function') component.init();
    });
  }

  constructor() {

  }
}
