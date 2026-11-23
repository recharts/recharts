import{R as e}from"./iframe-kLrggBpZ.js";import{R as i}from"./zIndexSlice-CKCGde2F.js";import{C as n}from"./ComposedChart-DaK4Bp3q.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-6GpOa0-0.js";import{X as s}from"./XAxis-B-2vEHb0.js";import{Y as c}from"./YAxis-B5avTU_X.js";import{L as d}from"./Line-D-PTgy1R.js";import{R as g}from"./ReferenceLine-1HsLCgx_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D_LYpz2f.js";import"./throttle-BkTfx27C.js";import"./index-Bv7OV-9Z.js";import"./index-C-cjgJnd.js";import"./RechartsWrapper-DVOP9mMm.js";import"./axisSelectors-D6wM5g8f.js";import"./polarAxisSelectors-Dxnj4FFJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DE-4LfFJ.js";import"./index-iHP1RapJ.js";import"./index-B46QsuJB.js";import"./renderedTicksSlice-DgOqiypa.js";import"./index-DVOdnQdm.js";import"./fillDefinitions-CMyVvOcV.js";import"./CartesianChart-DP_q0vfs.js";import"./chartDataContext-DDJgrWCU.js";import"./CategoricalChart-CZkForA1.js";import"./CartesianAxis-Dfi_5bxP.js";import"./Layer-DQPijciL.js";import"./Text-DNntKRRw.js";import"./ZIndexLayer-CZ_FttOi.js";import"./Label-CpspZ4dp.js";import"./types-jTiWDmD0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-D72Rn_78.js";import"./Curve-CYSM8Ubv.js";import"./step-Be-YYOOJ.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DxslDEhK.js";import"./ActivePoints-B3OB9PGr.js";import"./Dot-D134Eke9.js";import"./activeStyles-BevLUsk4.js";import"./useAnimationId-CEVcGH0v.js";import"./Symbols-CW8iQe4i.js";import"./symbol-BFiK-Ghx.js";import"./ErrorBarContext-MaEtcn-S.js";import"./SetGraphicalItem-BJQeWc-6.js";import"./ActiveShapeUtils-BBiGMeQC.js";import"./useEffectiveDataKey-BIUvIyD8.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
