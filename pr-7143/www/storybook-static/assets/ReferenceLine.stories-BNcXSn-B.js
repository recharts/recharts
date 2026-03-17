import{e}from"./iframe-jjkKyBnh.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-B-_72Vkb.js";import{R as m}from"./arrayEqualityCheck-CUp7G6cL.js";import{C as p}from"./ComposedChart-DegKGvWA.js";import{C as d}from"./CartesianGrid-CHeI6kYa.js";import{X as u}from"./XAxis-Bdq6Jw3w.js";import{Y as c}from"./YAxis-C86w3msg.js";import{L as h}from"./Line-BsmnuUVe.js";import{R as y}from"./RechartsHookInspector-CxT_wKdY.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-Dm-ZljB7.js";import"./resolveDefaultProps-zELNaCXr.js";import"./Label-BaP8ifBC.js";import"./Text-C_U00kEv.js";import"./DOMUtils-BMT21emC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CNnwO4iC.js";import"./zIndexSlice-CuuIJiqa.js";import"./immer-BbVLmXrm.js";import"./CartesianAxis-CIGCYBrz.js";import"./types-BzZyKnH8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B60M8aLp.js";import"./RechartsWrapper-JqguxFU2.js";import"./index-BEHJeVcn.js";import"./hooks-wocA-lGH.js";import"./axisSelectors-Dd4S0Ceb.js";import"./d3-scale-Ckxg_Ns_.js";import"./CategoricalChart-C0mCf7ot.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-BCXq_jCV.js";import"./chartDataContext-D_AkUCKZ.js";import"./ReactUtils-CrwQQyAX.js";import"./ActivePoints-Das5y6E5.js";import"./Dot-BQZVzyoQ.js";import"./RegisterGraphicalItemId-DhCgr3Sg.js";import"./ErrorBarContext-BqWlziyG.js";import"./GraphicalItemClipPath-CX2YOSCG.js";import"./SetGraphicalItem-CEEkaG-5.js";import"./useAnimationId-XeqIoJ00.js";import"./getRadiusAndStrokeWidthFromDot-FiGNG78A.js";import"./ActiveShapeUtils-g0vfssj-.js";import"./isPlainObject-BGF86Xvm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-T-u3oWfl.js";import"./Trapezoid-BeD-5DNQ.js";import"./Sector-Cy9ueYzv.js";import"./Symbols-D7PwakqN.js";import"./symbol-iVbFGN4-.js";import"./step-CFbXCSW0.js";import"./Curve-D2x3KFrb.js";import"./index-CJmZG3j5.js";import"./ChartSizeDimensions-CLm1CpLg.js";import"./OffsetShower-n-Td0s15.js";import"./PlotAreaShower-5quEOdpp.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ve={argTypes:n,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(i,{...s}),e.createElement(h,{dataKey:"uv"}),e.createElement(y,null))),args:{...l(n),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const Re=["API"];export{t as API,Re as __namedExportsOrder,ve as default};
