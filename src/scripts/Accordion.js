export default class Accordion {
  constructor() {
    this._buttons = document.querySelectorAll('.question__button');

    this._questionSelector = '.question';
    this._buttonActiveSelector = 'question__button_active';
    this._answerSelector = '.question__answer-container';
    this._answerActiveSelector = 'question__answer-container_opened';
  }

  _toggleAnswer() {
    if (this._answer.style.maxHeight) {
      this._answer.style.maxHeight = null;
    } else {
      this._answer.style.maxHeight = this._answer.scrollHeight + 'px';
    }
  }

  _toggleAccordion(evt) {
    this._button = evt.target;
    this._answer = evt.target.closest(this._questionSelector).querySelector(this._answerSelector);

    this._button.classList.toggle(this._buttonActiveSelector);

    this._toggleAnswer();
  }

  _setEventListeners() {
    this._buttons.forEach((button) => {
      button.addEventListener('click', this._toggleAccordion.bind(this))
    })
  }

  enableAccordion() {
    this._setEventListeners();
  }
}
