export function shallowEqual(a, b) {
  /* eslint-disable no-restricted-syntax */
  for (var key in a) {
    if ({}.hasOwnProperty.call(a, key) && (!{}.hasOwnProperty.call(b, key) || a[key] !== b[key])) {
      return false;
    }
  }
  for (var _key in b) {
    if ({}.hasOwnProperty.call(b, _key) && !{}.hasOwnProperty.call(a, _key)) {
      return false;
    }
  }
  return true;
}

function shouldComponentUpdate(props, state) {
  return !shallowEqual(props, this.props) || !shallowEqual(state, this.state);
}

export default function pureRenderDecorator(component) {
  // eslint-disable-next-line no-param-reassign
  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
}