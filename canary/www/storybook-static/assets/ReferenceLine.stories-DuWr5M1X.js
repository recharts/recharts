import{R as e}from"./iframe-NhQV4prz.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-Bo5F3MMq.js";import{R as m}from"./zIndexSlice-CfLnBr12.js";import{C as p}from"./ComposedChart-BygaGWnl.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cyv3Grcf.js";import{X as u}from"./XAxis-Fp7U60n2.js";import{Y as h}from"./YAxis-BZzMEbei.js";import{L as y}from"./Line-CK7ZFz0J.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-BBUzG4Ds.js";import"./resolveDefaultProps-DiB_0bHm.js";import"./Label-BUAYU6sx.js";import"./Text-BjHxixwZ.js";import"./pageBackground-CDOOBPh1.js";import"./isWellBehavedNumber-CZC1TcYQ.js";import"./useId-BhvwEVie.js";import"./useBackwardsCompatibleTheme-RAZcM6ed.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-L-3od7Tk.js";import"./index-BSL_lC_q.js";import"./index-CDv5DZpz.js";import"./CartesianAxis-Brd3Au8o.js";import"./types-CquoFe81.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C3ai8iRv.js";import"./throttle-DIKmaWkS.js";import"./index-Cmohh-L0.js";import"./index-DaOiqL7H.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BxN86ujp.js";import"./axisSelectors-CI2m5dZK.js";import"./d3-scale-DKOiWQKf.js";import"./index-Dc9b_9OD.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-CiIIIaIF.js";import"./chartDataContext-I3KBS5Dn.js";import"./CategoricalChart-BSIFNsGO.js";import"./Curve-DQunGac-.js";import"./step-DAEVm6QR.js";import"./path-DyVhHtw_.js";import"./activeStyles-DbZl5mD5.js";import"./useAnimationId-CDdHAGde.js";import"./dataEntryStyles-C3Awxqtk.js";import"./ActivePoints-BaOlHly8.js";import"./Dot-Bbsv88JT.js";import"./ErrorBarContext-C6WKrP5w.js";import"./GraphicalItemClipPath-BZY88hTL.js";import"./SetGraphicalItem-BE6zKb5c.js";import"./getRadiusAndStrokeWidthFromDot-V6X0dMwc.js";import"./ActiveShapeUtils-B50xX2fH.js";import"./useEffectiveDataKey-CCR_17cw.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of a single Label component, such as `value` and `position`\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
