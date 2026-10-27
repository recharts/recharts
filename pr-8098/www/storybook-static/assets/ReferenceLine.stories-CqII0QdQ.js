import{R as e}from"./iframe-C-1IryXX.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-Cho5J1MG.js";import{R as m}from"./zIndexSlice-fsCRj6jn.js";import{C as p}from"./ComposedChart-ldhMDYwV.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cfx84kn5.js";import{X as u}from"./XAxis-DgA8soXs.js";import{Y as h}from"./YAxis-BNLMUv-C.js";import{L as y}from"./Line-Dr6pYibn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-BY_4_n1M.js";import"./resolveDefaultProps-BhlxPQQ0.js";import"./Label-BTNrgHMM.js";import"./Text-bsivD33T.js";import"./pageBackground-BsKy__Zx.js";import"./ZIndexLayer-DcusPv6z.js";import"./index-D_guE_NV.js";import"./index-BpW2h4nW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-nNfiNjC3.js";import"./throttle-_r7dS2f6.js";import"./dataEntryStyles-RoHSwMuf.js";import"./CartesianAxis-Boy6gEfE.js";import"./types-Ca1J50vn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B4PG9UaR.js";import"./index-BM9qHJ3l.js";import"./index-CaHSXMyC.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bb_GJAnC.js";import"./axisSelectors-DnbooZ92.js";import"./d3-scale-CK0ZBavL.js";import"./index-BbeXMPlB.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-X1Ss8Xb_.js";import"./ZIndexPortal-D1pWS7G9.js";import"./CategoricalChart-CCP7izw9.js";import"./Curve-BZP4AtoJ.js";import"./step-D97QNVl7.js";import"./path-DyVhHtw_.js";import"./LabelList-BgJAhVhH.js";import"./ActivePoints-Kxn86qrL.js";import"./Dot-DKVTZ3_d.js";import"./activeStyles-DZ3GRzLP.js";import"./useAnimationId-B4AGcQCE.js";import"./Symbols-DkSC4tBr.js";import"./symbol-D09AuR3g.js";import"./RegisterGraphicalItemId-BAsbW75f.js";import"./ErrorBarContext-CMFEKiC-.js";import"./SetGraphicalItem-DzD-3glG.js";import"./getRadiusAndStrokeWidthFromDot-CSG42cOl.js";import"./ActiveShapeUtils-B19_Z8K8.js";import"./useEffectiveDataKey-B3UErnsT.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of a single Label component, such as `value` and `position`\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ge={argTypes:o,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(i,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(o),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}},be=["API"];var r,a,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{t as API,be as __namedExportsOrder,ge as default};
