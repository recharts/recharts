import{e}from"./iframe-Yt5kG58B.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-D-tMTpyT.js";import{g as m}from"./arrayEqualityCheck-CmivkQHU.js";import{C as p}from"./ComposedChart-hlF-8j9Q.js";import{p as d}from"./Page-DPte-9pC.js";import{C as u}from"./CartesianGrid-C6yEJEor.js";import{X as c}from"./XAxis-BMPl7mYX.js";import{Y as h}from"./YAxis-fNPxfz24.js";import{L as y}from"./Line-DblcEqSB.js";import{R as f}from"./RechartsHookInspector-Cviat0cY.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-C5jjOkvS.js";import"./resolveDefaultProps-unPLvkOT.js";import"./Label-BnSyr1ay.js";import"./Text-Ch8634yl.js";import"./DOMUtils-BHiH0dNd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-V8l53dIn.js";import"./zIndexSlice-pBWW2gMH.js";import"./immer-CcDOB7WW.js";import"./CartesianAxis-CkTrjpZB.js";import"./types-DbVT1P7h.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CAjiTAMh.js";import"./RechartsWrapper-CNwUSHj6.js";import"./index-CCn_KrYt.js";import"./hooks-DdT8YGKV.js";import"./axisSelectors-Cu_RAN-5.js";import"./d3-scale-ClNNBzhr.js";import"./CategoricalChart-LTsMGKb4.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-CbX7HdzJ.js";import"./chartDataContext-D89eDWXB.js";import"./Curve-BqZs6d01.js";import"./step-C2PKa5KE.js";import"./path-DyVhHtw_.js";import"./ReactUtils-Jy4OurHq.js";import"./ActivePoints-BQ3lgqlU.js";import"./Dot-BBaQQz_u.js";import"./RegisterGraphicalItemId-u9uNYDRF.js";import"./ErrorBarContext-CIW2Opuu.js";import"./GraphicalItemClipPath-BVHUKTdw.js";import"./SetGraphicalItem-BQyEnfew.js";import"./useAnimationId-D8AADvXI.js";import"./getRadiusAndStrokeWidthFromDot-ew-Ir4iU.js";import"./ActiveShapeUtils-C6u69RRm.js";import"./index-BGUbPMKQ.js";import"./ChartSizeDimensions-DfUWMKem.js";import"./OffsetShower-DwOtQel9.js";import"./PlotAreaShower-C3hlHEsr.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ye={argTypes:n,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(i,{...s}),e.createElement(y,{dataKey:"uv"}),e.createElement(f,null))),args:{...l(n),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const fe=["API"];export{t as API,fe as __namedExportsOrder,ye as default};
