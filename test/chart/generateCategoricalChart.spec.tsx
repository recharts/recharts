import React from 'react';
import { createDefaultState } from '../../src/chart/generateCategoricalChart';
import { Brush } from '../../src';

describe('generateCategoricalChart', () => {
  describe('createDefaultState', () => {
    describe('Should have the correct dataIndex', () => {
      it('even when invalid brush index(no data)', () => {
        const state = createDefaultState({ children: [<Brush endIndex={-1} startIndex={-1} />] });

        expect(state.dataStartIndex).toEqual(0);
        expect(state.dataEndIndex).toEqual(0);
      });

      it('even when invalid brush index', () => {
        const state = createDefaultState({ children: [<Brush endIndex={-1} startIndex={-1} />], data: [1, 2, 3] });

        expect(state.dataStartIndex).toEqual(0);
        expect(state.dataEndIndex).toEqual(2);
      });

      it('even when data length 0', () => {
        const state = createDefaultState({ children: [<Brush endIndex={-1} startIndex={-1} />], data: [] });

        expect(state.dataStartIndex).toEqual(0);
        expect(state.dataEndIndex).toEqual(0);
      });

      it('when valid brush index', () => {
        const state = createDefaultState({ children: [<Brush endIndex={1} startIndex={0} />], data: [1, 2, 3] });

        expect(state.dataStartIndex).toEqual(0);
        expect(state.dataEndIndex).toEqual(1);
      });
    });
  });
});
