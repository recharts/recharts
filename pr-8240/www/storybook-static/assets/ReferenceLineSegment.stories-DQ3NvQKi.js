import{R as e}from"./iframe-CQK5cKb5.js";import{R as i}from"./zIndexSlice-B7W_lSrS.js";import{C as n}from"./ComposedChart-BPNXxxpF.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Dzn84rmM.js";import{X as s}from"./XAxis-C7d_UGHt.js";import{Y as c}from"./YAxis-CXpvs3FV.js";import{L as d}from"./Line-CK4N9DPd.js";import{R as g}from"./ReferenceLine-C6jS1TEN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-sIKj046z.js";import"./throttle-CtjoOnFV.js";import"./index-Dm38SIQa.js";import"./index-BKYCEKLA.js";import"./RechartsWrapper-DIL7xA5W.js";import"./axisSelectors-CFm2aUpt.js";import"./polarAxisSelectors-CGBkjniO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DXQtVXGL.js";import"./index-CB2LtrSa.js";import"./index-FJUFiiDw.js";import"./renderedTicksSlice-CfjQzOiB.js";import"./index-vF-n4YF_.js";import"./fillDefinitions-R6mNXYbM.js";import"./CartesianChart-CdwXekNk.js";import"./chartDataContext-LfCv8xRO.js";import"./CategoricalChart-DiRS6s-r.js";import"./CartesianAxis-BgpXgN1R.js";import"./Layer-urQEAooy.js";import"./Text-Z2ey8U7p.js";import"./ZIndexLayer-9k2RLX5n.js";import"./Label-CQ2HjeWR.js";import"./types-DmMnI0O_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-B0cUpmBX.js";import"./step-D2yChQSN.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-B4J35a5k.js";import"./ActivePoints-C-llUCjP.js";import"./Dot-DqwBwinu.js";import"./activeStyles-DkKN9Gb1.js";import"./useAnimationId-C1Da615s.js";import"./Symbols-BYEI9G2W.js";import"./symbol-CDkSHUUS.js";import"./ErrorBarContext-7B25K72P.js";import"./SetGraphicalItem-u5-88p1b.js";import"./getRadiusAndStrokeWidthFromDot-B0dUD5K2.js";import"./ActiveShapeUtils-DSt9b1dG.js";import"./useEffectiveDataKey-C9n3TkLL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
