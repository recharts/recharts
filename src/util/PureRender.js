
export function shallowEqual(a, b) {
  /* eslint-disable no-restricted-syntax */
  for (const key in a) {
    if (a.hasOwnProperty(key) && (!b.hasOwnProperty(key) || a[key] !== b[key])) {
      return false;
    }
  }
  for (const key in b) {
    if (b.hasOwnProperty(key) && !a.hasOwnProperty(key)) {
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
