export default class Accordion {
  constructor(selectors) {
    this._buttons = document.querySelectorAll('.' + selectors.button);

    this._sectionSelector = selectors.section;
    this._buttonActiveSelector = selectors.buttonActive;
    this._answerSelector = selectors.answer;
    this._answerActiveSelector = selectors.answerActive;
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
    this._answer = evt.target.closest('.' + this._sectionSelector).querySelector('.' + this._answerSelector);

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
