import{R as e}from"./iframe-BMwTDcev.js";import{R as i}from"./zIndexSlice-CPh4fBg6.js";import{C as a}from"./ComposedChart-DZYtQfew.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DqBHGexO.js";import{X as s}from"./XAxis-7lt7L-uw.js";import{Y as c}from"./YAxis-CCCDM9CF.js";import{L as d}from"./Line-DUpd8mAG.js";import{R as g}from"./ReferenceLine-ClhoHcWO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D2Td0Lm2.js";import"./index-CE-0bGiS.js";import"./index-3001YAOl.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DPnbdQu5.js";import"./isWellBehavedNumber-BJdFuSyd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BRX6xo6C.js";import"./index-ya5mjY_f.js";import"./index-CVc-PuqQ.js";import"./renderedTicksSlice-Co-nhFmz.js";import"./axisSelectors-sdy2ioo_.js";import"./d3-scale-Dl0VFgtV.js";import"./CartesianChart-BteRC4rl.js";import"./chartDataContext-CXqd6BGE.js";import"./CategoricalChart-CdHUt0U8.js";import"./CartesianAxis-DZkRw9Hy.js";import"./Layer-DhxEcDzW.js";import"./Text-JRu-Gvgm.js";import"./DOMUtils-BEqLO6hC.js";import"./Label-nIa50DhA.js";import"./ZIndexLayer-BzcpQumx.js";import"./types-zXcSMCPW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DSVLafFk.js";import"./step-BkUkyWe_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BgUudFYn.js";import"./useAnimationId-CiOVdLQp.js";import"./ActivePoints-C2MaqzXC.js";import"./Dot-KOqs7h1g.js";import"./RegisterGraphicalItemId-B8C7xs2e.js";import"./ErrorBarContext-DgB1iysu.js";import"./GraphicalItemClipPath-C1lbmTQ1.js";import"./SetGraphicalItem-D1eQX8Ui.js";import"./getRadiusAndStrokeWidthFromDot-DrCQxCSe.js";import"./ActiveShapeUtils-BPh2ccfV.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
