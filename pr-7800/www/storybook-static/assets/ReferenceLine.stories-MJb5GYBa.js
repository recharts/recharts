import{R as e}from"./iframe-BnZHUF9X.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-CtDu9YYS.js";import{R as m}from"./zIndexSlice-ONbH2CMm.js";import{C as p}from"./ComposedChart-B4o4gtm7.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-m_0SQtv7.js";import{X as u}from"./XAxis-CRqJ7xsJ.js";import{Y as h}from"./YAxis-C5pkUNB3.js";import{L as y}from"./Line-cVcFSyJN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-D4LkPBUk.js";import"./resolveDefaultProps-CS-Gahor.js";import"./Label-hOa9Xaax.js";import"./Text-CPiy7pnu.js";import"./DOMUtils-C0afjJmd.js";import"./isWellBehavedNumber-Bn5kvLQQ.js";import"./useId-nraStDaz.js";import"./useBackwardsCompatibleTheme-CLSYsBSa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CIa5rzLp.js";import"./index-DwyAhWM9.js";import"./index-Ck__QTcD.js";import"./CartesianAxis-CnqpkBi3.js";import"./types-CA0d64vS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CKzVsDw2.js";import"./throttle-DYWyyBD4.js";import"./index-ksKJqe-L.js";import"./index-BrEYDHSM.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-ztAk4E9P.js";import"./axisSelectors-DSOG4fe3.js";import"./d3-scale-hcynQqTx.js";import"./index-CVXi-tnN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-a0B_k2pR.js";import"./chartDataContext-CxsSdioC.js";import"./CategoricalChart-CSXyHKQE.js";import"./Curve-SQL-HHnd.js";import"./step-BHb_S66N.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bxt2Mhs_.js";import"./useAnimationId-CuFFFGhn.js";import"./ActivePoints-CIdvMm3W.js";import"./Dot-CjRUlFgj.js";import"./RegisterGraphicalItemId-eknPVKNp.js";import"./ErrorBarContext-DNaI9-CH.js";import"./GraphicalItemClipPath-DFiiV3dA.js";import"./SetGraphicalItem-BS2ba3Ul.js";import"./getRadiusAndStrokeWidthFromDot-6T9qPj9L.js";import"./ActiveShapeUtils-nVjPub3k.js";import"./useGraphicalItemIdentity-esDnMWhm.js";const o={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
