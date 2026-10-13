import{R as e}from"./iframe-HQzZVjBz.js";import{R as i}from"./zIndexSlice-CGQ7Au-h.js";import{C as n}from"./ComposedChart-CL_dGEsU.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Buehb8fQ.js";import{X as s}from"./XAxis-DRgGc3zf.js";import{Y as c}from"./YAxis-B3rEjge7.js";import{L as d}from"./Line-CkvZUxt9.js";import{R as g}from"./ReferenceLine-Dx6FqLn4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CBKyBD78.js";import"./index-B-hjV7sb.js";import"./index-CoahYeeF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-FnTseFp7.js";import"./isWellBehavedNumber-CcswNJGt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CHbQgt_R.js";import"./axisSelectors-Pv4KR-zj.js";import"./d3-scale-Bm5seH5s.js";import"./index-Du00f8Ig.js";import"./index-Cd4WuegV.js";import"./renderedTicksSlice-CBd_vSTQ.js";import"./index-DBkbRNLm.js";import"./CartesianChart-CBFKxon3.js";import"./chartDataContext-B1WnW-uC.js";import"./CategoricalChart-CFFTEefl.js";import"./CartesianAxis-DqRUh5Lc.js";import"./Layer-CZF3Yvdy.js";import"./Text-BOeOqlf9.js";import"./pageBackground-BMzh5QHA.js";import"./useId-CLiKfQI1.js";import"./useBackwardsCompatibleTheme-BydTEdxL.js";import"./Label-CkcS20G_.js";import"./ZIndexLayer-B9EFhzLD.js";import"./types-Bq-isVxM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CCST94p6.js";import"./step-mtRqlT_G.js";import"./path-DyVhHtw_.js";import"./activeStyles-Ctuz9FGV.js";import"./useAnimationId-D_-yy58E.js";import"./dataEntryStyles-CrN8We-Y.js";import"./ActivePoints-B2Wdpvql.js";import"./Dot-CrUvj508.js";import"./ErrorBarContext-D0G_BuSS.js";import"./GraphicalItemClipPath-CmI_2v97.js";import"./SetGraphicalItem-CCrIsVeT.js";import"./getRadiusAndStrokeWidthFromDot-DJSL-cTD.js";import"./ActiveShapeUtils-BYEpmP72.js";import"./useEffectiveDataKey-DU6QRSRw.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
