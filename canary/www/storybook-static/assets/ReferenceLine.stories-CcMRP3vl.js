import{R as e}from"./iframe-DnRkZCcZ.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-CxYpRDVn.js";import{R as m}from"./zIndexSlice-DwWcIzrA.js";import{C as p}from"./ComposedChart-DAKOEFgJ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-hU5F1JD4.js";import{X as u}from"./XAxis-DPYXDMnu.js";import{Y as h}from"./YAxis-CL5uWkoX.js";import{L as y}from"./Line-B-2uuZK0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-ziHQUSdD.js";import"./resolveDefaultProps-CKyaaGET.js";import"./Label-DX2yrrpT.js";import"./Text-CdYpRkXo.js";import"./ZIndexLayer-Cfgieq6O.js";import"./index-B8arTVtL.js";import"./index-D7PdTPCI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-WP4kwRUA.js";import"./throttle-bNdHLYfF.js";import"./CartesianAxis-CI0fZc9H.js";import"./types-DV0KiZQI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-qkBzJXk3.js";import"./index-Cppy_ggM.js";import"./index-BXa8wql-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B9w9bgII.js";import"./axisSelectors-BG0FGZa0.js";import"./d3-scale-DjImCkyz.js";import"./index-BKTGKznB.js";import"./fillDefinitions-B6SeDiRz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-lnVa2-zz.js";import"./chartDataContext-C9AcD8jJ.js";import"./CategoricalChart-DJEPvlGT.js";import"./getRadiusAndStrokeWidthFromDot-CMeF7NbT.js";import"./Curve-QoxdgH9q.js";import"./step-CKBO-I2d.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BgjT13Al.js";import"./ActivePoints-CRsFnWGy.js";import"./Dot-CK54vFWX.js";import"./activeStyles-DRi4KJX5.js";import"./useAnimationId-p0AfOAw0.js";import"./Symbols-DOGEiW8S.js";import"./symbol-BhVTcXut.js";import"./ErrorBarContext-DvYBBAjF.js";import"./SetGraphicalItem-Cr3rFtC8.js";import"./ActiveShapeUtils-sdvrDPyr.js";import"./useEffectiveDataKey-BIuaq2EX.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of a single Label component, such as `value` and `position`\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ye={argTypes:o,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(i,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(o),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}},fe=["API"];var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{t as API,fe as __namedExportsOrder,ye as default};
