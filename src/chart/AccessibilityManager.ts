import type { LayoutType, TickItem } from '../util/types';

interface ContainerOffset {
  top: number;
  left: number;
}

interface InitiableOptions {
  coordinateList: TickItem[];
  mouseHandlerCallback: (e: any) => void;
  container: HTMLElement;
  layout: LayoutType;
  offset: ContainerOffset;
}

export class AccessibilityManager {
  private activeIndex = 0;

  private coordinateList: InitiableOptions['coordinateList'] = [];

  private mouseHandlerCallback: InitiableOptions['mouseHandlerCallback'];

  private container: InitiableOptions['container'];

  private layout: InitiableOptions['layout'] = 'horizontal';

  private offset: InitiableOptions['offset'];

  public init({ coordinateList = [], container, layout, offset, mouseHandlerCallback }: InitiableOptions) {
    this.coordinateList = coordinateList;
    this.container = container;
    this.layout = layout;
    this.offset = offset;
    this.mouseHandlerCallback = mouseHandlerCallback;

    if (this.activeIndex >= this.coordinateList.length) {
      this.activeIndex = this.coordinateList.length - 1;
    }
  }

  public focus() {
    this.spoofMouse();
  }

  public keyboardEvent(e: any) {
    console.log(e);
    switch (e.key) {
      case 'ArrowRight': {
        console.log('arrow right', this.layout);
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
      case 'ArrowUp': {
        if (this.layout !== 'vertical') {
          return;
        }
        this.activeIndex = Math.max(this.activeIndex - 1, 0);
        this.spoofMouse();
        break;
      }
      case 'ArrowDown': {
        if (this.layout !== 'vertical') {
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

  private spoofMouse() {
    console.log('spoof mouse');
    const { x, y } = this.container.getBoundingClientRect();
    const { coordinate } = this.coordinateList[this.activeIndex];

    const pageX = x + (this.layout === 'horizontal' ? coordinate : 100);
    const pageY = y + (this.layout === 'vertical' ? coordinate : this.offset.top);

    this.mouseHandlerCallback({ pageX, pageY });
  }
}
