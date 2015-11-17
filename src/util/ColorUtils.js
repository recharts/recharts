import R from 'ramda';
import {hcl} from 'd3-color';

export default class ColorUtils {
  constructor(saturation, brightness) {
    this.saturation = saturation;
    this.value = brightness;
  }

  getColor = hue => ColorUtils.hsv2rgb(hue, this.saturation, this.value)

  getColorGroups = (h, scheme) => {
    let arr = [];

    switch(scheme) {
      case 'complementary': //生成互补色
        arr = [h, h+180];
        break;
      case 'analogous':
        arr = [h, h+30, h+330]
        break;
      case 'split-complementary':
        arr = [h, h+150, h+210]
        break;
      case 'triadic': //生成三色系
        arr = [h, h+120, h+240];
        break;
      case 'rectangle': //生成分散互补色系
        arr = [h, h+60, h+180, h+240];
        break;
      case 'square':
        arr = [h, h+90, h+180, h+270]
        break;
    }

    return arr.map(this.getColor)
  }

  getHclColor = (hue, dc = 0, dl = 0) => new hcl(hue, this.saturation * 64 + dc, this.value * 100 + dl).rgb().toString()

  getHclColorGroups = (h, scheme) => {
    let arr = [];

    switch(scheme) {
      case 'complementary': //生成互补色
        arr = [[h+0], [h+180,0,0]];
        break;
      case 'analogous':
        arr = [[h+0], [h+30,0,0], [h+330,0,0]]
        break;
      case 'split-complementary':
        arr = [[h+0], [h+150], [h+210]]
        break;
      case 'triadic': //生成三色系
        arr = [[h+0], [h+120], [h+240]];
        break;
      case 'rectangle': //生成分散互补色系
        arr = [[h+0], [h+60], [h+180], [h+240]];
        break;
      case 'square':
        arr = [[h+0], [h+90], [h+180], [h+270]]
        break;
    }

    return arr.map(v => this.getHclColor(...v))
  }
  /*
   * @param hue 色度，0~360
   * @param saturation 饱和度， 0~1小数
   * @param value 明度 0~1小数
   * @output rgb数组
   */
  static produceOrder(hue, saturation, value) {
    const max = 255*value;
    const min = max*(1 - saturation);
    const midK = 1 - Math.abs((hue%120 - 60)/60);
    const mid = min + midK*(max - min);

    return [max, mid, min];
  }

  static _hsv2rgb(hue, saturation, value) {
    const {round} = Math;
    const side = hue/60;

    if(!saturation) {
      return R.repeat(value, 3).map(round);
    }

    const indices = [[0, 1, 2], [1, 0, 2], [2, 0, 1], [2, 1, 0], [1, 2, 0], [0, 2, 1]][side];
    const vals = ColorUtils.produceOrder(hue, saturation, value);

    return R.repeat({}, 3).map((o, i) => vals[indices[i]]);
  }

  // static gradient(n, ...colors) {
  //   return colors.map(v => v + n).map(v => v < 0 ? 0).map(v => v > 255 ? 255);
  // }

  static hypot(...args) {
    return Math.sqrt(args.map(v => v*v).reduce((res, curr) => res + curr));
  }

  static hsv2rgb(hue, saturation, value) {
    const [max, mid ,min] = ColorUtils.produceOrder(hue, saturation, value);
    const newValue = ColorUtils.hypot(max, min, min)/ColorUtils.hypot(max, min, mid)*value;

    return ColorUtils._hsv2rgb(hue, saturation, newValue);
  }
}
