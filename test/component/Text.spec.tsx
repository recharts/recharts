import { render, screen } from '@testing-library/react';
import React from 'react';
import { Surface, Text } from '../../src';

describe('<Text />', () => {
  const mock = {
    x: 200,
    y: 100,
    width: 25,
    height: 17,
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    toJSON: jest.fn(),
  };
  Element.prototype.getBoundingClientRect = jest.fn(() => mock);

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
    Element.prototype.getBoundingClientRect = jest.fn(() => ({ ...mock, width: 40 }));
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
    expect((text?.children[0] as SVGTSpanElement).attributes).not.toContain('transform');
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
      const lastChild = text?.children[text?.children?.length - 1];
      const lastLetter = lastChild.textContent?.[lastChild?.textContent?.length - 1];

      expect(lastLetter).toEqual('…');
    });

    // test('adds an ellipsis at the end of a very long word', () => {
    //   Element.prototype.getBoundingClientRect = jest.fn(() => ({ ...mock, width: 1 }));
    //   const testString =
    //     'longwooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooord';
    //   render(
    //     <Text role="img" width={200} maxLines={1}>
    //       {testString}
    //     </Text>,
    //   );

    //   const text = screen.getByRole('img');
    //   expect(text).toBeInTheDocument();
    //   const lastChild = text?.children[text?.children?.length - 1];
    //   const lastLetter = lastChild.textContent?.[lastChild?.textContent?.length - 1];

    //   expect(lastLetter).toEqual('…');
    // });
  });
});
