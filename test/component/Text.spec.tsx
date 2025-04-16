import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import { Surface, Text } from '../../src';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { getWordsByLines } from '../../src/component/Text';
import * as DOMUtils from '../../src/util/DOMUtils';

describe('<Text />', () => {
  const mockRect = {
    width: 25,
    height: 17,
  };
  beforeEach(() => mockGetBoundingClientRect(mockRect));

  test('Does not wrap long text if enough width', () => {
    render(
      <Surface width={300} height={300}>
        <Text role="img" width={300} style={{ fontFamily: 'Courier' }}>
          This is really long text
        </Text>
      </Surface>,
    );

    const text = screen.getByRole('img');
    expect(text).toBeInTheDocument();

    expect(text?.children).toHaveLength(1);
  });

  test('Wraps long text if not enough width', () => {
    render(
      <Surface width={200} height={200}>
        <Text role="img" width={200} style={{ fontFamily: 'Courier' }}>
          This is really long text for 200px
        </Text>
      </Surface>,
    );
    const text = screen.getByRole('img');
    expect(text).toBeInTheDocument();

    expect(text?.children).toHaveLength(2);
  });

  test('Wraps long text if styled but would have had enough room', () => {
    mockGetBoundingClientRect({ ...mockRect, width: 40 });
    render(
      <Surface width={300} height={200}>
        <Text role="img" width={300} style={{ fontSize: '2em', fontFamily: 'Courier' }}>
          This is really long text
        </Text>
      </Surface>,
    );

    const text = screen.getByRole('img');
    expect(text).toBeInTheDocument();

    expect(text?.children).toHaveLength(2);
  });

  test('Does not perform word length calculation if width or scaleToFit props not set', () => {
    render(
      <Surface width={300} height={200}>
        <Text role="img">This is really long text</Text>
      </Surface>,
    );

    const text = screen.getByRole('img');
    expect(text).toBeInTheDocument();

    expect(text?.children).toHaveLength(1);
    // we know that the children that get rendered under `text` are `tspan` - this is a safe cast if we get a result
    const { transform } = (text?.children[0] as SVGTSpanElement).attributes as NamedNodeMap & { transform: unknown };
    expect(transform).toBeUndefined();
  });

  test('Render 0 successfully when width is specified', () => {
    render(
      <Surface width={300} height={200}>
        <Text role="img" x={0} y={0} width={30}>
          {0}
        </Text>
      </Surface>,
    );

    const text = screen.getByRole('img');
    expect(text).toBeInTheDocument();

    setTimeout(() => {
      expect(text.textContent).toContain('0');
    }, 1000);
  });

  test('Render 0 successfully when width is not specified', () => {
    render(
      <Surface width={300} height={200}>
        <Text role="img" x={0} y={0}>
          {0}
        </Text>
      </Surface>,
    );

    const text = screen.getByRole('img');
    expect(text).toBeInTheDocument();

    setTimeout(() => {
      expect(text.textContent).toContain('0');
    }, 1000);
  });

  test('Render text when x or y is a percentage', () => {
    render(
      <Surface width={300} height={200}>
        <Text role="img" x="50%" y="50%">
          anything
        </Text>
      </Surface>,
    );

    const text = screen.getByRole('img');
    expect(text).toBeInTheDocument();

    setTimeout(() => {
      expect(text.textContent).toContain('anything');
    }, 1000);
  });

  test("Don't Render text when x or y is NaN", () => {
    render(
      <Surface width={300} height={200}>
        <Text role="img" x={NaN} y={10}>
          anything
        </Text>
      </Surface>,
    );

    const text = screen.queryByRole('img');
    expect(text).not.toBeInTheDocument();
  });

  test('Only split contents on breaking spaces', () => {
    const testString = 'These spaces\tshould\nbreak,\rbut\xA0these\xA0should\xA0not.';
    render(
      <Surface width={300} height={200}>
        <Text role="img" width="auto">
          {testString}
        </Text>
      </Surface>,
    );

    const text = screen.getByRole('img');
    expect(text).toBeInTheDocument();

    expect(text?.children).toHaveLength(5);
  });

  describe('maxLines', () => {
    test('does not do anything when maxLines are not exceeded', () => {
      render(
        <Surface width={300} height={200}>
          <Text role="img" width={500} maxLines={3}>
            test
          </Text>
        </Surface>,
      );
      render(
        <Surface width={300} height={200}>
          <Text role="img" width={500}>
            test
          </Text>
        </Surface>,
      );

      const text = screen.getAllByRole('img');
      expect(text[0]).toBeInTheDocument();

      expect(text[0]?.textContent).toEqual(text[1]?.textContent);
    });

    test('limits the output to maxLines', () => {
      const testString = `Lorem ratione omnis fuga dignissimos in amet. Minus quam architecto non ea iste!
        Nihil amet in itaque error velit. Corporis autem sequi aut temporibus placeat.
        Perferendis quos veritatis quasi pariatur!`;
      render(
        <Surface width={300} height={200}>
          <Text role="img" width={200} maxLines={2}>
            {testString}
          </Text>
        </Surface>,
      );

      const text = screen.getByRole('img');
      expect(text).toBeInTheDocument();

      expect(text?.children).toHaveLength(2);
    });

    test('adds an ellipsis at the end of the truncated line', () => {
      const testString = `Sit totam suscipit aliquid suscipit eius, cupiditate Aut excepturi ipsum ut suscipit
        facilis debitis Provident impedit a distinctio neque quaerat Optio quo quibusdam possimus
        provident accusantium. Molestiae similique nemo labore`;
      render(
        <Surface width={300} height={200}>
          <Text role="img" width={200} maxLines={2}>
            {testString}
          </Text>
        </Surface>,
      );

      const text = screen.getByRole('img');
      expect(text).toBeInTheDocument();
      const lastChild = text.children[text.children.length - 1];
      const lastLetter = lastChild.textContent[lastChild.textContent.length - 1];

      expect(lastLetter).toEqual('…');
    });
  });
});

