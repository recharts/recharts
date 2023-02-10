import { render } from '@testing-library/react';
import React from 'react';
import { Surface, ZAxis } from '../../src';

describe('<ZAxis />', () => {
  it("Don't render anything", () => {
    render(
      <Surface width={500} height={500}>
        <ZAxis dataKey="x" name="stature" unit="cm" />
      </Surface>,
    );
    const svg = document.querySelector('svg');

    expect(svg).toBeInTheDocument();
    expect(svg?.children).toHaveLength(2);
  });
});
