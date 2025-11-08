import { describe, it, expect } from 'vitest';
import { ProjectDocReader } from './readProject';
import { ApiDocReader } from './readApiDoc';
import { StorybookDocReader } from './readStorybookDoc';

describe('omnidoc - documentation consistency', () => {
  const projectReader = new ProjectDocReader();
  const apiDocReader = new ApiDocReader();
  const storybookReader = new StorybookDocReader();

  it('all API doc symbols must exist in the project', () => {
    const projectSymbols = new Set(projectReader.getPublicSymbolNames());
    const apiDocSymbols = apiDocReader.getPublicSymbolNames();

    const missingInProject: string[] = [];

    for (const symbol of apiDocSymbols) {
      if (!projectSymbols.has(symbol)) {
        missingInProject.push(symbol);
      }
    }

    if (missingInProject.length > 0) {
      console.error(
        `Found ${missingInProject.length} symbol(s) documented in API docs but not exported from the project:`,
        missingInProject,
      );
    }

    expect(missingInProject).toEqual([]);
  });

  it('all Storybook symbols must exist in the project', () => {
    const projectSymbols = new Set(projectReader.getPublicSymbolNames());
    const storybookSymbols = storybookReader.getPublicSymbolNames();

    const missingInProject: string[] = [];

    for (const symbol of storybookSymbols) {
      if (!projectSymbols.has(symbol)) {
        missingInProject.push(symbol);
      }
    }

    if (missingInProject.length > 0) {
      console.error(
        `Found ${missingInProject.length} symbol(s) documented in Storybook but not exported from the project:`,
        missingInProject,
      );
    }

    expect(missingInProject).toEqual([]);
  });

  it('all API doc props must exist in the project', () => {
    const apiDocSymbols = apiDocReader.getPublicComponentNames();
    const missingProps: Array<{ component: string; prop: string }> = [];

    for (const component of apiDocSymbols) {
      const apiDocProps = apiDocReader.getRechartsPropsOf(component);
      /*
       * Here we intentionally get all props including SVG inherited ones.
       * It's okay to document SVG props on recharts website!
       */
      const projectProps = new Set(projectReader.getAllPropsOf(component));

      for (const prop of apiDocProps) {
        if (!projectProps.has(prop)) {
          missingProps.push({ component, prop });
        }
      }
    }

    if (missingProps.length > 0) {
      console.error(
        `Found ${missingProps.length} prop(s) documented in API docs but not exported from the project:`,
        missingProps,
      );
    }

    expect(missingProps).toMatchInlineSnapshot(`
      [
        {
          "component": "RadarChart",
          "prop": "clockWise",
        },
        {
          "component": "ScatterChart",
          "prop": "onMouseOver",
        },
        {
          "component": "ScatterChart",
          "prop": "onMouseOut",
        },
        {
          "component": "Sankey",
          "prop": "linkWidth",
        },
        {
          "component": "Sankey",
          "prop": "sourceX",
        },
        {
          "component": "Sankey",
          "prop": "sourceY",
        },
        {
          "component": "Sankey",
          "prop": "sourceControlX",
        },
        {
          "component": "Sankey",
          "prop": "targetControlX",
        },
        {
          "component": "Area",
          "prop": "points",
        },
        {
          "component": "Bar",
          "prop": "layout",
        },
        {
          "component": "Bar",
          "prop": "data",
        },
        {
          "component": "Line",
          "prop": "points",
        },
        {
          "component": "Scatter",
          "prop": "points",
        },
        {
          "component": "Brush",
          "prop": "data",
        },
        {
          "component": "Funnel",
          "prop": "trapezoids",
        },
        {
          "component": "Tooltip",
          "prop": "viewBox",
        },
        {
          "component": "Tooltip",
          "prop": "coordinate",
        },
        {
          "component": "Tooltip",
          "prop": "payload",
        },
        {
          "component": "Tooltip",
          "prop": "label",
        },
        {
          "component": "LabelList",
          "prop": "data",
        },
        {
          "component": "Pie",
          "prop": "valueKey",
        },
        {
          "component": "RadialBar",
          "prop": "maxAngle",
        },
        {
          "component": "RadialBar",
          "prop": "minAngle",
        },
        {
          "component": "ReferenceLine",
          "prop": "alwaysShow",
        },
        {
          "component": "ReferenceLine",
          "prop": "viewBox",
        },
        {
          "component": "ReferenceLine",
          "prop": "xAxis",
        },
        {
          "component": "ReferenceLine",
          "prop": "yAxis",
        },
        {
          "component": "ReferenceLine",
          "prop": "isFront",
        },
        {
          "component": "ReferenceDot",
          "prop": "alwaysShow",
        },
        {
          "component": "ReferenceDot",
          "prop": "xAxis",
        },
        {
          "component": "ReferenceDot",
          "prop": "yAxis",
        },
        {
          "component": "ReferenceDot",
          "prop": "isFront",
        },
        {
          "component": "ReferenceArea",
          "prop": "alwaysShow",
        },
        {
          "component": "ReferenceArea",
          "prop": "xAxis",
        },
        {
          "component": "ReferenceArea",
          "prop": "yAxis",
        },
        {
          "component": "ReferenceArea",
          "prop": "isFront",
        },
      ]
    `);
  });

  it('all Storybook props must exist in the project', () => {
    const storybookSymbols = storybookReader.getPublicComponentNames();
    const missingProps: Array<{ component: string; prop: string }> = [];

    for (const component of storybookSymbols) {
      const storybookProps = storybookReader.getRechartsPropsOf(component);
      /*
       * Here we intentionally get all props including SVG inherited ones.
       * It's okay to document SVG props on storybook!
       */
      const projectProps = new Set(projectReader.getAllPropsOf(component));

      for (const prop of storybookProps) {
        if (!projectProps.has(prop)) {
          missingProps.push({ component, prop });
        }
      }
    }

    if (missingProps.length > 0) {
      console.error(
        `Found ${missingProps.length} prop(s) documented in Storybook but not exported from the project:`,
        missingProps,
      );
    }

    expect(missingProps).toMatchInlineSnapshot(`
      [
        {
          "component": "AreaChart",
          "prop": "defaultShowTooltip",
        },
        {
          "component": "BarChart",
          "prop": "defaultShowTooltip",
        },
        {
          "component": "Cell",
          "prop": "onPointerEnterCapture",
        },
        {
          "component": "Cell",
          "prop": "onPointerLeaveCapture",
        },
        {
          "component": "ComposedChart",
          "prop": "defaultShowTooltip",
        },
        {
          "component": "Funnel",
          "prop": "activeDot",
        },
        {
          "component": "Funnel",
          "prop": "unit",
        },
        {
          "component": "Funnel",
          "prop": "xAxisId",
        },
        {
          "component": "Funnel",
          "prop": "yAxisId",
        },
        {
          "component": "FunnelChart",
          "prop": "activeIndex",
        },
        {
          "component": "FunnelChart",
          "prop": "activeShape",
        },
        {
          "component": "FunnelChart",
          "prop": "defaultShowTooltip",
        },
        {
          "component": "FunnelChart",
          "prop": "shape",
        },
        {
          "component": "LineChart",
          "prop": "defaultShowTooltip",
        },
        {
          "component": "Pie",
          "prop": "activeIndex",
        },
        {
          "component": "PieChart",
          "prop": "activeIndex",
        },
        {
          "component": "PieChart",
          "prop": "activeShape",
        },
        {
          "component": "PieChart",
          "prop": "defaultShowTooltip",
        },
        {
          "component": "RadarChart",
          "prop": "defaultShowTooltip",
        },
        {
          "component": "RadialBar",
          "prop": "activeIndex",
        },
        {
          "component": "RadialBarChart",
          "prop": "defaultShowTooltip",
        },
        {
          "component": "ReferenceDot",
          "prop": "clipPathId",
        },
        {
          "component": "ReferenceDot",
          "prop": "xAxis",
        },
        {
          "component": "ReferenceDot",
          "prop": "yAxis",
        },
        {
          "component": "ReferenceLine",
          "prop": "clipPathId",
        },
        {
          "component": "ReferenceLine",
          "prop": "viewBox",
        },
        {
          "component": "ReferenceLine",
          "prop": "xAxis",
        },
        {
          "component": "ReferenceLine",
          "prop": "yAxis",
        },
        {
          "component": "ScatterChart",
          "prop": "defaultShowTooltip",
        },
        {
          "component": "Sector",
          "prop": "animationBegin",
        },
        {
          "component": "Sector",
          "prop": "animationDuration",
        },
        {
          "component": "Sector",
          "prop": "animationEasing",
        },
        {
          "component": "Sector",
          "prop": "dangerouslySetInnerHTML",
        },
        {
          "component": "Sector",
          "prop": "isAnimationActive",
        },
        {
          "component": "SunburstChart",
          "prop": "margin",
        },
        {
          "component": "Text",
          "prop": "content",
        },
        {
          "component": "Tooltip",
          "prop": "coordinate",
        },
        {
          "component": "Tooltip",
          "prop": "label",
        },
        {
          "component": "Tooltip",
          "prop": "payload",
        },
        {
          "component": "Tooltip",
          "prop": "viewBox",
        },
        {
          "component": "Trapezoid",
          "prop": "isAnimationActive",
        },
        {
          "component": "YAxis",
          "prop": "xAxisId",
        },
      ]
    `);
  });
});
