import{R as e}from"./iframe-CA6cNkus.js";import{R as i}from"./zIndexSlice-O14BPpZi.js";import{C as a}from"./ComposedChart-D-kg5Bmb.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-vzqtg0Zj.js";import{X as s}from"./XAxis-C-xfE_6F.js";import{Y as c}from"./YAxis-CFfqmSxu.js";import{L as d}from"./Line-o5rstLhB.js";import{R as g}from"./ReferenceLine-D2cVMwvV.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Dmy9GJDo.js";import"./index-CfaPbByM.js";import"./index-DbciZ0iE.js";import"./get-CFJz0ojL.js";import"./resolveDefaultProps-C9L5vbOj.js";import"./isWellBehavedNumber-BkzajOOq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BrfCX34J.js";import"./index-DQmIhdua.js";import"./index-PI3smBoN.js";import"./renderedTicksSlice-DwJ0KlHq.js";import"./axisSelectors-BqSveJ2d.js";import"./d3-scale-C6_zgknL.js";import"./CartesianChart-B9pQBHyJ.js";import"./chartDataContext-D73bINqU.js";import"./CategoricalChart-D2WxsK_0.js";import"./CartesianAxis-Bnc9pIGx.js";import"./Layer-D-oRDXko.js";import"./Text-NUcA7Wwc.js";import"./DOMUtils-BVqsAse9.js";import"./Label-B1-Zgg5t.js";import"./ZIndexLayer-L_zBn_oX.js";import"./types-BSXU9Oqu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DAXRhNFX.js";import"./step-QPa8K90E.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B54-TdNS.js";import"./useAnimationId-b25y8QfL.js";import"./ActivePoints-DaJcax4p.js";import"./Dot-CZ4GTYkF.js";import"./RegisterGraphicalItemId-pJmMrti4.js";import"./ErrorBarContext-arfdjlYp.js";import"./GraphicalItemClipPath-B1gJnBar.js";import"./SetGraphicalItem-BUx_zIn8.js";import"./getRadiusAndStrokeWidthFromDot-BwfCKTiN.js";import"./ActiveShapeUtils-DCmnuM_G.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
