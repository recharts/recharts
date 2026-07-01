import{R as e}from"./iframe-EI0Ls4hC.js";import{g as l}from"./utils-ePvtT4un.js";import{R as o}from"./ReferenceLine-mGP90lGk.js";import{R as m}from"./zIndexSlice-yKXgbZM9.js";import{C as p}from"./ComposedChart-Be7puHYx.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-BC9TO7ip.js";import{X as c}from"./XAxis-isMopIja.js";import{Y as h}from"./YAxis-BDDTXkrb.js";import{L as y}from"./Line-B9NkJQGA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BON1YutH.js";import"./Layer-D2PSeBO4.js";import"./resolveDefaultProps-NPYXHAaZ.js";import"./Label-V9mTYK6m.js";import"./Text-BwBPbfGl.js";import"./DOMUtils-DrXieiLo.js";import"./isWellBehavedNumber-DWxIjg9k.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C3S5Zj6R.js";import"./index-nHjkW3_e.js";import"./index-D-rMjtE6.js";import"./CartesianAxis-C7eaHI9Q.js";import"./types-C8rhvdfR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CoFXcUVC.js";import"./throttle-Cdlad3bH.js";import"./RechartsWrapper-CVfLxVvb.js";import"./index-CzoIO75z.js";import"./index-BIz2bYpH.js";import"./axisSelectors-Cok1HNra.js";import"./d3-scale-DBYKxB4y.js";import"./CategoricalChart-DnbprEZ3.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-DxsNLdfg.js";import"./chartDataContext-AgenIsJt.js";import"./Curve-eRlCLt7Q.js";import"./step-B6IK1iGd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CvuB6fQ_.js";import"./useAnimationId-B72UM_RE.js";import"./ActivePoints-gc55JVjB.js";import"./Dot-Cx4WJ9n0.js";import"./RegisterGraphicalItemId-CXkeXAps.js";import"./ErrorBarContext-BeDV4HJb.js";import"./GraphicalItemClipPath-5KTFkQ5K.js";import"./SetGraphicalItem-BhScXCrX.js";import"./getRadiusAndStrokeWidthFromDot-DzmGdQsa.js";import"./ActiveShapeUtils-CplwhB-J.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
