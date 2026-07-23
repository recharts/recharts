import{R as e}from"./iframe-BJ6rGQc6.js";import{R as i}from"./zIndexSlice-BthxejHI.js";import{C as a}from"./ComposedChart-DAq7OREE.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-5faz7OBU.js";import{X as s}from"./XAxis-DjB4BtKv.js";import{Y as c}from"./YAxis-41-XvzNM.js";import{L as d}from"./Line-DLjakGIl.js";import{R as g}from"./ReferenceLine-CFGRBtoF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-cNz-OreL.js";import"./index-BmNs2kCE.js";import"./index-CByH2eT_.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BO6O7yzj.js";import"./isWellBehavedNumber-DPc5CIJW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ChNksolv.js";import"./index-mopUcmNZ.js";import"./index-Bmr20IMW.js";import"./renderedTicksSlice-C0Y7ZKTU.js";import"./axisSelectors-BLC4H6fV.js";import"./d3-scale-DN-uWHg9.js";import"./CartesianChart-Bgx90lkE.js";import"./chartDataContext-sqlI8BYS.js";import"./CategoricalChart-BQ-Zgg5z.js";import"./CartesianAxis-HIzhBiiI.js";import"./Layer-CWFT9o_4.js";import"./Text-B3HJfVNK.js";import"./DOMUtils-B9FEHnPQ.js";import"./Label-GAUKfLbl.js";import"./ZIndexLayer-Ux9EkA8k.js";import"./types-C1lw_8rt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-BjFMHVU-.js";import"./step-D3keTh0D.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DC-H_ZkC.js";import"./useAnimationId-DQh6YXIz.js";import"./ActivePoints-BWSLTzTs.js";import"./Dot-WtNB5uJQ.js";import"./RegisterGraphicalItemId-Bwp-eRlf.js";import"./ErrorBarContext-CXKSzW2x.js";import"./GraphicalItemClipPath-C6Rgg4xk.js";import"./SetGraphicalItem-D1cCKorc.js";import"./getRadiusAndStrokeWidthFromDot-BpprK3MD.js";import"./ActiveShapeUtils-CUDn-tDt.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
