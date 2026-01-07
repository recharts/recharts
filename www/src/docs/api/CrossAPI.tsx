import { ApiDoc } from './types';

export const CrossAPI: ApiDoc = {
  name: 'Cross',
  props: [
    { name: 'className', type: 'string', isOptional: true },
    {
      name: 'height',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Height of the cross in pixels.</p>
          </section>
        ),
      },
    },
    {
      name: 'left',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The x-coordinate of the top left point in the boundary box of the cross.</p>
          </section>
        ),
      },
    },
    {
      name: 'top',
      type: 'number',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The y-coordinate of the top left point in the boundary box of the cross.</p>
          </section>
        ),
      },
    },
    {
      name: 'width',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>Width of the cross in pixels.</p>
          </section>
        ),
      },
    },
    {
      name: 'x',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The x-coordinate of the vertical line of the cross in pixels.</p>
          </section>
        ),
      },
    },
    {
      name: 'y',
      type: 'number | string',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>The y-coordinate of the horizontal line of the cross in pixels.</p>
          </section>
        ),
      },
    },
  ],
};
