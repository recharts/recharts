import{R as e}from"./iframe-DdGnkOFo.js";import{R as i}from"./zIndexSlice-Coao54AN.js";import{C as a}from"./ComposedChart-A-lxRNNH.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-8-gqwNmB.js";import{X as s}from"./XAxis-CwjUQWj_.js";import{Y as c}from"./YAxis-BBZ_UVPr.js";import{L as d}from"./Line-DbTGCsdD.js";import{R as g}from"./ReferenceLine-BcfTOl_-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zZssU-Yn.js";import"./index-CLyHvciH.js";import"./index-Z1BsW0X1.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Btuog99o.js";import"./isWellBehavedNumber-vlfZeEqT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWAtSdtd.js";import"./index-BT6JmE6p.js";import"./index-Ikz32X_R.js";import"./renderedTicksSlice-BOOh9KOs.js";import"./axisSelectors-Cd50OEg7.js";import"./d3-scale-BvrGgEa2.js";import"./CartesianChart-BEpSJ7tS.js";import"./chartDataContext-DAj5ZKMQ.js";import"./CategoricalChart-B-_DRhy8.js";import"./CartesianAxis-Bo84uroF.js";import"./Layer-C_y1fxvr.js";import"./Text-DAM87njj.js";import"./DOMUtils-DV9Ec2hx.js";import"./Label-BhIy96Hp.js";import"./ZIndexLayer-Ohjg-EB3.js";import"./types-D3VR5HmA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BxYGAEW6.js";import"./step-B8IQ9ApF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BUboBg0D.js";import"./useAnimationId-6rr0uMBz.js";import"./ActivePoints-fBjIF9Nl.js";import"./Dot-CqaCoBUP.js";import"./RegisterGraphicalItemId-COu7yO2P.js";import"./ErrorBarContext-BD7rxjgN.js";import"./GraphicalItemClipPath-DAEO1IcC.js";import"./SetGraphicalItem-2sM575PE.js";import"./getRadiusAndStrokeWidthFromDot-D5R5gYG2.js";import"./ActiveShapeUtils-D54fuxpr.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
