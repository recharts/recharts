import{e}from"./iframe-BzU5tZG5.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-CIaux6Wl.js";import{R as m}from"./arrayEqualityCheck-BsfMiBB8.js";import{C as p}from"./ComposedChart-BoR_lsyS.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-tw-k3o28.js";import{X as c}from"./XAxis-B-W2dzi3.js";import{Y as h}from"./YAxis-l0f4JbWK.js";import{L as y}from"./Line-Ct73r5ic.js";import{R as f}from"./RechartsHookInspector-DCXeAgKX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-BoRDeEOm.js";import"./resolveDefaultProps-DmGz1ogE.js";import"./Label-hToV_gRB.js";import"./Text-CmxtkjMm.js";import"./DOMUtils-Bnb5Olzx.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-x07EvPLC.js";import"./zIndexSlice-Bd6-3QTP.js";import"./immer-C0fwLmkH.js";import"./CartesianAxis--HQls11E.js";import"./types-BbKBmvI2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-HvaIjOyz.js";import"./RechartsWrapper-BbxErU3E.js";import"./index-De8EN-cC.js";import"./hooks-BZ9lkAel.js";import"./axisSelectors-Cxfo6rVo.js";import"./d3-scale-DcKEztNx.js";import"./string-B6fdYHAA.js";import"./CategoricalChart-FYUpa-sB.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-BVGWETT1.js";import"./chartDataContext-DW4aeEtj.js";import"./AnimatedItems-DpJzQnXc.js";import"./useAnimationId-D2sjwezL.js";import"./ActivePoints-OqIedk1P.js";import"./Dot-DzV-VpNB.js";import"./RegisterGraphicalItemId-B44_OcBQ.js";import"./ErrorBarContext-B_54DcZB.js";import"./GraphicalItemClipPath-CjoeLGJT.js";import"./SetGraphicalItem-D8FHaqBq.js";import"./getRadiusAndStrokeWidthFromDot-D38YSDE-.js";import"./ActiveShapeUtils-DAfXePCg.js";import"./isPlainObject-DeEpFnEl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dql0fF0Y.js";import"./Trapezoid-Du0ZEVwP.js";import"./Sector-CPh9calM.js";import"./Symbols-BOk-75a6.js";import"./symbol-CgkrJkl1.js";import"./step-fSDMrmBj.js";import"./Curve-DQMyibMX.js";import"./index-BxJbg6c2.js";import"./ChartSizeDimensions-CVqRiDUJ.js";import"./OffsetShower-0OLqDfEA.js";import"./PlotAreaShower-C8OLz8bs.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},Re={argTypes:n,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(i,{...s}),e.createElement(y,{dataKey:"uv"}),e.createElement(f,null))),args:{...l(n),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const Ve=["API"];export{t as API,Ve as __namedExportsOrder,Re as default};
