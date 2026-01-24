import{e}from"./iframe-CQZRorsz.js";import{R as i}from"./arrayEqualityCheck-CQz2flWD.js";import{C as a}from"./ComposedChart-CBRgk2dx.js";import{C as p}from"./CartesianGrid-CAd5NfVG.js";import{X as n}from"./XAxis-BF5Pgeue.js";import{Y as s}from"./YAxis-ZJLISdMg.js";import{L as c}from"./Line-D-WT-9y6.js";import{R as d}from"./ReferenceLine-DmzAmE5f.js";import{R as g}from"./RechartsHookInspector-C6yxPh9Y.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DxEfcX11.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-3JJSXLuc.js";import"./hooks-8nQ0k4Um.js";import"./axisSelectors-CGQ8Nqi9.js";import"./zIndexSlice-DivviUqw.js";import"./CartesianChart-BcPUndnw.js";import"./chartDataContext-CFVBZ9Sm.js";import"./CategoricalChart-BLq3U5DT.js";import"./CartesianAxis-DCx-He5v.js";import"./Layer-BhxYv9l3.js";import"./Text-CY4lUY6F.js";import"./DOMUtils-CKyp5Bk3.js";import"./Label-BJgUEQlL.js";import"./ZIndexLayer-D-FGBInf.js";import"./types-Doxj5qxW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C6XrS2ih.js";import"./ActivePoints-BQmvxGKr.js";import"./Dot-CzK3gQom.js";import"./RegisterGraphicalItemId-CzLwNJmP.js";import"./ErrorBarContext-BV2zEajK.js";import"./GraphicalItemClipPath-DLLdlCGA.js";import"./SetGraphicalItem-BtJfHG9-.js";import"./useAnimationId-DBhXyqXg.js";import"./getRadiusAndStrokeWidthFromDot-DfdfCJIf.js";import"./ActiveShapeUtils-C0gybZn4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSDamI1k.js";import"./Trapezoid-Cm1xY1NA.js";import"./Sector-CNW4UiZI.js";import"./Symbols-DuJw27Ks.js";import"./Curve-DrDC8HjY.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-hMecVWzD.js";import"./ChartSizeDimensions-DRFM_waE.js";import"./OffsetShower-CrJHGQg7.js";import"./PlotAreaShower-De7PuJHn.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
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
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
