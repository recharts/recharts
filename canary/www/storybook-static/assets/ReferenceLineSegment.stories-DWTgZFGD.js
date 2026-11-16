import{R as e}from"./iframe-BCDSQyOo.js";import{R as i}from"./zIndexSlice-CihbJEZu.js";import{C as n}from"./ComposedChart-DErsj6jf.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CGPONKR4.js";import{X as s}from"./XAxis-Bk5D6i9E.js";import{Y as c}from"./YAxis-DnB_2g0Q.js";import{L as d}from"./Line-ltW-vN8n.js";import{R as g}from"./ReferenceLine-BqJXVqJT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-s8FlAHQv.js";import"./throttle-D1lsoNSG.js";import"./index-fM7uFcW2.js";import"./index-I1h0g8eb.js";import"./RechartsWrapper-BqnNMENS.js";import"./axisSelectors-Cvi9anx3.js";import"./polarAxisSelectors-B-E8zUoJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CYMX0yrb.js";import"./index-ClkyNFpC.js";import"./index-Q4jLEkfo.js";import"./renderedTicksSlice-xgVyqeD0.js";import"./index-oH22xoCa.js";import"./fillDefinitions-LB53xD7z.js";import"./CartesianChart-CkJbsuu1.js";import"./chartDataContext-B0YZn_2w.js";import"./CategoricalChart-CNAFu95B.js";import"./CartesianAxis-DeXvVTxW.js";import"./Layer-sje4p3Rc.js";import"./Text-RrCvwkND.js";import"./ZIndexLayer-PvoR44l1.js";import"./Label-C128IvfG.js";import"./types-Czx6BcyQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-B6YhKAHC.js";import"./step-_U3fQ-Ri.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Dui-VolR.js";import"./ActivePoints-C5df2K_e.js";import"./Dot-DeEkJUDG.js";import"./activeStyles-BVEmlDAe.js";import"./useAnimationId-DOTZ38LK.js";import"./Symbols-BhFpev2q.js";import"./symbol-BFQRYOt6.js";import"./ErrorBarContext-Cfqy-sXq.js";import"./SetGraphicalItem-CopBxnc9.js";import"./getRadiusAndStrokeWidthFromDot-tbcff33p.js";import"./ActiveShapeUtils-CHvAKsEu.js";import"./useEffectiveDataKey-Chw-9k17.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
