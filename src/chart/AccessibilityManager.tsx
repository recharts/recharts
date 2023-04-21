import { LayoutType } from '../util/types';

interface ContainerOffset {
  top: number;
  left: number;
}

/* eslint-disable no-underscore-dangle */
export class AccessibilityManager {
  private _coordinateList: any[] = [];

  private _activeIndex = 0;

  private _mouseHandlerCallback: any;

  private _container: any;

  private _layout: LayoutType = 'horizontal';

  private _offset: ContainerOffset | null = null;

  public focus() {
    this.spoofMouse();
  }

  public keyboardEvent(e) {
    switch (e.key) {
      case 'ArrowRight': {
        if (this._layout !== 'horizontal') {
          return;
        }
        this._activeIndex = Math.min(this._activeIndex + 1, this._coordinateList.length - 1);
        this.spoofMouse();
        break;
      }
      case 'ArrowLeft': {
        if (this._layout !== 'horizontal') {
          return;
        }
        this._activeIndex = Math.max(this._activeIndex - 1, 0);
        this.spoofMouse();
        break;
      }
      case 'ArrowUp': {
        if (this._layout !== 'vertical') {
          return;
        }
        this._activeIndex = Math.max(this._activeIndex - 1, 0);
        this.spoofMouse();
        break;
      }
      case 'ArrowDown': {
        if (this._layout !== 'vertical') {
          return;
        }
        this._activeIndex = Math.min(this._activeIndex + 1, this._coordinateList.length - 1);
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
    const { coordinate } = this._coordinateList[this._activeIndex];

    const pageX = x + (this._layout === 'horizontal' ? coordinate : 100);
    const pageY = y + (this._layout === 'vertical' ? coordinate : this._offset.top);

    this._mouseHandlerCallback({ pageX, pageY });
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

  set layout(newLayout: LayoutType) {
    this._layout = newLayout;
  }

  set offset(newOffset: ContainerOffset) {
    this._offset = newOffset;
  }
}
