import{R as e}from"./iframe-CLIhRm7R.js";import{R as i}from"./zIndexSlice-cURKLlYU.js";import{C as n}from"./ComposedChart-DplTXjfB.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BN53D3nn.js";import{X as s}from"./XAxis-ClFJPrvR.js";import{Y as c}from"./YAxis-CpKr4jH1.js";import{L as d}from"./Line-CEDpZoGH.js";import{R as g}from"./ReferenceLine-SCVvOPQf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D-eAHaNk.js";import"./throttle-B7ykPIAJ.js";import"./index-DR1HnwII.js";import"./index-BUNiVZYu.js";import"./RechartsWrapper-DwQg3ppC.js";import"./axisSelectors-CDU9IwIv.js";import"./polarAxisSelectors-D5qsDUBS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D44QmEnt.js";import"./index-BRcZtsT0.js";import"./index-B_FXaL58.js";import"./renderedTicksSlice-BBFFs0IH.js";import"./index-CQ513AnM.js";import"./fillDefinitions-Y1HmkZBg.js";import"./CartesianChart-Cfp3axNC.js";import"./chartDataContext-CnJguSW_.js";import"./CategoricalChart-RViwWBSb.js";import"./CartesianAxis-xu52TX6T.js";import"./Layer-BbygySlV.js";import"./Text-JwQNyxYp.js";import"./ZIndexLayer-CVT-3Kt6.js";import"./Label-DearAakw.js";import"./types-B-D67JLt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-4sZTg9_Z.js";import"./Curve-BOeChXDU.js";import"./step-b64WSsG3.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BrgkWZuf.js";import"./ActivePoints-C9r-WFdJ.js";import"./Dot-C3ytqCXy.js";import"./activeStyles-DkO8dKQi.js";import"./useAnimationId-CFCPoirY.js";import"./Symbols-CL9eWqJw.js";import"./symbol-DfjzGj-p.js";import"./ErrorBarContext-D47utnLy.js";import"./SetGraphicalItem-Byj-zkni.js";import"./ActiveShapeUtils-B5F3agWS.js";import"./useEffectiveDataKey-B6ZXrXvv.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
