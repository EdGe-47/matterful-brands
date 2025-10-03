const rootSelector = '[data-js-bna-card]'

class BnACard {
  selectors = {
    root: rootSelector,
    button: '[data-js-bna-card-button]',
  }

  stateClasses = {
    isDragging: 'is-dragging',
  }

  initialState = {
    offsetX: null,
    isDragging: false,
    currentDraggingElement: null,
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.buttonElement = this.rootElement.querySelector(this.selectors.button)
    this.state = { ...this.initialState }
    this.bindEvents()
  }

  resetState() {
    this.state = { ...this.initialState }
  }

  onPointerDown(event) {
    const { target, pageX } = event

    const isDraggable = target.matches(this.selectors.button)

    if (!isDraggable) {
      return
    }

    target.classList.add(this.stateClasses.isDragging)

    const { left } = target.getBoundingClientRect()

    const elementWidth = target.offsetWidth

    this.state = {
      offsetX: pageX - left - elementWidth / 2,
      isDragging: true,
      currentDraggingElement: target,
    }
  }

  getButtonPositionXInPercent(event) {
    const rootRect = this.rootElement.getBoundingClientRect()
    const buttonPositionX = ((event.pageX - rootRect.left - this.state.offsetX) / rootRect.width) * 100
    return Math.max(0, Math.min(100, buttonPositionX))
  }

  onPointerMove(event) {
    if (!this.state.isDragging) {
      return
    }

    const buttonPositionXInPercent = this.getButtonPositionXInPercent(event)
    this.rootElement.style.setProperty('--position', `${buttonPositionXInPercent}%`)
  }

  onPointerUp () {
    if (!this.state.isDragging) {
      return
    }

    this.state.currentDraggingElement.classList.remove(this.stateClasses.isDragging)
    this.resetState()
  }

  bindEvents() {
    this.buttonElement.addEventListener('pointerdown', (event) => this.onPointerDown(event))
    document.addEventListener('pointermove', (event) => this.onPointerMove(event))
    document.addEventListener('pointerup', () => this.onPointerUp())
  }
}

class BnACardCollection {
  constructor() {
    this.init()
  }

  init() {
    const elements = document.querySelectorAll(rootSelector);
    document.querySelectorAll(rootSelector).forEach((element) => {
      new BnACard(element)
    })
  }
}

export default BnACardCollection