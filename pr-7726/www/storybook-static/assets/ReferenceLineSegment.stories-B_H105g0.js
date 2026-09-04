import{R as e}from"./iframe-BKk44VOT.js";import{R as i}from"./zIndexSlice-BjWKOBUm.js";import{C as a}from"./ComposedChart-Bs9KweDK.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CGCqXQ0o.js";import{X as s}from"./XAxis-2cJ7kaI0.js";import{Y as c}from"./YAxis-DPFxody7.js";import{L as d}from"./Line-BvewL5vb.js";import{R as g}from"./ReferenceLine-DyropQH5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BdnDrpLZ.js";import"./index-BTZJ4Yum.js";import"./index-D9YNF8fg.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CzfJP_I-.js";import"./isWellBehavedNumber-BPjqRkxS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CVGPHljF.js";import"./axisSelectors-BiJJw6in.js";import"./d3-scale-rR_TqiZM.js";import"./index-BjsXzqOC.js";import"./index-CvfG5lr1.js";import"./renderedTicksSlice-BYjFoixx.js";import"./index-TeAPTJXJ.js";import"./CartesianChart-DS36pb4k.js";import"./chartDataContext-O1WSQyDv.js";import"./CategoricalChart-C8xt7Kx0.js";import"./CartesianAxis-D8EUtvdL.js";import"./Layer-6OjQkfig.js";import"./Text-BtR9CUIB.js";import"./DOMUtils-Dil5o6Lr.js";import"./useId-hvzCLp2v.js";import"./useBackwardsCompatibleTheme-VDOEj1kR.js";import"./Label-BPr6N2Q-.js";import"./ZIndexLayer-wqOp9Wsh.js";import"./types-CjNR6i_K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Bl3ua7_T.js";import"./step-Dtmfv3UM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-_iMVf6zS.js";import"./useAnimationId-DT580Fuf.js";import"./ActivePoints-RMI7wAiF.js";import"./Dot-CWbOoqzR.js";import"./RegisterGraphicalItemId-DFS7YVx4.js";import"./ErrorBarContext-BlzVudvo.js";import"./GraphicalItemClipPath-Bj844YW0.js";import"./SetGraphicalItem-BFQOKK6x.js";import"./getRadiusAndStrokeWidthFromDot-nIjLU3ma.js";import"./ActiveShapeUtils-DDxo2n_b.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const fe=["Segment"];export{t as Segment,fe as __namedExportsOrder,ge as default};
