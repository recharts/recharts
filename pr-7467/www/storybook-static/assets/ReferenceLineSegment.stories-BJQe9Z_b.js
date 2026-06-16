import{R as e}from"./iframe-CnwzBkds.js";import{R as i}from"./zIndexSlice-BpzqiTUQ.js";import{C as a}from"./ComposedChart-C1DfHVp4.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DaDbM5c8.js";import{X as s}from"./XAxis-DbvG2C4p.js";import{Y as c}from"./YAxis-iu19I_Qe.js";import{L as d}from"./Line-DZz_6nuU.js";import{R as g}from"./ReferenceLine-BLcXi6Bi.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BZhv9pDN.js";import"./index-B17a-Fpl.js";import"./index-DKNFhV5H.js";import"./get-B8n4OfLY.js";import"./resolveDefaultProps-DV3X3ep6.js";import"./isWellBehavedNumber-ChDLwcgn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxrV5UFS.js";import"./index-DLJqppDu.js";import"./index-5-p3p247.js";import"./renderedTicksSlice-CAlTfeNf.js";import"./axisSelectors-BYBAWXh2.js";import"./d3-scale-CG2_6ote.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DJOSlpeY.js";import"./chartDataContext-BeCpsJVv.js";import"./CategoricalChart-ijSp3dOV.js";import"./CartesianAxis-BmrJk-2O.js";import"./Layer-BZqaMaXh.js";import"./Text-BltVqzsV.js";import"./DOMUtils-BbYzFqpk.js";import"./Label-CslQeHKW.js";import"./ZIndexLayer-C4T4UXDK.js";import"./types-E3CxlAR_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BxBABYqk.js";import"./step-DoliEjqo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cm-dfr_1.js";import"./useAnimationId-_xLlXMao.js";import"./ActivePoints-PwKQf3Tu.js";import"./Dot-ChNZRKCC.js";import"./RegisterGraphicalItemId-CObDD7O1.js";import"./ErrorBarContext-B0xmk8dk.js";import"./GraphicalItemClipPath-B8izwUTw.js";import"./SetGraphicalItem-DAx4YtHH.js";import"./getRadiusAndStrokeWidthFromDot-BA9mIRYp.js";import"./ActiveShapeUtils-_gRdTSDq.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
