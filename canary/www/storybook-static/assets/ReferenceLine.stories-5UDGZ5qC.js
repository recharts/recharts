import{e}from"./iframe-1xuwxK0i.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-Bxr-mFPv.js";import{R as m}from"./arrayEqualityCheck-CASLlqQ3.js";import{C as p}from"./ComposedChart-CgqH6xmd.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-DMIlunDz.js";import{X as c}from"./XAxis-BKyyM-a9.js";import{Y as h}from"./YAxis-DxhfNzZF.js";import{L as y}from"./Line-CUH5xAuk.js";import{R as f}from"./RechartsHookInspector-DjsmwIRA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-HRVol_nO.js";import"./resolveDefaultProps-BeeagbIX.js";import"./Label-EE46xwmi.js";import"./Text-BBwkToBR.js";import"./DOMUtils-BhlllvxT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C7GyPaOO.js";import"./zIndexSlice-DPF7rmTT.js";import"./immer-BoNsEynp.js";import"./CartesianAxis-DrIFSgXd.js";import"./types-UwWXE9AL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Dixyj9Jy.js";import"./RechartsWrapper-5Ekcff7f.js";import"./index-DCwL0QiS.js";import"./hooks-BzE3zYbI.js";import"./axisSelectors-DyjHckMI.js";import"./d3-scale-DUQowLdF.js";import"./CategoricalChart-CiWFX2uU.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-4woDVZs_.js";import"./chartDataContext-BwmW5feg.js";import"./ReactUtils-B2i9al3C.js";import"./ActivePoints-BVDrdHpP.js";import"./Dot-Bf3Kg0FQ.js";import"./RegisterGraphicalItemId-CklwmYhh.js";import"./ErrorBarContext-SjXcYHyD.js";import"./GraphicalItemClipPath-BmfpOWt-.js";import"./SetGraphicalItem-BECsf1z-.js";import"./useAnimationId-CNQ0amde.js";import"./getRadiusAndStrokeWidthFromDot-CItpH8qB.js";import"./ActiveShapeUtils-CDdbS846.js";import"./isPlainObject-DBcZBbuh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B47wiU0M.js";import"./Trapezoid-Cr4fcElh.js";import"./Sector-2ltBV-lC.js";import"./Symbols-C6y5KnTy.js";import"./symbol-BMBn4bHO.js";import"./step-BCh-34yC.js";import"./Curve-CAhCV73Q.js";import"./index-l66o8zNg.js";import"./ChartSizeDimensions-lZytJoNO.js";import"./OffsetShower-DHMDBhnx.js";import"./PlotAreaShower-Dete_MNu.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},ve={argTypes:n,component:i},t={render:s=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(u,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(i,{...s}),e.createElement(y,{dataKey:"uv"}),e.createElement(f,null))),args:{...l(n),y:1520,stroke:"blue",strokeWidth:2,strokeDasharray:"4 1",label:"My example label"}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
