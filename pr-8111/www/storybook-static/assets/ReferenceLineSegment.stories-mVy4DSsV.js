import{R as e}from"./iframe-BGCZ_YYu.js";import{R as i}from"./zIndexSlice-cBJ2sUns.js";import{C as n}from"./ComposedChart-BaMrMimU.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-JddCvUIB.js";import{X as s}from"./XAxis-CnHX8rYU.js";import{Y as c}from"./YAxis-QzbIIYXn.js";import{L as d}from"./Line-CYsPPfA1.js";import{R as g}from"./ReferenceLine-uBNuYQDg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-RfjxFv_h.js";import"./throttle-Dnn9iNkE.js";import"./index-CJpeiM5R.js";import"./index-DRH8hgtI.js";import"./RechartsWrapper-DzjZykj4.js";import"./axisSelectors-BgHWKfZW.js";import"./polarAxisSelectors-9JDQkQFq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WNvBVnHd.js";import"./index-BoRJhsa5.js";import"./index-DsAYZFOJ.js";import"./renderedTicksSlice-0yL2Eztm.js";import"./index-CnE4B9N1.js";import"./CartesianChart-chY_bHfR.js";import"./ZIndexPortal-UfnKJ6nq.js";import"./CategoricalChart-rRn_svVP.js";import"./CartesianAxis-D7nh9FWg.js";import"./Layer-FBjFYiDN.js";import"./Text-Cf8nBYte.js";import"./pageBackground--uJKRUbH.js";import"./ZIndexLayer-DBU2Ux2U.js";import"./Label-CG8eDc0p.js";import"./types-BvE9AUsn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BoHAwgnl.js";import"./step-QoITrG4U.js";import"./path-DyVhHtw_.js";import"./LabelList-D60Hhpwl.js";import"./ActivePoints-GRJI6yy-.js";import"./Dot-CzpZnZIc.js";import"./activeStyles-CJOfqay0.js";import"./useAnimationId-D-9kXAza.js";import"./dataEntryStyles--27SN7qD.js";import"./Symbols-Caix5zUY.js";import"./symbol-1qTipyom.js";import"./ErrorBarContext-B946Wqqn.js";import"./SetGraphicalItem-Cbavgyyx.js";import"./getRadiusAndStrokeWidthFromDot-CNsKyJ5a.js";import"./ActiveShapeUtils-CbZu-UwN.js";import"./useEffectiveDataKey-B32bFSWN.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
