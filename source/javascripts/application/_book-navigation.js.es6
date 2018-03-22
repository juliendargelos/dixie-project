Application.BookNavigation = class BookNavigation extends Component {
  constructor(element) {
    super();
    this.element = element

    var book = document.querySelector('.book')
    var startDrawingButton = document.querySelector('.order__content--button')
    var order = document.querySelector('.dreamy-sketch__order')

    this.element.addEventListener('click', event => {
      if (book.classList.contains('resize')) {
        book.classList.remove('resize')
      }
      else {
        book.classList.add('resize')
      }
    })
    startDrawingButton.addEventListener('click', event => {
      order.classList.add('hide-order')
    })
  }

  static init() {
    super.init()

    return new this(document.querySelector('.book__next-chapter'))
  }
}