describe('getWordsByLines', () => {
  function mockGetStringSize(mockedWidths: Record<string, number | undefined>) {
    vi.spyOn(DOMUtils, 'getStringSize').mockImplementation(text => {
      const width = mockedWidths[text];

      if (width == null) {
        console.error(`Missing mock width for text "${text}"`);
        return { width: 0, height: 0 };
      }

      return { width, height: 0 };
    });
  }

  beforeEach(() => {
    mockGetStringSize({
      M: 2,
      Ma: 4,
      'M…': 5,
      Mar: 6,
      'Ma…': 7,
      Marc: 8,
      'Mar…': 9,
      March: 10,
      'Marc…': 11,
      '\u00A0': 1,
    });
  });

  it('returns the original text if it does not overflow', () => {
    const wordsByLines = getWordsByLines({
      width: 11,
      scaleToFit: false,
      children: 'March',
      maxLines: 1,
      breakAll: false,
    });

    expect(wordsByLines).toEqual([{ words: ['March'], width: 10 }]);
  });

  it('returns the original text if it does not overflow and an additional character is narrower than the suffix', () => {
    const wordsByLines = getWordsByLines({
      width: 10,
      scaleToFit: false,
      children: 'March',
      maxLines: 1,
      breakAll: false,
    });

    expect(wordsByLines).toEqual([{ words: ['March'], width: 10 }]);
  });

  it('truncates the text if it overflows and find the largest string with ellipsis that fits', () => {
    const wordsByLines = getWordsByLines({
      width: 7,
      scaleToFit: false,
      children: 'March',
      maxLines: 1,
      breakAll: false,
    });

    expect(wordsByLines).toEqual([{ words: ['Ma…'], width: 7 }]);
  });
});
