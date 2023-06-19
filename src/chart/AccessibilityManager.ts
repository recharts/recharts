import type { LayoutType, TickItem } from '../util/types';

interface ContainerOffset {
  top: number;
  left: number;
}

interface InitiableOptions {
  coordinateList?: TickItem[];
  mouseHandlerCallback?: (e: Partial<MouseEvent>) => void;
  container?: HTMLElement;
  layout?: LayoutType;
  offset?: ContainerOffset;
}

export class AccessibilityManager {
  private activeIndex = 0;

  private coordinateList: InitiableOptions['coordinateList'] = [];

  private mouseHandlerCallback: InitiableOptions['mouseHandlerCallback'];

  private container: InitiableOptions['container'];

  private layout: InitiableOptions['layout'] = 'horizontal';

  private offset: InitiableOptions['offset'];

  public setDetails({
    coordinateList = [],
    container = null,
    layout = null,
    offset = null,
    mouseHandlerCallback = null,
  }: InitiableOptions) {
    this.coordinateList = coordinateList ?? this.coordinateList;
    this.container = container ?? this.container;
    this.layout = layout ?? this.layout;
    this.offset = offset ?? this.offset;
    this.mouseHandlerCallback = mouseHandlerCallback ?? this.mouseHandlerCallback;

    // Keep activeIndex in the bounds between 0 and the last coordinate index
    this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
  }

  public focus() {
    this.spoofMouse();
  }

  public keyboardEvent(e: any) {
    // The AccessibilityManager relies on the Tooltip component. When tooltips suddenly stop existing,
    // it can cause errors. We use this function to check. We don't want arrow keys to be processed
    // if there are no tooltips, since that will cause unexpected behavior of users.
    if (this.coordinateList.length === 0) {
      return;
    }

    switch (e.key) {
      case 'ArrowRight': {
        if (this.layout !== 'horizontal') {
          return;
        }
        this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1);
        this.spoofMouse();
        break;
      }
      case 'ArrowLeft': {
        if (this.layout !== 'horizontal') {
          return;
        }
        this.activeIndex = Math.max(this.activeIndex - 1, 0);
        this.spoofMouse();
        break;
      }
      default: {
        break;
      }
    }
  }

  private spoofMouse() {
    if (this.layout !== 'horizontal') {
      return;
    }

    // This can happen when the tooltips suddenly stop existing as children of the component
    // That update doesn't otherwise fire events, so we have to double check here.
    if (this.coordinateList.length === 0) {
      return;
    }

    const { x, y } = this.container.getBoundingClientRect();
    const { coordinate } = this.coordinateList[this.activeIndex];

    const pageX = x + coordinate;
    const pageY = y + this.offset.top;

    this.mouseHandlerCallback({ pageX, pageY });
  }
}
