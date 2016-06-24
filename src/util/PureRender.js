import _ from 'lodash';

function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  const bHasOwnProperty = hasOwnProperty.bind(objB);
  for (let i = 0; i < keysA.length; i++) {
    const keyA = keysA[i];

    if (objA[keyA] === objB[keyA]) {
      continue;
    }

    // special diff with Array or Object
    if (_.isArray(objA[keyA])) {
      if (!_.isArray(objB[keyA]) || objA[keyA].length !== objB[keyA].length) {
        return false;
      } else if (!_.isEqual(objA[keyA], objB[keyA])) {
        return false;
      }
    } else if (_.isPlainObject(objA[keyA])) {
      if (!_.isPlainObject(objB[keyA]) || !_.isEqual(objA[keyA], objB[keyA])) {
        return false;
      }
    } else if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}


function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

function shouldComponentUpdate(nextProps, nextState) {
  return shallowCompare(this, nextProps, nextState);
}
/* eslint-disable no-param-reassign */
function pureRenderDecorator(component) {
  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
}
export { shallowEqual };
export default pureRenderDecorator;
