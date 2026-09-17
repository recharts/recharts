import{R as e}from"./iframe-CChz1bjN.js";import{R as i}from"./zIndexSlice-J8dqmnLP.js";import{C as n}from"./ComposedChart-CYDZ6cYR.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CS5NuRyi.js";import{X as s}from"./XAxis-Dz7Mu1Ti.js";import{Y as c}from"./YAxis-D3lxiiSv.js";import{L as d}from"./Line-Bf8JTt31.js";import{R as g}from"./ReferenceLine-C6FoS9Mh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DthdhVSw.js";import"./index-CoE7QQC7.js";import"./index-CtYYpEHs.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DJguzPnh.js";import"./isWellBehavedNumber-PtazZpkz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ChebgGg6.js";import"./axisSelectors-Bb5mJC8T.js";import"./d3-scale-DDBYxdkW.js";import"./index-CFolhqr8.js";import"./index-By2IEA6Z.js";import"./renderedTicksSlice-CR60wYV2.js";import"./index-DDJfRyTp.js";import"./CartesianChart-DkExCOrE.js";import"./chartDataContext-QAaM8qFu.js";import"./CategoricalChart-9EjbSGzt.js";import"./CartesianAxis-DfCGaEVk.js";import"./Layer-CvQSqWng.js";import"./Text-BrAnNoDm.js";import"./DOMUtils--GcIornt.js";import"./useId-K9oYYmyx.js";import"./useBackwardsCompatibleTheme-BGpxY7da.js";import"./Label-BPWxH0ZN.js";import"./ZIndexLayer-CPJzWnIR.js";import"./types-7thkXqxr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-QJYhnBl8.js";import"./step-BINpEDE3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BIr5SWwF.js";import"./useAnimationId-q2i8nWUT.js";import"./ActivePoints-CNZPQxVC.js";import"./Dot-BKha21me.js";import"./RegisterGraphicalItemId-Bv9eLHhO.js";import"./ErrorBarContext-DOiMkOOX.js";import"./GraphicalItemClipPath-Dod_0DGM.js";import"./SetGraphicalItem-N_7Gn5e1.js";import"./getRadiusAndStrokeWidthFromDot-BWutJIdQ.js";import"./ActiveShapeUtils-DRMRiarj.js";import"./useGraphicalItemIdentity-DNZCCG3V.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
