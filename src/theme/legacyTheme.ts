import { RechartsTheme } from './RechartsTheme';

/**
 * This is the theme as was the default in 2.x and 3.x branches.
 *
 * It's not very consistent, colors are all over the place and overall exists only for backwards compatibility.
 * Prefer to use either {@link lightTheme} or {@link darkTheme} instead.
 *
 * @deprecated
 * @experimental
 */
export const legacyTheme: RechartsTheme = {
  /**
   * src/cartesian/CartesianAxis.tsx
   */
  axis: {
    stroke: '#666',
  },
  grid: {
    stroke: '#ccc',
    fill: 'none',
  },
  cursor: {
    /**
     * src/component/Cursor.tsx
     */
    stroke: '#ccc',
    /**
     * src/util/cursor/getCursorRectangle.ts
     */
    fill: '#ccc',
  },
  legend: {
    labelStyle: {
      whiteSpace: 'normal',
      overflowWrap: 'break-word',
    },
  },
  tooltip: {
    /**
     * src/component/DefaultTooltipContent.tsx
     */
    contentStyle: {
      margin: 0,
      padding: 10,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      whiteSpace: 'nowrap',
    },
    itemStyle: {
      display: 'block',
      paddingTop: 4,
      paddingBottom: 4,
      color: '#000',
    },
  },
  // components: {
  //   /**
  //    * In 2.x the activeBar does not do anything by default - its styles are identical to inactive bar!
  //    */
  //   activeBar: {},
  //   /**
  //    * Defined in src/component/ActivePoints.tsx
  //    */
  //   activeDot: {
  //     strokeWidth: 2,
  //     stroke: '#fff',
  //     r: 4,
  //     fill: '#3182bd',
  //   },
  //   /**
  //    * src/cartesian/Area.tsx
  //    */
  //   area: {
  //     stroke: '#3182bd',
  //     strokeWidth: 1,
  //     fill: '#3182bd',
  //     fillOpacity: 0.6,
  //   },
  //   bar: {
  //     fill: 'black',
  //   },
  //   barBackground: false,
  //   /**
  //    * Defined in src/cartesian/Line.tsx
  //    */
  //   line: {
  //     stroke: '#3182bd',
  //     strokeWidth: 1,
  //   },
  //   scatter: {
  //     fill: 'black',
  //   },
  // },
};
