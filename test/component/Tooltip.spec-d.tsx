import * as React from 'react';
import { describe, it, expectTypeOf } from 'vitest';
import { ContentType, TooltipContentProps } from '../../src/component/Tooltip';
import { Payload } from '../../src/component/DefaultTooltipContent';
import { TooltipPayload } from '../../src/state/tooltipSlice';

describe('TooltipContentProps payload type', () => {
  it('should preserve generic type parameters in payload', () => {
    type MyValue = number;
    type MyName = string;

    type Props = TooltipContentProps<MyValue, MyName>;
    expectTypeOf<Props['payload']>().toEqualTypeOf<TooltipPayload<MyValue, MyName>>();
    expectTypeOf<Props['payload']>().toEqualTypeOf<ReadonlyArray<Payload<MyValue, MyName>>>();
  });

  it('should default to ValueType and NameType when no generics are provided', () => {
    type Props = TooltipContentProps;
    expectTypeOf<Props['payload']>().toEqualTypeOf<TooltipPayload>();
  });

  it('should pass generic types through ContentType callback', () => {
    type MyValue = number;
    type MyName = string;

    type MyContent = ContentType<MyValue, MyName>;
    type CallbackContent = Extract<MyContent, (props: TooltipContentProps<MyValue, MyName>) => React.ReactNode>;
    expectTypeOf<Parameters<CallbackContent>[0]['payload']>().toEqualTypeOf<ReadonlyArray<Payload<MyValue, MyName>>>();
  });
});
