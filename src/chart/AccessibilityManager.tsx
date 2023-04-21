/* eslint-disable no-underscore-dangle */
export class AccessibilityManager {
  private _coordinateList: any[] = [];

  private _activeIndex = 0;

  private _mouseHandlerCallback: any;

  private _container: any;

  public focus() {
    this.spoofMouse();
  }

  public keyboardEvent(e) {
    switch (e.key) {
      case 'ArrowRight': {
        this._activeIndex = Math.min(this._activeIndex + 1, this._coordinateList.length - 1);
        this.spoofMouse();
        break;
      }
      case 'ArrowLeft': {
        this._activeIndex = Math.max(this._activeIndex - 1, 0);
        this.spoofMouse();
        break;
      }
      default: {
        break;
      }
    }
  }

  private spoofMouse() {
    const { x, y } = this._container.getBoundingClientRect();
    const newX = x + this._coordinateList[this._activeIndex].coordinate;

    this._mouseHandlerCallback({
      pageX: newX,
      pageY: y + 100,
    });
  }

  set coordinateList(list: any[]) {
    this._coordinateList = list;
    if (this._activeIndex >= this._coordinateList.length) {
      this._activeIndex = this._coordinateList.length - 1;
    }
  }

  set mouseHandlerCallback(cb: any) {
    this._mouseHandlerCallback = cb;
  }

  set container(el: any) {
    this._container = el;
  }
}
