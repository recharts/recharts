import{R as e}from"./iframe-DkECMRhY.js";import{R as i}from"./zIndexSlice-DrphCOe8.js";import{C as a}from"./ComposedChart-DAUnDtCN.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Bj2xYAk3.js";import{X as s}from"./XAxis-CnIY0uCY.js";import{Y as c}from"./YAxis-DYBfxLcG.js";import{L as d}from"./Line-1UeX_xo7.js";import{R as g}from"./ReferenceLine-jk5ie66N.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-OeP2NIwG.js";import"./index-Bs5MO9B0.js";import"./index-B2EkAXQG.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-9kFOeAbx.js";import"./isWellBehavedNumber-C5D-spqh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DT2t4UUR.js";import"./index-CubO9nle.js";import"./index-48_ZTq2u.js";import"./renderedTicksSlice-Dz89v3et.js";import"./axisSelectors-O1utMkLJ.js";import"./d3-scale-DCyD-m6k.js";import"./CartesianChart-DlZ9N_1W.js";import"./chartDataContext-Buh6poim.js";import"./CategoricalChart-Ctl-0XVF.js";import"./CartesianAxis-Bbd2gVOF.js";import"./Layer-BR_lx081.js";import"./Text-D0YGp1Dc.js";import"./DOMUtils-m9hSMA-C.js";import"./Label-D0EmKjrf.js";import"./ZIndexLayer-CJnfUCXF.js";import"./types-BhAPDMfv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-55NMYWP1.js";import"./step-BU5cS4PN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D_PfprH1.js";import"./useAnimationId-BLnnlAbr.js";import"./ActivePoints-CRIWlOJ4.js";import"./Dot-DRTvDWT7.js";import"./RegisterGraphicalItemId-DM_TAUFh.js";import"./ErrorBarContext-Do1YuZSV.js";import"./GraphicalItemClipPath-B9n7ZYaN.js";import"./SetGraphicalItem-AXvs4ZTf.js";import"./getRadiusAndStrokeWidthFromDot-BOG-LMh5.js";import"./ActiveShapeUtils-BkWJCflD.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
