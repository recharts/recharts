import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import { Surface, Text } from '../../src';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { getWordsByLines } from '../../src/component/Text';
import * as DOMUtils from '../../src/util/DOMUtils';
import { assertNotNull } from '../helper/assertNotNull';

describe('<Text />', () => {
  const mockRect = {
    width: 25,
    height: 17,
  };
  beforeEach(() => mockGetBoundingClientRect(mockRect));

  test('retains the legacy fill when no theme is provided', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text>text</Text>
      </Surface>,
    );

    const text = container.querySelector('text');
    assertNotNull(text);
    expect(text).toHaveStyle({ fill: '#808080' });
  });

  test('Does not wrap long text if enough width', () => {
    render(
      <Surface width={300} height={300}>
        <Text role="img" width={300} style={{ fontFamily: 'Courier' }}>
          This is really long text
        </Text>
      </Surface>,
    );

    const text = screen.getByRole('img');
    assertNotNull(text);
    expect(text).toBeInTheDocument();

    expect(text.children).toHaveLength(1);
  });

  test('renders number children', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text width={300} style={{ fontFamily: 'Courier' }}>
          {12345}
        </Text>
      </Surface>,
    );

    const text = container.querySelector('text');
    assertNotNull(text);
    expect(text).toBeInTheDocument();

    expect(text.textContent).toBe('12345');
  });

  test('renders text along a path', () => {
    const pathData = 'M0,0 A10,10,0,1,0,20,0';
    const { container } = render(
      <Surface width={300} height={300}>
        <Text textPath={pathData}>text</Text>
      </Surface>,
    );

    const text = container.querySelector('text');
    assertNotNull(text);
    const path = text.querySelector('defs path');
    const textPath = text.querySelector('textPath');
    assertNotNull(path);
    assertNotNull(textPath);

    expect(path).toHaveAttribute('d', pathData);
    expect(textPath).toHaveAttribute('xlink:href', `#${path.id}`);
    expect(textPath).toHaveTextContent('text');
  });

  describe('textPath interactions', () => {
    const pathData = 'M0,0 A10,10,0,1,0,20,0';

    function getText(container: HTMLElement, id: string): SVGTextElement {
      const text = container.querySelector<SVGTextElement>(`text#${id}`);
      assertNotNull(text);
      return text;
    }

    function getTextPath(text: SVGTextElement): SVGTextPathElement {
      const textPath = text.querySelector<SVGTextPathElement>('textPath');
      assertNotNull(textPath);
      return textPath;
    }

    test('uses width to wrap regular text but not textPath text', () => {
      const content = 'one two';
      const { container } = render(
        <Surface width={300} height={300}>
          <Text id="wrapped" width={50}>
            {content}
          </Text>
          <Text id="path" textPath={pathData} width={50}>
            {content}
          </Text>
        </Surface>,
      );

      expect(getText(container, 'wrapped').querySelectorAll('tspan')).toHaveLength(2);

      const pathText = getText(container, 'path');
      expect(pathText.querySelectorAll('tspan')).toHaveLength(0);
      expect(getTextPath(pathText)).toHaveTextContent(content);
    });

    test('uses breakAll for regular text but not textPath text', () => {
      const content = 'abcd';
      const { container } = render(
        <Surface width={300} height={300}>
          <Text id="word-break" width={50}>
            {content}
          </Text>
          <Text id="character-break" width={50} breakAll>
            {content}
          </Text>
          <Text id="path" textPath={pathData} width={50} breakAll>
            {content}
          </Text>
        </Surface>,
      );

      expect(getText(container, 'word-break').querySelectorAll('tspan')).toHaveLength(1);
      expect(getText(container, 'character-break').querySelectorAll('tspan')).toHaveLength(4);

      const pathText = getText(container, 'path');
      expect(pathText.querySelectorAll('tspan')).toHaveLength(0);
      expect(getTextPath(pathText)).toHaveTextContent(content);
    });

    test('uses lineHeight for regular text but not textPath text', () => {
      const content = 'one two';
      const { container } = render(
        <Surface width={300} height={300}>
          <Text id="line-height" width={50} lineHeight="2em">
            {content}
          </Text>
          <Text id="path" textPath={pathData} width={50} lineHeight="2em">
            {content}
          </Text>
        </Surface>,
      );

      const lineHeightText = getText(container, 'line-height');
      const lineHeightTspans = lineHeightText.querySelectorAll('tspan');
      expect(lineHeightTspans).toHaveLength(2);
      expect(lineHeightTspans[1]).toHaveAttribute('dy', '2em');

      const pathText = getText(container, 'path');
      expect(pathText.querySelectorAll('tspan')).toHaveLength(0);
      expect(getTextPath(pathText)).not.toHaveAttribute('dy');
    });

    test('uses maxLines for regular text but not textPath text', () => {
      const content = 'one two three four five six';
      const { container } = render(
        <Surface width={300} height={300}>
          <Text id="unlimited" width={100}>
            {content}
          </Text>
          <Text id="limited" width={100} maxLines={1}>
            {content}
          </Text>
          <Text id="path" textPath={pathData} width={100} maxLines={1}>
            {content}
          </Text>
        </Surface>,
      );

      expect(getText(container, 'unlimited').querySelectorAll('tspan').length).toBeGreaterThan(1);

      const limitedText = getText(container, 'limited');
      expect(limitedText.querySelectorAll('tspan')).toHaveLength(1);
      expect(limitedText.textContent).toMatch(/…$/);

      const pathText = getText(container, 'path');
      expect(pathText.querySelectorAll('tspan')).toHaveLength(0);
      expect(getTextPath(pathText)).toHaveTextContent(content);
    });

    test('uses verticalAnchor for regular text but not textPath text', () => {
      const { container } = render(
        <Surface width={300} height={300}>
          <Text id="start" verticalAnchor="start">
            text
          </Text>
          <Text id="end" verticalAnchor="end">
            text
          </Text>
          <Text id="path-start" textPath={pathData} verticalAnchor="start">
            text
          </Text>
          <Text id="path-end" textPath={pathData} verticalAnchor="end">
            text
          </Text>
        </Surface>,
      );

      const startText = getText(container, 'start').querySelector('tspan');
      const endText = getText(container, 'end').querySelector('tspan');
      assertNotNull(startText);
      assertNotNull(endText);
      expect(startText.getAttribute('dy')).not.toEqual(endText.getAttribute('dy'));

      for (const id of ['path-start', 'path-end']) {
        const pathText = getText(container, id);
        expect(pathText.querySelectorAll('tspan')).toHaveLength(0);
        expect(getTextPath(pathText)).not.toHaveAttribute('dy');
      }
    });

    test('keeps textAnchor and styles when textPath is set', () => {
      const { container } = render(
        <Surface width={300} height={300}>
          <Text id="regular" textAnchor="middle" style={{ fontSize: 20 }}>
            text
          </Text>
          <Text id="path" textPath={pathData} textAnchor="middle" style={{ fontSize: 20 }}>
            text
          </Text>
        </Surface>,
      );

      for (const id of ['regular', 'path']) {
        const text = getText(container, id);
        expect(text).toHaveAttribute('text-anchor', 'middle');
        expect(text).toHaveStyle({ fontSize: '20px' });
      }
    });
  });

  test('renders boolean children', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text width={300} style={{ fontFamily: 'Courier' }}>
          {true}
        </Text>
      </Surface>,
    );

    const text = container.querySelector('text');
    assertNotNull(text);
    expect(text).toBeInTheDocument();
    expect(text.textContent).toBe('true');
  });

  test('renders the string "NaN" when children is NaN', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text width={300} style={{ fontFamily: 'Courier' }}>
          {NaN}
        </Text>
      </Surface>,
    );

    const text = container.querySelector('text');
    assertNotNull(text);
    expect(text).toBeInTheDocument();
    expect(text.textContent).toBe('NaN');
  });

  test.each([null, undefined] as const)('Renders nothing when children is %s', (children: null | undefined) => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text width={300} style={{ fontFamily: 'Courier' }}>
          {children}
        </Text>
      </Surface>,
    );

    const text = container.querySelector('text');
    expect(text).not.toBeInTheDocument();
  });

  test('renders object object when children are React elements', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        {/* @ts-expect-error typescript is correct here, Text doesn't accept ReactElement, the test is to demonstrate that */}
        <Text width={300} style={{ fontFamily: 'Courier' }}>
          <tspan x="0" dy="1.2em">
            Hello
          </tspan>
          <tspan x="0" dy="1.2em">
            World
          </tspan>
        </Text>
      </Surface>,
    );

    const text = container.querySelector('text');
    assertNotNull(text);
    expect(text).toBeInTheDocument();
    expect(text.textContent).toBe('[object Object],[object Object]');
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

  test('Renders nothing when x or y is a percentage', () => {
    render(
      <Surface width={300} height={200}>
        <Text role="img" x="50%" y="50%">
          anything
        </Text>
      </Surface>,
    );

    const text = screen.queryByRole('img');
    expect(text).not.toBeInTheDocument();
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
        throw new Error(`Missing mock width for text "${text}"`);
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

describe('scaleToFit=true', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 50, height: 20 });
  });

  it('scales text to fit the width', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text width={200} scaleToFit>
          This is really long text
        </Text>
      </Surface>,
    );

    const text = container.querySelector('text');
    assertNotNull(text);
    expect(text).toBeInTheDocument();
    expect(text).toHaveAttribute('transform', 'scale(0.5714285714285714)');
  });

  it('does not scale text to fit if width is not provided', () => {
    const { container } = render(
      <Surface width={300} height={200}>
        <Text scaleToFit>This is really long text</Text>
      </Surface>,
    );

    const text = container.querySelector('text');
    assertNotNull(text);
    expect(text).toBeInTheDocument();
    expect(text).toHaveAttribute('transform', 'scale(1)');
  });

  it('should not throw errors if no children are provided', () => {
    // https://github.com/recharts/recharts/issues/6190
    const { container } = render(
      <Surface width={300} height={200}>
        <Text width={200} scaleToFit />
      </Surface>,
    );

    const text = container.querySelector('text');
    expect(text).not.toBeInTheDocument();
  });
});
