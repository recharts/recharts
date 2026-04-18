import{e}from"./iframe-C7MtdY8E.js";import{g as l}from"./utils-ePvtT4un.js";import{R as i}from"./ReferenceLine-DiI2wGdm.js";import{R as m}from"./arrayEqualityCheck-DgrHMpGx.js";import{C as p}from"./ComposedChart-CFjyPj2A.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as u}from"./CartesianGrid-DFcxm4db.js";import{X as c}from"./XAxis-3uF26BVq.js";import{Y as h}from"./YAxis-D_0wuDlr.js";import{L as y}from"./Line-DHYjswyr.js";import{R as f}from"./RechartsHookInspector-DFQ9rNFJ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Layer-Ulref4PH.js";import"./resolveDefaultProps-BARk_uhU.js";import"./Label-DSRQ68Gc.js";import"./Text-D3CPw6sI.js";import"./DOMUtils-Caf6EbGd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Chbgzy16.js";import"./zIndexSlice-3LN6T8_r.js";import"./immer-tybRsQ9G.js";import"./CartesianAxis-B2QCJlN1.js";import"./types-BR6al878.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Vrp6ItcJ.js";import"./RechartsWrapper-BCy35Z8x.js";import"./index-ZRFMj45p.js";import"./hooks-CRCNzzkU.js";import"./axisSelectors-BszE-kHQ.js";import"./d3-scale--QLdYl1D.js";import"./CategoricalChart-DeBE8RoO.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./CartesianChart-CIdWsL9L.js";import"./chartDataContext-bU1HBY0X.js";import"./ReactUtils-BhCHdCFE.js";import"./ActivePoints-BwYpscwz.js";import"./Dot-BqE6ffT8.js";import"./RegisterGraphicalItemId-DRO9PQuR.js";import"./ErrorBarContext-DwrVEdn2.js";import"./GraphicalItemClipPath-CvFbG0n3.js";import"./SetGraphicalItem-4oFR7JPf.js";import"./useAnimationId-xNATfe3s.js";import"./getRadiusAndStrokeWidthFromDot-DnzUrahg.js";import"./ActiveShapeUtils-Bu5dlaov.js";import"./isPlainObject-CwNYxtMJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ci3DSaKm.js";import"./Trapezoid-CKW8i93u.js";import"./Sector-AhRoIGMa.js";import"./Symbols-DB88izld.js";import"./symbol-Ct681S22.js";import"./step-DOKoL0Mc.js";import"./Curve-DoPC-oTP.js";import"./index-B1uIQZ_f.js";import"./ChartSizeDimensions-jmlBhTx2.js";import"./OffsetShower-DHj-Abix.js";import"./PlotAreaShower-94ccGUzR.js";const n={className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},ifOverflow:{description:"Defines how to draw this component if it falls partly outside the canvas:\n\n- `discard`: the whole component will not be drawn at all\n- `hidden`: the component will be clipped to the chart plot area\n- `visible`: the component will be drawn completely\n- `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area",table:{type:{summary:'"discard" | "extendDomain" | "hidden" | "visible"'},category:"General",defaultValue:{summary:"discard"}},defaultValue:"discard"},label:{description:"Renders a single label.\n\n- `false`: no labels are rendered\n- `string` | `number`: the content of the label\n- `object`: the props of LabelList component\n- `ReactElement`: a custom label element\n- `function`: a render function of custom label",table:{type:{summary:"(union of 6 variants)"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},position:{description:`The position of the reference line when the axis has bandwidth
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
