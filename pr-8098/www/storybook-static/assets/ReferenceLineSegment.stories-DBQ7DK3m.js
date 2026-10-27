import{R as e}from"./iframe-CEQushtN.js";import{R as i}from"./zIndexSlice-DjNM_HLz.js";import{C as n}from"./ComposedChart-BlLv9QRG.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DdX2dsam.js";import{X as s}from"./XAxis-Dox0Mf_6.js";import{Y as c}from"./YAxis-CO7P54oT.js";import{L as d}from"./Line-RGSptLoh.js";import{R as g}from"./ReferenceLine-esb0Db0W.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CyZKvMPR.js";import"./throttle-D-s41lqW.js";import"./index-BtHOWWHr.js";import"./index-Dij9Lyzg.js";import"./RechartsWrapper-DXBxSHCJ.js";import"./axisSelectors-DQduFkeJ.js";import"./polarAxisSelectors-S5DqA3LI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BWM46Ydz.js";import"./index-BdO45VT9.js";import"./index-CoxdILWo.js";import"./renderedTicksSlice-BiOzFX7m.js";import"./index-BB4PCvH7.js";import"./CartesianChart-BcxOd9Ut.js";import"./ZIndexPortal-pBjad6tL.js";import"./CategoricalChart-gEK0X1ot.js";import"./CartesianAxis-Df5o-IJd.js";import"./Layer-C3v_EKIk.js";import"./Text-CmoBCOlM.js";import"./pageBackground-QlEa7JV2.js";import"./ZIndexLayer-DtsqWk3z.js";import"./Label-CFJJzt7V.js";import"./dataEntryStyles-BlFVEHbT.js";import"./types-CPVpRlsk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-C2Lci0Z6.js";import"./step-BbPJEBHq.js";import"./path-DyVhHtw_.js";import"./LabelList-DwlBaftj.js";import"./ActivePoints-DJ2RJcRF.js";import"./Dot-CuIjyWbv.js";import"./activeStyles-6x5lKRrB.js";import"./useAnimationId-CzbeFnj4.js";import"./Symbols-C3N2Nfx0.js";import"./symbol-DSj-rHxT.js";import"./RegisterGraphicalItemId-CVBDPhvw.js";import"./ErrorBarContext-CpznhA_J.js";import"./SetGraphicalItem-D60Grc7B.js";import"./getRadiusAndStrokeWidthFromDot-CzdVPXFS.js";import"./ActiveShapeUtils-D8RrSuBC.js";import"./useEffectiveDataKey-BKKYPJCk.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
