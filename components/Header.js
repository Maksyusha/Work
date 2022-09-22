export default class Header {
  constructor(selectors) {
    this._header = document.querySelector('.' + selectors.header);
    this._headerToggle = this._header.querySelector('.' + selectors.headerToggle);
    this._headerButton = this._header.querySelector('.' + selectors.headerButton);
    this._headerMenu = this._header.querySelector('.' + selectors.headerMenu);

    this._curentScrollY = 0;
    this._headerSelector = selectors.header;
    this._headerMenuActiveSelector = selectors.headerMenuActive;
  }

  _removeChecked() {
    this._headerToggle.checked = false;
  }

  _openHeaderMenu() {
    this._headerMenu.classList.add(this._headerMenuActiveSelector);
  }

  _closeHeaderMenu() {
    this._headerMenu.classList.remove(this._headerMenuActiveSelector);
  }

  _isOpened() {
    if (this._headerToggle.checked) {
      return true;
    } else return false;
  }

  _toggleHeader() {
    if (this._isOpened()) {
      this._closeHeaderMenu();
    } else this._openHeaderMenu();
  }

  _setEventListeners() {
    this._headerButton.addEventListener('click', this._toggleHeader.bind(this))
    document.addEventListener('mousedown', this._closeHeaderMenuByOverlay.bind(this));
    document.addEventListener('scroll', this._closeHeaderByScroll.bind(this));
  }

  _closeHeaderMenuByOverlay(evt) {
    if (evt.target.closest(this._headerSelector) === null) {
      this._closeHeaderMenu()
      this._removeChecked();
    }
  }

  _closeHeaderByScroll() {
    if (this._isOpened) {
      this._diffScrollY = this._curentScrollY - scrollY
      this._curentScrollY = scrollY;
      if (this._diffScrollY > 25 || this._diffScrollY < -25) {
        this._closeHeaderMenu();
        this._removeChecked();
      }
    }
  }

  enableHeader() {
    this._setEventListeners();
  }
}
