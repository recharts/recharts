import * as React from 'react';
import BuiltInPatternsExampleComponent from '../../../www/src/components/GuideView/Patterns/BuiltInPatternsExample';
import GradientsExampleComponent from '../../../www/src/components/GuideView/Patterns/GradientsExample';
import CustomFillsExampleComponent from '../../../www/src/components/GuideView/Patterns/CustomFillsExample';
import ThemePatternsExampleComponent from '../../../www/src/components/GuideView/Patterns/ThemePatternsExample';

type ExampleProps = { isAnimationActive?: boolean };

export const BuiltInPatternsExample = (props: ExampleProps) => <BuiltInPatternsExampleComponent {...props} />;
export const GradientsExample = (props: ExampleProps) => <GradientsExampleComponent {...props} />;
export const CustomFillsExample = (props: ExampleProps) => <CustomFillsExampleComponent {...props} />;
export const ThemePatternsExample = (props: ExampleProps) => <ThemePatternsExampleComponent {...props} />;
