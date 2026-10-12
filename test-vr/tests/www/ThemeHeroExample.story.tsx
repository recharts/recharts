import React, { ComponentProps } from 'react';
import ThemeHeroExampleComponent from '../../../www/src/components/GuideView/Theming/ThemeHeroExample';

/*
 * The width is close to the content column of the website, where the hero has two rows of two charts.
 */
export const ThemeHeroExample = (props: ComponentProps<typeof ThemeHeroExampleComponent>) => (
  <div style={{ width: 800 }}>
    <ThemeHeroExampleComponent {...props} />
  </div>
);
