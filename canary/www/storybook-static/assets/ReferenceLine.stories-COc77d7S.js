import{e}from"./iframe-BoXIVKpi.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-BnGNGG5P.js";import{R as m}from"./arrayEqualityCheck-dnQrzM2E.js";import{C as p}from"./ComposedChart-7O89xTAc.js";import{C as d}from"./CartesianGrid-DbtkUh_J.js";import{X as u}from"./XAxis-CkW7_vH7.js";import{Y as c}from"./YAxis-DHIy0H30.js";import{L as h}from"./Line-BGsVM20O.js";import{R as y}from"./RechartsHookInspector-Bv_iW9cn.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-LLMs1spv.js";import"./resolveDefaultProps-DSYkeoEk.js";import"./Label-DIzgOATL.js";import"./Text-JI5xSkLa.js";import"./DOMUtils-CzHd8SEJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BiamzHbt.js";import"./zIndexSlice-DRRC13cr.js";import"./immer-DZ-IpPxl.js";import"./CartesianAxis-UrQstO-Y.js";import"./types-DGUHAYWi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CJehQ3Y6.js";import"./RechartsWrapper-NZG2vnSc.js";import"./index-B4sUR4aF.js";import"./hooks-CmrSpg0T.js";import"./axisSelectors-C3NEPGA0.js";import"./d3-scale-4wy_PNKp.js";import"./CategoricalChart-CtSiGPzF.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-CVmBhOHu.js";import"./chartDataContext-BotxQRqQ.js";import"./ReactUtils-D25zr5OD.js";import"./ActivePoints-B5Pf1vbB.js";import"./Dot-COyDptKo.js";import"./RegisterGraphicalItemId-DGJkdjw1.js";import"./ErrorBarContext-Da-s-Drd.js";import"./GraphicalItemClipPath-DEQZQieX.js";import"./SetGraphicalItem-b1pitorJ.js";import"./useAnimationId-CJqD-IcR.js";import"./getRadiusAndStrokeWidthFromDot-CvXSO0LX.js";import"./ActiveShapeUtils-yJwPYRY8.js";import"./isPlainObject-CJV2F3VY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CrG49jLS.js";import"./Trapezoid-HO8pmOVA.js";import"./Sector-ROnt6JN1.js";import"./Symbols-BdNjnJgs.js";import"./symbol-DuFkHlHY.js";import"./step-Dpvc6cK-.js";import"./Curve-4bfNPt84.js";import"./index-DaN_YDU6.js";import"./ChartSizeDimensions-xw94xbD8.js";import"./OffsetShower-Ci98_s2F.js";import"./PlotAreaShower-KIGO44Wy.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
