Application.BookNavigation = class BookNavigation extends Component {
  constructor(element) {
    super();

    this.element = element

    var book = document.querySelector('.book')
        bookWrapper = document.querySelector('.book__wrapper')
        orderWrapper = document.querySelector('.order__wrapper')
        order = document.querySelector('.order')
        draw = document.querySelector('.dreamy-sketch__canvas')
        startDrawingButton = document.querySelector('.order__button')
        endDrawingButton = document.querySelector('.dreamy-sketch__done')
        factor = 0

    this.element.addEventListener('click', event => {

      bookWrapper.style.webkitFilter = "blur(30px)"
      setTimeout(function() {
        bookWrapper.style.webkitFilter = "blur(0px)"
      }, 700)

      if (book.classList.contains('resize')) {

        book.classList.remove('resize')

        if (draw.classList.contains('drawing-finished')) {
          factor += 1
          bookWrapper.style.webkitTransform = "translateX(-"+factor*33+"%)";
          orderWrapper.style.webkitTransform = "translateX(-"+factor*33+"%)";
          draw.classList.remove('drawing-finished')
          setTimeout(function() {
            order.classList.remove('hide')
          }, 700)
        }

      }
      else {
        book.classList.add('resize')
      }
    })

    startDrawingButton.addEventListener('click', event => {
      order.classList.add('hide')
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
