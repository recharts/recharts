import{R as e}from"./iframe-1Nx1Hwd8.js";import{g as l}from"./utils-ePvtT4un.js";import{R as o}from"./ReferenceLine-CFdd6HH4.js";import{R as m}from"./zIndexSlice-BPgffy3O.js";import{C as p}from"./ComposedChart-DwgM-9LJ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DiEp70pS.js";import{X as u}from"./XAxis-Iy9-nOhv.js";import{Y as h}from"./YAxis-CLaAdl_L.js";import{L as y}from"./Line-N-ZSdJCU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-CY3HNiYQ.js";import"./resolveDefaultProps-BuS60Zcm.js";import"./Label-CzY3tv0Q.js";import"./Text-D7Dvlpl9.js";import"./DOMUtils-CyzSDn7U.js";import"./isWellBehavedNumber-BZkA4GqO.js";import"./useId-y9Z6ZhpG.js";import"./useBackwardsCompatibleTheme-CJcbMh-P.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CgXwR33B.js";import"./index-BxODcotD.js";import"./index-BxXrUDFi.js";import"./CartesianAxis-zUKk9a_2.js";import"./types-CW2QSzeT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DdDjPDgD.js";import"./throttle-BvcOGqjl.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DOZVWK-P.js";import"./index-DrfO8rcp.js";import"./index-DuNxWLhT.js";import"./axisSelectors-C77-vGCj.js";import"./d3-scale-B_Ed44y-.js";import"./CategoricalChart-CmvqfSaL.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-CfBDZXwX.js";import"./chartDataContext-B9qtLtUj.js";import"./Curve-BLyT9pX_.js";import"./step-DiCJ9NfT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CvXLsYG2.js";import"./useAnimationId-BUamwr57.js";import"./ActivePoints-C0mFYRu2.js";import"./Dot-CrNXlHuf.js";import"./RegisterGraphicalItemId-Ctsh4Fgt.js";import"./ErrorBarContext-aNneKhPH.js";import"./GraphicalItemClipPath-l6BikrPU.js";import"./SetGraphicalItem-CfAx1sDn.js";import"./getRadiusAndStrokeWidthFromDot-BvpolENt.js";import"./ActiveShapeUtils-K1kvzU25.js";import"./graphicalItemIdentity-CdZfZkJ-.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
(e.g., a band scale). This determines where within the band
the line is drawn.`,control:{type:"select"},options:["end","middle","start"],table:{type:{summary:'"end" | "middle" | "start"'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},segment:{description:"Tuple of coordinates. If defined, renders a diagonal line segment.",table:{type:{summary:"[{ x?: XValueType | undefined; y?: YValueType | undefined; }, { x?: XValueType | undefined; y?: YValueType | undefined; }]"},category:"General"}},shape:{table:{type:{summary:"Function | ReactNode"},category:"General"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},x:{description:`If defined, renders a vertical line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:"number | string"},category:"General"}},xAxisId:{description:`The id of x-axis which is corresponding to the data.
Required when there are multiple XAxes.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},y:{description:`If defined, renders a horizontal line on this position.

This value is using your chart's domain, so you will provide a data value instead of a pixel value.
ReferenceLine will internally calculate the correct pixel position.`,table:{type:{summary:"number | string"},category:"General"}},yAxisId:{description:`The id of y-axis which is corresponding to the data.
Required when there are multiple YAxes.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ye={argTypes:n,component:o},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(o,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(n),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const fe=["API"];export{t as API,fe as __namedExportsOrder,ye as default};
