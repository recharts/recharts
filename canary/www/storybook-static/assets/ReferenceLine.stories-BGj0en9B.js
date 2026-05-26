import{e}from"./iframe-C389UKKQ.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-CrN5wbYA.js";import{g as m}from"./arrayEqualityCheck-Cu2SMg-k.js";import{C as p}from"./ComposedChart-Bc2F2Aqn.js";import{p as d}from"./Page-DPte-9pC.js";import{C as u}from"./CartesianGrid-CruiBcA5.js";import{X as c}from"./XAxis-CkTpgH_L.js";import{Y as h}from"./YAxis-DdPwtx1e.js";import{L as y}from"./Line-CTNqbcwQ.js";import{R as f}from"./RechartsHookInspector-CxbWCB6n.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-BRJkvvA0.js";import"./resolveDefaultProps-2PDdAmjP.js";import"./Label-BsU6QA-m.js";import"./Text-CdmDvBPW.js";import"./DOMUtils-CjAbMbXQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-OX2yCAej.js";import"./zIndexSlice-DHdgWlAr.js";import"./immer-4pDlWF5t.js";import"./CartesianAxis-BfjJ9MKk.js";import"./types-9ii6Ug_u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BUt1aBWJ.js";import"./RechartsWrapper-De-O4PZ_.js";import"./index-CDhhJ3He.js";import"./hooks-yBoCoA8O.js";import"./axisSelectors-B2s8T9Mh.js";import"./d3-scale-CLP74tcR.js";import"./CategoricalChart-C8H-MuO4.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-3kGQQmyR.js";import"./chartDataContext-UATbZCFS.js";import"./Curve-DBcCTjlE.js";import"./step-DbNUII7N.js";import"./path-DyVhHtw_.js";import"./ReactUtils-B3LU80BF.js";import"./ActivePoints-CgiRv0IS.js";import"./Dot-BzYUQbpy.js";import"./RegisterGraphicalItemId-e2Xsds3X.js";import"./ErrorBarContext-BnMue-Vz.js";import"./GraphicalItemClipPath-CCvWImiO.js";import"./SetGraphicalItem-DcN0Hr85.js";import"./useAnimationId-CxUXlcSZ.js";import"./getRadiusAndStrokeWidthFromDot-DD7Lnopo.js";import"./ActiveShapeUtils-FSjQNWDr.js";import"./index-BR3VF3oH.js";import"./ChartSizeDimensions-BBcqsgSH.js";import"./OffsetShower-CIf7NCdz.js";import"./PlotAreaShower-DabrICzc.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
(e.g., a band scale). This determines where within the band
the line is drawn.`,control:{type:"select"},options:["end","middle","start"],table:{type:{summary:'"end" | "middle" | "start"'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},segment:{description:"Tuple of coordinates. If defined, renders a diagonal line segment.",table:{type:{summary:"[{ x?: XValueType | undefined; y?: YValueType | undefined; }, { x?: XValueType | undefined; y?: YValueType | undefined; }]"},category:"General"}},shape:{table:{type:{summary:"Function | ReactNode"},category:"General"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1"}},defaultValue:1},x:{description:`If defined, renders a vertical line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:"number | string"},category:"General"}},xAxisId:{description:`The id of x-axis which is corresponding to the data.
Required when there are multiple XAxes.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},y:{description:`If defined, renders a horizontal line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:"number | string"},category:"General"}},yAxisId:{description:`The id of y-axis which is corresponding to the data.
Required when there are multiple YAxes.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ye={argTypes:n,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(i,{...s}),e.createElement(y,{dataKey:"uv"}),e.createElement(f,null))),args:{...l(n),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <ReferenceLine {...args} />
          <Line dataKey="uv" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ReferenceLineArgs),
    y: 1520,
    stroke: 'blue',
    strokeWidth: 2,
    strokeDasharray: '4 1',
    label: 'My example label'
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const fe=["API"];export{t as API,fe as __namedExportsOrder,ye as default};
