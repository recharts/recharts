import{R as e}from"./iframe-DghEAMN6.js";import{R as i}from"./zIndexSlice-DZVgvaAB.js";import{C as a}from"./ComposedChart-CHfOsQFV.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-D5a1CLTf.js";import{X as s}from"./XAxis-BmVtlHU0.js";import{Y as c}from"./YAxis-S3ValhBK.js";import{L as d}from"./Line-BWhqLBJG.js";import{R as g}from"./ReferenceLine-DxDrWw79.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Dzr4hzbh.js";import"./index-DwTkm5Gc.js";import"./index-BNbzKJUN.js";import"./get-OeFwIBZb.js";import"./resolveDefaultProps-DtqwpnL6.js";import"./isWellBehavedNumber-2WeEbslz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper--epX0hHz.js";import"./index-CHxwPLCw.js";import"./index-FvypkAhj.js";import"./renderedTicksSlice-xCX0SP0o.js";import"./axisSelectors-Cx52Tyf1.js";import"./d3-scale-CUSv4nyH.js";import"./CartesianChart-B2gIIl6u.js";import"./chartDataContext-DmtHMzxl.js";import"./CategoricalChart-mficH34_.js";import"./CartesianAxis-BBXp2oHY.js";import"./Layer-4aUlzdTp.js";import"./Text-3TARh6pc.js";import"./DOMUtils-Qs3kgbuH.js";import"./Label-5l5u0djs.js";import"./ZIndexLayer-DDP5Eu2k.js";import"./types-Beb7Z0cf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-AO8nrk2K.js";import"./step-mxE-OcC-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ChrydhAM.js";import"./useAnimationId-bXkDgMGB.js";import"./ActivePoints-bLjk4mq2.js";import"./Dot-CKGCQ671.js";import"./RegisterGraphicalItemId-BH9Fw2h1.js";import"./ErrorBarContext-CWlVXcpe.js";import"./GraphicalItemClipPath-B_ue0lJA.js";import"./SetGraphicalItem-DyRJQvTd.js";import"./getRadiusAndStrokeWidthFromDot-7qCiPA0M.js";import"./ActiveShapeUtils-_OCeFGs0.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
