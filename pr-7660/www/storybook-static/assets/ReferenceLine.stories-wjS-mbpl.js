import{R as e}from"./iframe-DsANpUmI.js";import{g as l}from"./utils-ePvtT4un.js";import{R as o}from"./ReferenceLine-LNJ4Zd54.js";import{R as m}from"./zIndexSlice-DvbQ_xRM.js";import{C as p}from"./ComposedChart-CC1tviS_.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-DGKX8SVs.js";import{X as c}from"./XAxis-75DaHKlQ.js";import{Y as h}from"./YAxis-Cm1QLXj3.js";import{L as y}from"./Line-Dnn5aHX6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-DYWDW_71.js";import"./resolveDefaultProps-VCXcnZ86.js";import"./Label-B4DeKwN7.js";import"./Text-CjTSiniW.js";import"./DOMUtils-kNujPIKB.js";import"./isWellBehavedNumber-Dg3vRfwI.js";import"./useId-B0Q44yTc.js";import"./useBackwardsCompatibleTheme-BBpmGxx6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-MPr2tp5c.js";import"./index-DLEQ2NY5.js";import"./index-D3xqrgS8.js";import"./CartesianAxis-XsOc8jcn.js";import"./types-CnYkNLV_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BUDGobd4.js";import"./throttle-vYgBP45f.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BDrHj0U2.js";import"./index-5L0AuTID.js";import"./index-BNBrr31l.js";import"./axisSelectors-B-1KrEKd.js";import"./d3-scale-_QauBjGX.js";import"./CategoricalChart-Di7Ri-zj.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-Cwf-uiEG.js";import"./chartDataContext-C2aYZmpD.js";import"./Curve-CRdwjUaH.js";import"./step-BYrDDVtV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-rVlz1FJX.js";import"./useAnimationId-DetthuUW.js";import"./ActivePoints-B0q4xgtH.js";import"./Dot-DxPtGh3x.js";import"./RegisterGraphicalItemId-Cpe7Zv2c.js";import"./ErrorBarContext-C9fSG5q2.js";import"./GraphicalItemClipPath-YjZkau9w.js";import"./SetGraphicalItem-BGt3myf-.js";import"./getRadiusAndStrokeWidthFromDot-Dxn9p5np.js";import"./ActiveShapeUtils-nZLcFoMw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.\n  HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ye={argTypes:n,component:o},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(o,{...s}),e.createElement(y,{dataKey:"uv"}))),args:{...l(n),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
