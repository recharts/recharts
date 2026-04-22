import{e}from"./iframe-CIRDBmnY.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-DYZS--_2.js";import{R as m}from"./arrayEqualityCheck-Ccl-pv9u.js";import{C as p}from"./ComposedChart-D2raJxM1.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-CXFgbD5_.js";import{X as c}from"./XAxis-Bxd0aLo-.js";import{Y as h}from"./YAxis-Cm87CNGN.js";import{L as y}from"./Line-DaxOykpy.js";import{R as f}from"./RechartsHookInspector-CW5oWR2W.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-Ba8IePkn.js";import"./resolveDefaultProps-WvlII-Nx.js";import"./Label-DBOJ1SQQ.js";import"./Text-DFNv1G75.js";import"./DOMUtils-U3UN3Upo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BEbEcElf.js";import"./zIndexSlice-Dncpv5eL.js";import"./immer-CEyiSkJ_.js";import"./CartesianAxis-DDkNiZWI.js";import"./types-Tac8hqr1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D7QGUU6q.js";import"./RechartsWrapper-G6A0M6aO.js";import"./index-BtQYyCmS.js";import"./hooks-CXRZ7L0i.js";import"./axisSelectors-BG6ANmCy.js";import"./d3-scale-DeHMkDWI.js";import"./CategoricalChart-0dU2cdKG.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-DU23w57v.js";import"./chartDataContext-CjureaJk.js";import"./ReactUtils-B6lO7UVh.js";import"./ActivePoints-ASRgwgve.js";import"./Dot-qDjeeFl4.js";import"./RegisterGraphicalItemId-CcpQzZXr.js";import"./ErrorBarContext-itdE-Ouz.js";import"./GraphicalItemClipPath-DsfyRwV1.js";import"./SetGraphicalItem-KCmHDaFB.js";import"./useAnimationId-8KJrDx3h.js";import"./getRadiusAndStrokeWidthFromDot-C6XbVpCy.js";import"./ActiveShapeUtils--5PkurDt.js";import"./isPlainObject-BNuWTbsi.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSNMtd6V.js";import"./Trapezoid-DXcU-3dd.js";import"./Sector-DxkSpspk.js";import"./Symbols-CshwXNPg.js";import"./symbol-BUAsdTvL.js";import"./step-Db3ooEEu.js";import"./Curve-D42dBTuL.js";import"./index-CZZFGVCv.js";import"./ChartSizeDimensions-DXL_JkvM.js";import"./OffsetShower-BD7Cp3wL.js";import"./PlotAreaShower-lKDhtFbm.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
