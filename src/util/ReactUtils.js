/* eslint no-unused-expressions: 0 */
import React from 'react';

export default {
  /*
   * Find and return all matched children by type. `type` can be a React element class or
   * string
   */
  findAllByType(children, type) {
    const result = [];
    let childType = type;

    if (type && type.displayName) {
      childType = type.displayName;
    }

    React.Children.forEach(children, child => {
      if (child && child.type && child.type.displayName === childType) {
        result.push(child);
      }
    });

    return result;
  },

  /*
   * Return the first matched child by type, return null otherwise.
   * `type` can be a React element class or string.
   */
  findChildByType(children, type) {
    const result = this.findAllByType(children, type);

    return result && result[0];
  },

  /*
   * Create a new array of children excluding the ones matched the type
   */
  withoutType(children) {
    const newChildren = [];
    let types = [].slice.call(arguments, 1);

    types = types.map(type => {
      if (type && type.displayName) { return type.displayName; }
      return type;
    });

    React.Children.forEach(children, child => {
      if (child && child.type && child.type.displayName && types.indexOf(child.type.displayName) !== -1) {
        return;
      }
      newChildren.push(child);
    });

    return newChildren;
  },
};
