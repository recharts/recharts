import{R as e}from"./iframe-CKMzUQLl.js";import{R as i}from"./zIndexSlice-COhM5Ssb.js";import{C as n}from"./ComposedChart-Br4fGf2D.js";import{p}from"./Page-Cj8EiXz7.js";import{C as a}from"./CartesianGrid-DeYEEHhQ.js";import{X as s}from"./XAxis-BDBlWxDf.js";import{Y as c}from"./YAxis-DB4YGo7q.js";import{L as d}from"./Line-BotpFDCu.js";import{R as g}from"./ReferenceLine-BKtJ15FW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BhXVuCfw.js";import"./throttle-cmQF6pk6.js";import"./index-CnQmPyN6.js";import"./index-Ct96jcIf.js";import"./RechartsWrapper-bg3MvxI9.js";import"./axisSelectors-BSZ3SCPn.js";import"./polarAxisSelectors-BANjW4O_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uc_I_mt7.js";import"./index-D6eYg-36.js";import"./index-Cl9-JK-G.js";import"./renderedTicksSlice-C4Psuukl.js";import"./index-ClS1qprr.js";import"./CartesianChart-CPRN1zhJ.js";import"./ZIndexPortal-CMRkqNYv.js";import"./CategoricalChart-DhGyzJYC.js";import"./CartesianAxis-BPlDbcHH.js";import"./Layer-VHBsdASS.js";import"./Text-CUuCMSti.js";import"./DOMUtils-CShcNi4q.js";import"./pageBackground-DxYgqm3W.js";import"./ZIndexLayer-B6POVY0e.js";import"./Label-DwblDDwh.js";import"./types-DgiI7KOn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-D5lwwS81.js";import"./Curve-B0phiZsH.js";import"./step-Wrr8d7OB.js";import"./path-DyVhHtw_.js";import"./LabelList-DO8MwQV1.js";import"./ActivePoints-DBk2T96T.js";import"./Dot-Da_BOClg.js";import"./activeStyles-CT0hkTay.js";import"./useAnimationId-DKuDzs92.js";import"./dataEntryStyles-2pl_sY7K.js";import"./Symbols-Bp34LNU2.js";import"./symbol-FynIgkai.js";import"./ErrorBarContext-CFogFGPo.js";import"./SetGraphicalItem-BAzOwitl.js";import"./getRadiusAndStrokeWidthFromDot-CkpjOgWX.js";import"./ActiveShapeUtils-BQ5N4hNI.js";import"./useEffectiveDataKey-3-wTW5Lh.js";import"./CartesianScaleHelper-C9Oze4oB.js";const he={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},le=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,le as __namedExportsOrder,he as default};
