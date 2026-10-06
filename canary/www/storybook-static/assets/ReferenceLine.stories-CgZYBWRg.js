import{R as e}from"./iframe-B0eldO7v.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-QPhKy5Il.js";import{R as m}from"./zIndexSlice-CXop2G5e.js";import{C as p}from"./ComposedChart-Ddcti6fy.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BE58y5TH.js";import{X as u}from"./XAxis-GLXwZBor.js";import{Y as h}from"./YAxis-DlMMTkQY.js";import{L as y}from"./Line-YlkEKwc2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-BkeFUCM0.js";import"./resolveDefaultProps-Dl5A3vcA.js";import"./Label-wnFLP2Gb.js";import"./Text-DkYUHdlt.js";import"./DOMUtils-DXyJKZjT.js";import"./isWellBehavedNumber-Bs9ryC8U.js";import"./useId-ByWKwJ9t.js";import"./useBackwardsCompatibleTheme-peNjLWv-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CuGirjla.js";import"./index-DCLOFYkq.js";import"./index-BKRX5CvI.js";import"./CartesianAxis-a7vTeDpH.js";import"./types-BECNnjMS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D3LeHV-Y.js";import"./throttle-D7OWylrB.js";import"./index-C_-NyhpR.js";import"./index-Bdj7MaD4.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BwMPh17B.js";import"./axisSelectors-B4pxDEAY.js";import"./d3-scale-B5kcweJa.js";import"./index-DlY7-xoe.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-CoOYNy_x.js";import"./chartDataContext-1U_QIO6p.js";import"./CategoricalChart-B8AkurP8.js";import"./Curve-W12vhYO0.js";import"./step-BjD9SRNv.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bli2w_x8.js";import"./useAnimationId-REGnqG-r.js";import"./ActivePoints-oqRPT4fh.js";import"./Dot-poKEwaeq.js";import"./RegisterGraphicalItemId-DGTqEQmn.js";import"./ErrorBarContext-CZy75mIo.js";import"./GraphicalItemClipPath-DvdFYP5C.js";import"./SetGraphicalItem-FUNEgggo.js";import"./getRadiusAndStrokeWidthFromDot-D6ch2P3E.js";import"./ActiveShapeUtils-BmGLuzNe.js";import"./useGraphicalItemIdentity-CcjTcmiI.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of a single Label component, such as `value` and `position`\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},fe={argTypes:o,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(i,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(o),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}},ge=["API"];var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{t as API,ge as __namedExportsOrder,fe as default};
