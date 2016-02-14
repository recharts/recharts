import _ from 'lodash';

function shouldComponentUpdate(nextProps, nextState) {
  return shallowCompare(this, nextProps, nextState);
}

function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

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
    // special diff with Array or Object
    if ((_.isArray(objA[keysA[i]]) || _.isPlainObject(objA[keysA[i]]))
        && _.isEqual(objA[keysA[i]], objB[keysA[i]])) {
      continue;
    }

    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

function pureRenderDecorator(component) {
  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
}


export default pureRenderDecorator;
