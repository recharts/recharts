import{R as e}from"./iframe-ClZ97IhH.js";import{g as l}from"./utils-ePvtT4un.js";import{R as o}from"./ReferenceLine-BEOl0Ecw.js";import{R as m}from"./zIndexSlice-C5PhT0E1.js";import{C as p}from"./ComposedChart-B1E1zelw.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-Up-r6Jpo.js";import{X as c}from"./XAxis-CNZNRqSN.js";import{Y as h}from"./YAxis-HP_sdQVr.js";import{L as y}from"./Line-2hGhSOE2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-av8QWZYv.js";import"./resolveDefaultProps-CcaTf9gV.js";import"./Label-Bh1DkGaJ.js";import"./Text-CUeHZ0Lm.js";import"./DOMUtils-C7DdSVbv.js";import"./isWellBehavedNumber-BOULWsxq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DzfxsJEt.js";import"./index-CrQHS0ha.js";import"./index-D9OO5l1d.js";import"./CartesianAxis-BkbswnOw.js";import"./types-CfFSLUx9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cu1gA7XW.js";import"./throttle-CenVclrT.js";import"./RechartsWrapper-BLJ6xSnq.js";import"./index-CFJQbE9C.js";import"./index-6l3olgx1.js";import"./axisSelectors-YPPwLD-Y.js";import"./d3-scale-BrF_Bfnv.js";import"./CategoricalChart-CU7_I9di.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-CLbAeK38.js";import"./chartDataContext-DXptRcnW.js";import"./Curve-DEZWs80m.js";import"./step-RKP5ji2w.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ugycet-g.js";import"./useAnimationId-BXxNbWRb.js";import"./ActivePoints-JUHjUNnj.js";import"./Dot-C94-4eAI.js";import"./RegisterGraphicalItemId-XhYDb4e7.js";import"./ErrorBarContext-D5P-GrTa.js";import"./GraphicalItemClipPath-DgZI2AKv.js";import"./SetGraphicalItem-DzMBG2H0.js";import"./getRadiusAndStrokeWidthFromDot-CiF60Eet.js";import"./ActiveShapeUtils-SliXRAYD.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},de={argTypes:n,component:o},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(o,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(n),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ue=["API"];export{t as API,ue as __namedExportsOrder,de as default};
