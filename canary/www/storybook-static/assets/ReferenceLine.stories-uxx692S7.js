import{R as e}from"./iframe-CoZYBKIX.js";import{g as l}from"./utils-ePvtT4un.js";import{R as n}from"./ReferenceLine-DFsVkN5g.js";import{R as m}from"./zIndexSlice-2wRK4kMu.js";import{C as d}from"./ComposedChart-BD8sJbPA.js";import{p}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-acTASaL7.js";import{X as c}from"./XAxis-BYrKdn3j.js";import{Y as h}from"./YAxis-CF_GQk3H.js";import{L as y}from"./Line-D10QsT7G.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-Do7uuXp2.js";import"./resolveDefaultProps-CXWmRWxD.js";import"./Label-B5Sw4cWo.js";import"./Text-Br2KMW9j.js";import"./DOMUtils-B_OLo7Kh.js";import"./isWellBehavedNumber-DPie-IPs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cub30BGV.js";import"./index-CxqEAs70.js";import"./index-DbtoquVJ.js";import"./CartesianAxis-CSNiqDgA.js";import"./types-DlqgPqNT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJztigH5.js";import"./throttle-DTjNB_wn.js";import"./RechartsWrapper-Chafq55k.js";import"./index-8vVHWDox.js";import"./index-CB7yOKq2.js";import"./axisSelectors-Bk60vGia.js";import"./d3-scale-Bs_mySfl.js";import"./CategoricalChart-DEIC5a6b.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-DoniaHV0.js";import"./chartDataContext-Cx3CX6pd.js";import"./Curve-Cg7tsFL-.js";import"./step-C4ZbFa_I.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-OdNYlxxq.js";import"./useAnimationId-C7atvuRl.js";import"./ActivePoints-DpHWAW0C.js";import"./Dot-C3ifhvT9.js";import"./RegisterGraphicalItemId-BhxVKnq7.js";import"./ErrorBarContext-D9rx9CvF.js";import"./GraphicalItemClipPath-BqDFfLzv.js";import"./SetGraphicalItem-Cm5RMzg0.js";import"./getRadiusAndStrokeWidthFromDot-J7tXgy4t.js";import"./ActiveShapeUtils-Is-vymDi.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},pe={argTypes:o,component:n},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(d,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(n,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(o),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ue=["API"];export{t as API,ue as __namedExportsOrder,pe as default};
