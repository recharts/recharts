import{R as e}from"./iframe-CRBCr4I7.js";import{R as i}from"./zIndexSlice-C5HnNY9r.js";import{C as n}from"./ComposedChart-AEeY6CWp.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-ByvwPBwu.js";import{X as s}from"./XAxis-4jTaFcnE.js";import{Y as c}from"./YAxis-C5vFCns8.js";import{L as d}from"./Line-Bk3eQLZy.js";import{R as g}from"./ReferenceLine-BHMOosBH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C-CjWl4M.js";import"./throttle-Bi7M9SHL.js";import"./index-DNywOopk.js";import"./index-CgJEBRA7.js";import"./RechartsWrapper-Csv9gEG8.js";import"./axisSelectors-Cn24srzI.js";import"./polarAxisSelectors-BXwH5847.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BBFMZtoY.js";import"./index-CYvH0a5R.js";import"./index-D8BMywLD.js";import"./renderedTicksSlice-Bcj92DQ0.js";import"./index-DOjsHhAo.js";import"./fillDefinitions-MhsyTwKb.js";import"./CartesianChart-DtrL87f_.js";import"./chartDataContext-Ds5ARDJg.js";import"./CategoricalChart-CIMwuqDL.js";import"./CartesianAxis-Cnz0mea7.js";import"./Layer-DK4q3BXK.js";import"./Text-CzrZS4hs.js";import"./ZIndexLayer-ChuLKuaE.js";import"./Label-CLJtKhiN.js";import"./types-BcVdsd1S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DSL_ZrdX.js";import"./Curve-L8TXrD0N.js";import"./step-CDOWbVN9.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BCu_-7t9.js";import"./ActivePoints-BaVCT3KN.js";import"./Dot-BSp4p8j6.js";import"./activeStyles-BGmObwWl.js";import"./useAnimationId-BEWOQrK8.js";import"./Symbols-qyep14Vl.js";import"./symbol-dNn9HYSI.js";import"./ErrorBarContext-C9vHq9NB.js";import"./SetGraphicalItem-CVR_yFh9.js";import"./ActiveShapeUtils-DkbYb7aY.js";import"./useEffectiveDataKey-Bv2ZRQEX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
