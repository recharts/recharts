import{R as e}from"./iframe-tVU98U3S.js";import{R as i}from"./zIndexSlice-CyBuhAxg.js";import{C as n}from"./ComposedChart-DMW4n_nS.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-QAViJosn.js";import{X as s}from"./XAxis-B6lV3McA.js";import{Y as c}from"./YAxis-Cz8LA1zT.js";import{L as d}from"./Line-DB7R10NU.js";import{R as g}from"./ReferenceLine-BxRKiYhh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-7FDSZAP-.js";import"./index-BHaD7xdN.js";import"./index-Dkxefu6-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-yCAU9vb4.js";import"./isWellBehavedNumber-Cm_Hybde.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6c-k2Ww.js";import"./axisSelectors-Dk0RXaf-.js";import"./d3-scale-DsWe6xo3.js";import"./index-D5U9ICSu.js";import"./index-CelAevGI.js";import"./renderedTicksSlice-B6OJ4cSv.js";import"./index-Dkiks_wh.js";import"./CartesianChart-cRl5-qnH.js";import"./chartDataContext-gF0asL1b.js";import"./CategoricalChart-ZVxjTQBd.js";import"./CartesianAxis-BOF0DDEi.js";import"./Layer-BI456J7x.js";import"./Text-BIcirXpx.js";import"./DOMUtils-ZXubKPMD.js";import"./useId-Bhu2YHP8.js";import"./useBackwardsCompatibleTheme-BKS2Kex1.js";import"./Label-BiGv8_RF.js";import"./ZIndexLayer-uxtsIBVq.js";import"./types-B3--bUgQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Ba9QZAHb.js";import"./step-BPWa_HmE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CqlhlM_R.js";import"./useAnimationId-3DY0RP1D.js";import"./ActivePoints-DterfL9t.js";import"./Dot-B9zwDON4.js";import"./RegisterGraphicalItemId-BUrw94Fl.js";import"./ErrorBarContext-D5CP1D9F.js";import"./GraphicalItemClipPath-DLKqhYTd.js";import"./SetGraphicalItem-BAgFstOS.js";import"./getRadiusAndStrokeWidthFromDot-Cld96GCx.js";import"./ActiveShapeUtils-D132qIUj.js";import"./useGraphicalItemIdentity-BYgYeKaf.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
