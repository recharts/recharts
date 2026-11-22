import{R as e}from"./iframe-Ctz7IHW3.js";import{R as i}from"./zIndexSlice-BOhKAINV.js";import{C as n}from"./ComposedChart-B4J-boeJ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-B14trDzl.js";import{X as s}from"./XAxis-C7TfuOxC.js";import{Y as c}from"./YAxis-B3lARwfm.js";import{L as d}from"./Line-DAx-7uu_.js";import{R as g}from"./ReferenceLine-BK1-VdSQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps--WcksQI-.js";import"./throttle-BK8aOUUW.js";import"./index-Tzm4T3gC.js";import"./index-CP4Z1Y6_.js";import"./RechartsWrapper-B5-BQ43L.js";import"./axisSelectors-CmsQwY11.js";import"./polarAxisSelectors-2S85hvBv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7S8RTAk.js";import"./index-D9m5BeGD.js";import"./index-DTCcovWx.js";import"./renderedTicksSlice-zg3AzzRh.js";import"./index-D8taZNOk.js";import"./fillDefinitions-BjpebX6W.js";import"./CartesianChart-Dig5bGoH.js";import"./chartDataContext-CSFdu_tp.js";import"./CategoricalChart-pUCO11xA.js";import"./CartesianAxis-D2YA5lRA.js";import"./Layer-DwO5QDCB.js";import"./Text-d5sUAgwt.js";import"./ZIndexLayer-GawJhFHW.js";import"./Label-Cx25Byjk.js";import"./types-o_vm3YHF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-CcQspbXE.js";import"./Curve-BmO4aPRH.js";import"./step-CWzaq-TC.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DhE1x9oW.js";import"./ActivePoints-BEz7jJwJ.js";import"./Dot-Djhcp3TT.js";import"./activeStyles-DYt1MbCF.js";import"./useAnimationId-CDmHN2F8.js";import"./Symbols-D3D7M8Jk.js";import"./symbol-B5JmXw1t.js";import"./ErrorBarContext-CWAd3_q9.js";import"./SetGraphicalItem-ZbovNH06.js";import"./ActiveShapeUtils-CHF2XahU.js";import"./useEffectiveDataKey-v8KMaUS0.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
