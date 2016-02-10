import _ from 'lodash';

/**
 * Tells if a component should update given it's next props
 * and state.
 *
 * @param {Object} nextProps Next props.
 * @param {Object} nextState Next state.
 * @return {Boolean} Need update or not
*/
function shouldComponentUpdate(nextProps, nextState) {
  return !_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState);
}

/**
 * Makes the given component "pure".
 *
 * @param {Object} component A react component.
 * @return {Object} No return
 */
function pureRenderDecorator(component) {
  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
}

export default pureRenderDecorator;
