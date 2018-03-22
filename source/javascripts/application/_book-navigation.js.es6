Application.BookNavigation = class BookNavigation extends Component {
  constructor(element) {
    super();
    this.element = element

    var book = document.querySelector('.book')
    var order = document.querySelector('.dreamy-sketch__order')
    var draw = document.querySelector('.dreamy-sketch__canvas')
    var startDrawingButton = document.querySelector('.order__content--button')
    var endDrawingButton = document.querySelector('.dreamy-sketch__done')


    this.element.addEventListener('click', event => {
      if (book.classList.contains('resize')) {
        book.classList.remove('resize')
        if (draw.classList.contains('drawing-finished')) {
          console.log('Dessin terminé');
        }
        else {
          console.log('Dessin non terminé');
        }
      }
      else {
        book.classList.add('resize')
      }
    })

    startDrawingButton.addEventListener('click', event => {
      order.classList.add('hide-order')
    })

    endDrawingButton.addEventListener('click', event => {
      draw.classList.add('drawing-finished')
    })

  }

  static init() {
    super.init()
    return new this(document.querySelector('.book__next-chapter'))
  }
}
