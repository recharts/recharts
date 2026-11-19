import{R as e}from"./iframe-DzGmKl0f.js";import{R as i}from"./zIndexSlice-C_hCocyn.js";import{C as n}from"./ComposedChart-BMgh39RK.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-B2Ex7aw7.js";import{X as s}from"./XAxis-jTQGWzOI.js";import{Y as c}from"./YAxis-0b4E4ljK.js";import{L as d}from"./Line-Bstpyosc.js";import{R as g}from"./ReferenceLine-BdNNywjI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DQfzh6Jd.js";import"./throttle-CTpO1d0G.js";import"./index-CLtTm24E.js";import"./index-BW8cRvO1.js";import"./RechartsWrapper-DyktFVWv.js";import"./axisSelectors-CXmW2Cx2.js";import"./polarAxisSelectors-BjROy2nM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BqUwTZLN.js";import"./index-Dfq7BfPO.js";import"./index-CbanqfDi.js";import"./renderedTicksSlice-Cj7UXIdm.js";import"./index-By0aYyvM.js";import"./fillDefinitions-D8TUKuUW.js";import"./CartesianChart-BHEtFY6v.js";import"./chartDataContext-CBkj6nC7.js";import"./CategoricalChart-8iPxehsc.js";import"./CartesianAxis-CdlgwruK.js";import"./Layer-FlA1vg8A.js";import"./Text-4Yqe8NiQ.js";import"./ZIndexLayer-DCgoY3ny.js";import"./Label-D7SDC5pA.js";import"./types-DhQXJZ5L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-x4kMFRNy.js";import"./Curve-CY0LgJEY.js";import"./step-DtdKv3o3.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Dj48sKZ8.js";import"./ActivePoints-Dk-ASqYF.js";import"./Dot-C7ry2cU8.js";import"./activeStyles-wSVq9YzU.js";import"./useAnimationId-CGyZ0qQs.js";import"./Symbols-f4V1uJfI.js";import"./symbol-C_p4EZd-.js";import"./ErrorBarContext-DXEk3_Nm.js";import"./SetGraphicalItem-BOgZ-5S7.js";import"./ActiveShapeUtils-DvbjLMLM.js";import"./useEffectiveDataKey-DtLTSAvq.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
