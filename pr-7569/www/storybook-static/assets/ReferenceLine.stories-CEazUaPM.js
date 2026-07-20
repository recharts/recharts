import{R as e}from"./iframe-3EJ0a-7l.js";import{g as l}from"./utils-ePvtT4un.js";import{R as n}from"./ReferenceLine-9S4vho1W.js";import{R as m}from"./zIndexSlice-c2FXiYNl.js";import{C as d}from"./ComposedChart-D-953FuV.js";import{p}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-RxuE0wOS.js";import{X as c}from"./XAxis-C3QGe7ZQ.js";import{Y as h}from"./YAxis-DWgMRUiY.js";import{L as y}from"./Line-C2MKmrJp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-DpkyIzcZ.js";import"./resolveDefaultProps-BuDtgz7X.js";import"./Label-C0w-bdKA.js";import"./Text-Tcv7e8Zm.js";import"./DOMUtils-DXgkUmDa.js";import"./isWellBehavedNumber-BhkIWxYY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DNvDkown.js";import"./index-0T8Ohuwb.js";import"./index-Bew5wRIt.js";import"./CartesianAxis-Bfa5m128.js";import"./types-CU0G9DUW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-gv74no8c.js";import"./throttle-CPX4UzZG.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Bn0d5D9a.js";import"./index-BjSUzMQ4.js";import"./index-tuDXSbu0.js";import"./axisSelectors-Bmyn61pB.js";import"./d3-scale-iKC8386d.js";import"./CategoricalChart-CxrO1b6T.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-BDgOOMut.js";import"./chartDataContext-D6a_Yhjw.js";import"./Curve-BO7dzXGY.js";import"./step-oroBBTM2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_aFnnDci.js";import"./useAnimationId-BfMO6PtV.js";import"./ActivePoints-DJDGdwM2.js";import"./Dot-Cv5hb360.js";import"./RegisterGraphicalItemId-DGaDllRs.js";import"./ErrorBarContext-BbLTkDCO.js";import"./GraphicalItemClipPath-BH3HlCRV.js";import"./SetGraphicalItem-BJF2lEB0.js";import"./getRadiusAndStrokeWidthFromDot-Ds3sY1DQ.js";import"./ActiveShapeUtils-Cy1FCqFR.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ue={argTypes:o,component:n},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(d,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(n,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(o),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ce=["API"];export{t as API,ce as __namedExportsOrder,ue as default};
