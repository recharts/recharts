import React from 'react';
import { describe, it } from 'vitest';
import { Venn } from '../../src';
import { exampleVennData } from '../_data';

describe('Venn types', () => {
  it('should type event handlers', () => {
    <Venn
      width={400}
      height={240}
      data={exampleVennData}
      onClick={_node => {}}
      onMouseEnter={(_node, _event) => {}}
      onMouseLeave={(_node, _event) => {}}
    />;
  });
});
