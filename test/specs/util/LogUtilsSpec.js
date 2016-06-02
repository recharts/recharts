import React from 'react';
import { expect } from 'chai';
import { warn } from '../../../src/util/LogUtils';


describe('LogUtils', () => {
  it('warn when format is null', () => {
    warn(true);
  });

  it('warn when condition is false', () => {
    warn(false, 'format');
    warn(false);
    warn(false, 'format width variable %s', 0);
  });
});
