import{R as e}from"./iframe-CgifVdGo.js";import{R as i}from"./zIndexSlice-cYNAtEFZ.js";import{C as a}from"./ComposedChart-CGqH3jPg.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Chud-6bi.js";import{X as s}from"./XAxis-CZyFu1IP.js";import{Y as c}from"./YAxis-CdCViLx5.js";import{L as d}from"./Line-Bk8sgUVU.js";import{R as g}from"./ReferenceLine-rD1ZUFat.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-RNDoIp5v.js";import"./index-CE-jOOb9.js";import"./index-2TSMvrpE.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BWqJsMaX.js";import"./isWellBehavedNumber-B5I1Y8ko.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bdtf4nFv.js";import"./index-B-WSnDkr.js";import"./index-BIPnoVIq.js";import"./renderedTicksSlice-CdxlE0u2.js";import"./axisSelectors-BoKC2N9p.js";import"./d3-scale-B4rm30Tj.js";import"./CartesianChart-5X0OU6Ae.js";import"./chartDataContext-Cgkpv-Wp.js";import"./CategoricalChart-gWPq6G-r.js";import"./CartesianAxis-5D6mywdN.js";import"./Layer-CeyNxq54.js";import"./Text-CP2PjM28.js";import"./DOMUtils-D8x8v_7W.js";import"./Label-TzQ7qbgp.js";import"./ZIndexLayer-D9Ef8fDH.js";import"./types-IwSvkxMz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-kzqc65C_.js";import"./step-BTn_xVWj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-wyY7R1ar.js";import"./useAnimationId-B2JL6a3u.js";import"./ActivePoints-CRIrUZTw.js";import"./Dot-ki06ENMH.js";import"./RegisterGraphicalItemId-DWqGyRZG.js";import"./ErrorBarContext-CK5Inlk3.js";import"./GraphicalItemClipPath-ChEyBJAa.js";import"./SetGraphicalItem-DiTEFY4D.js";import"./getRadiusAndStrokeWidthFromDot-CVuDAoNN.js";import"./ActiveShapeUtils-PZHl54QD.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
