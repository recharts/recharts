import{R as e}from"./iframe-UgRt0vcp.js";import{R as i}from"./zIndexSlice-B7qjUnDG.js";import{C as n}from"./ComposedChart-C6hx2aan.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CLHuENG3.js";import{X as s}from"./XAxis-4W0ht619.js";import{Y as c}from"./YAxis-CJZXqV3k.js";import{L as d}from"./Line-Dipve1CO.js";import{R as g}from"./ReferenceLine-Bhci8NjC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DuwfTuib.js";import"./index-Bv-jl5LW.js";import"./index-Bvm9MNt8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BXcWlbHp.js";import"./isWellBehavedNumber-ysV-_8Aq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-EuqqM12a.js";import"./axisSelectors-DIh-l85l.js";import"./d3-scale-Cn-9twYV.js";import"./index-BUuQQxxl.js";import"./index-BtCdhKy_.js";import"./renderedTicksSlice-rspC5CNs.js";import"./index-NRyuBWjq.js";import"./CartesianChart-DoGcO1A-.js";import"./chartDataContext-BKXebmD7.js";import"./CategoricalChart-BbYkYnOT.js";import"./CartesianAxis-RT1RuzF2.js";import"./Layer-C1js-4J0.js";import"./Text-CIcS1Cht.js";import"./DOMUtils-hZ-h7K-C.js";import"./useId-nYKyJk56.js";import"./useBackwardsCompatibleTheme-DJK5Z4IB.js";import"./Label-Ct2bC8Rh.js";import"./ZIndexLayer-A1V94IPq.js";import"./types-BQX4mfvu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BaJYpKaM.js";import"./step-BAtXOj-E.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BpS1OD2e.js";import"./useAnimationId-DPVBY7S8.js";import"./ActivePoints-BWaxPFAB.js";import"./Dot-DphG9sPw.js";import"./RegisterGraphicalItemId-Cu5milgY.js";import"./ErrorBarContext-g5uku85c.js";import"./GraphicalItemClipPath-C-zprDgr.js";import"./SetGraphicalItem-1hTkIljj.js";import"./getRadiusAndStrokeWidthFromDot-CKTCh4hG.js";import"./ActiveShapeUtils-B_uanDrb.js";import"./useGraphicalItemIdentity-DyOG4GgF.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
