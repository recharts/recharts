import{R as e}from"./iframe-DVTI7asB.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-BfFhLyBH.js";import{R as m}from"./zIndexSlice-VrE65LwJ.js";import{C as p}from"./ComposedChart-D0z3ruTF.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DnLnRX8G.js";import{X as u}from"./XAxis-B8cGJGN2.js";import{Y as h}from"./YAxis-B0eGMGZi.js";import{L as y}from"./Line-DHWvjFGt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-CKEADoVi.js";import"./resolveDefaultProps-Brh9VJsQ.js";import"./Label-C5sDum5_.js";import"./Text-XQRKlDnX.js";import"./DOMUtils--MlKRlg5.js";import"./isWellBehavedNumber-D3Ee2F4O.js";import"./useId-D-envRVe.js";import"./useBackwardsCompatibleTheme-CTYeO19p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-MKguLFMj.js";import"./index-CBeOLa_K.js";import"./index-x2lkdleK.js";import"./CartesianAxis-B7c0SFW_.js";import"./types-BbyfnRjt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dm0DClKF.js";import"./throttle-BWtzmmFP.js";import"./index-Dxlfd81A.js";import"./index-BME0E5Ea.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-0XjKEbs7.js";import"./axisSelectors-BpjWm-Lu.js";import"./d3-scale-CTgt3q-T.js";import"./index-B1fyioQZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-TlzU5q-y.js";import"./chartDataContext-5tueJF_N.js";import"./CategoricalChart-DDdawTFM.js";import"./Curve-ad1Bykff.js";import"./step-BVPKFfuD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DqWEvMcn.js";import"./useAnimationId-CwgRschT.js";import"./ActivePoints-BzEepdn2.js";import"./Dot-C6F_-u4G.js";import"./RegisterGraphicalItemId-BCvN7nSY.js";import"./ErrorBarContext-BzIynu6X.js";import"./GraphicalItemClipPath-DpsQ0BRT.js";import"./SetGraphicalItem-Co1iXM8q.js";import"./getRadiusAndStrokeWidthFromDot-C-yk404_.js";import"./ActiveShapeUtils-DaFsN-Ec.js";import"./useGraphicalItemIdentity-Bs2hvtnA.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
