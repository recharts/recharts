import _ from 'lodash';

window.perf = {};

/**
 * Tells if a component should update given it's next props
 * and state.
 *
 * @param object nextProps Next props.
 * @param object nextState Next state.
 */
function shouldComponentUpdate(nextProps, nextState) {
  var displayName = this.constructor.displayName;
  if (!window.perf[displayName]) {
    window.perf[displayName] = {
      yes: 0,
      no: 0
    }
  }

  var result = !_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState);

  if (result) {
    window.perf[displayName].yes += 1;
  } else {
    window.perf[displayName].no += 1;
  }
  return result;
}

/**
 * Makes the given component "pure".
 *
 * @param object component Component.
 */
function pureRenderDecorator(component) {
  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
}

export default pureRenderDecorator;
