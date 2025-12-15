import { ApiDoc } from './types';

export const ZIndexLayerAPI: ApiDoc = {
  name: 'ZIndexLayer',
  props: [
    {
      name: 'zIndex',
      type: 'number',
      isOptional: false,
      desc: {
        'en-US': (
          <section>
            <p>Z-Index of this component and its children.</p>
            <p>
              The higher the value, the more on top it will be rendered. Components with higher zIndex will appear in
              front of components with lower zIndex.
            </p>
            <p>
              If <code>undefined</code> or <code>0</code>, the content is rendered in the default layer without portals.
            </p>
          </section>
        ),
      },
    },
    {
      name: 'children',
      type: 'ReactNode',
      isOptional: true,
      desc: {
        'en-US': (
          <section>
            <p>
              The content to render inside this zIndex layer. Undefined children are allowed and will render nothing and
              will still report the zIndex to the portal system.
            </p>
          </section>
        ),
      },
    },
  ],
  desc: {
    'en-US': (
      <section>
        <p>
          A layer that renders its children into a portal corresponding to the given zIndex. We can&#39;t use regular
          CSS <code>z-index</code> because SVG does not support it. So instead, we create separate DOM nodes for each
          zIndex layer and render the children into the corresponding DOM node using React portals.
        </p>
        <p>This component must be used inside a Chart component.</p>
        <p>Available since Recharts 3.4</p>
      </section>
    ),
  },
};
