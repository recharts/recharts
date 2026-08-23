import{R as e}from"./iframe-C3Hc6ExU.js";import{g as l}from"./utils-ePvtT4un.js";import{R as o}from"./ReferenceLine-CQkM5C9t.js";import{R as m}from"./zIndexSlice-DUSt-QRk.js";import{C as p}from"./ComposedChart-DQvc_r-0.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DRfcDaI-.js";import{X as u}from"./XAxis-Dtgw3Co8.js";import{Y as h}from"./YAxis-C-y6lpsY.js";import{L as y}from"./Line-DP79-Lts.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-nhPcXxtD.js";import"./resolveDefaultProps-I9hvH7ZX.js";import"./Label-CANqho75.js";import"./Text-DrMy69_K.js";import"./DOMUtils-Cnn_urMe.js";import"./isWellBehavedNumber-BaxFFXf5.js";import"./useId-z0f7lKjA.js";import"./useBackwardsCompatibleTheme-BO1TP3oH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-G0ryhOC-.js";import"./index-BCuR5Ep7.js";import"./index-N8Br274d.js";import"./CartesianAxis-DzoIF-ni.js";import"./types-fNKA8Oi0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C_VQ6yCW.js";import"./throttle-DY2EWLMY.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B7tS-h39.js";import"./index-DPHIqaZF.js";import"./index-jh_FdFAs.js";import"./axisSelectors-CVNuchwD.js";import"./d3-scale-BNbYa6kD.js";import"./CategoricalChart-Z9dORHEb.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-D83sOKb0.js";import"./chartDataContext-De2r_5pJ.js";import"./Curve-xgDPuw9g.js";import"./step-C6OJ_LlT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-EryZIVr5.js";import"./useAnimationId-C5Z2jNIS.js";import"./ActivePoints-MsPbupEa.js";import"./Dot-Dhy6Aaz6.js";import"./RegisterGraphicalItemId-B-hExQD4.js";import"./ErrorBarContext-C-2s-xSs.js";import"./GraphicalItemClipPath-1LBjo5Ot.js";import"./SetGraphicalItem-DJG5Kc0f.js";import"./getRadiusAndStrokeWidthFromDot-BZlod__d.js";import"./ActiveShapeUtils-BBT5vOsU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
