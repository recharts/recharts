import{R as e}from"./iframe-DhLiHYA9.js";import{R as i}from"./zIndexSlice-0EuGNLI-.js";import{C as a}from"./ComposedChart-CGZKvMzU.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CEFwFbVr.js";import{X as s}from"./XAxis-BpfFXf4g.js";import{Y as c}from"./YAxis-lwpN76oK.js";import{L as d}from"./Line-CUQX2rtT.js";import{R as g}from"./ReferenceLine-IJ8u-t4I.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-T8RsDcjn.js";import"./index-NG-Tdzng.js";import"./index-BeAu05Eb.js";import"./get-BqOTE_u_.js";import"./resolveDefaultProps-CBPzFJH6.js";import"./isWellBehavedNumber-BNidD9Ks.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CvYHcQFm.js";import"./index-xOxo7x3f.js";import"./index-DKmBjdDb.js";import"./renderedTicksSlice-B1LCQJVr.js";import"./axisSelectors-DL47bbYB.js";import"./d3-scale-B_WyWKG3.js";import"./CartesianChart-BdXEaLDP.js";import"./chartDataContext-Bcb5nIkO.js";import"./CategoricalChart-CN-mt1-6.js";import"./CartesianAxis-dYZ4VxrX.js";import"./Layer-DglRvEKa.js";import"./Text-D4hUpX6-.js";import"./DOMUtils-BQBCpy3J.js";import"./Label-Cv4QmxCb.js";import"./ZIndexLayer-CvBhZ60T.js";import"./types-CH1fGuRR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-rXpWLPqx.js";import"./step-DzpE9YVj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C2gGUiAe.js";import"./useAnimationId-PUY_wn7H.js";import"./ActivePoints-CK5L63lz.js";import"./Dot-pp5BV2FH.js";import"./RegisterGraphicalItemId-BJxK6F3S.js";import"./ErrorBarContext-BjQaCHVv.js";import"./GraphicalItemClipPath-Bu7CM1zV.js";import"./SetGraphicalItem-t7MzgWgu.js";import"./getRadiusAndStrokeWidthFromDot-DKfDk9su.js";import"./ActiveShapeUtils-CPYzaIXa.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
