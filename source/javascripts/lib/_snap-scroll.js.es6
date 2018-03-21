class SnapScroll {
  constructor(element) {
    this.element = element;
    this.value = null;
    this.timeout = null;
    EventsManager.for(this);

    this.on('end', () => {

    });
  }

  get enabled() {
    return this._enabled || false;
  }

  get disabled() {
    return !this.enabled;
  }

  onscroll() {
    if(this.value === null) {
      this.value = this.element.scrollTop;
      this.trigger('start');
    }

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      if(this.value === this.element.scrollTop) {
        this.value = null;
        this.trigger('end');
      }
    });
  }

  enable() {
    if(this.disabled) {
      this._enabled = true;
      this.element.addEventListener('scroll', this.onscroll);
    }
  }

  disable() {

  }
}
