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
  /* Is the chart oriented left-to-right? */
  ltr?: boolean;
}

export class AccessibilityManager {
  private activeIndex = 0;

  private coordinateList: InitiableOptions['coordinateList'] = [];

  private mouseHandlerCallback: InitiableOptions['mouseHandlerCallback'];

  private container: InitiableOptions['container'];

  private layout: InitiableOptions['layout'] = 'horizontal';

  private offset: InitiableOptions['offset'];

  private ltr = true;

  public setDetails({
    coordinateList = [],
    container = null,
    layout = null,
    offset = null,
    mouseHandlerCallback = null,
    ltr = null,
  }: InitiableOptions) {
    this.coordinateList = coordinateList ?? this.coordinateList;
    this.container = container ?? this.container;
    this.layout = layout ?? this.layout;
    this.offset = offset ?? this.offset;
    this.mouseHandlerCallback = mouseHandlerCallback ?? this.mouseHandlerCallback;
    this.ltr = ltr ?? this.ltr;

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

    if (this.ltr) {
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
    } else {
      switch (e.key) {
        case 'ArrowRight': {
          if (this.layout !== 'horizontal') {
            return;
          }
          this.activeIndex = Math.max(this.activeIndex - 1, 0);
          this.spoofMouse();
          break;
        }
        case 'ArrowLeft': {
          if (this.layout !== 'horizontal') {
            return;
          }
          this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1);
          this.spoofMouse();
          break;
        }
        default: {
          break;
        }
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

    const { x, y, height } = this.container.getBoundingClientRect();
    const { coordinate } = this.coordinateList[this.activeIndex];

    const scrollOffsetX = window?.scrollX || 0;
    const scrollOffsetY = window?.scrollY || 0;

    const pageX = x + coordinate + scrollOffsetX;
    const pageY = y + this.offset.top + height / 2 + scrollOffsetY;

    this.mouseHandlerCallback({ pageX, pageY });
  }
}
