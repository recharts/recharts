import{R as e}from"./iframe-Cuw567ao.js";import{R as i}from"./zIndexSlice-BuAoIKSs.js";import{C as n}from"./ComposedChart-Qred9gjF.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DVQTrB9r.js";import{X as s}from"./XAxis-CFLpq8b6.js";import{Y as c}from"./YAxis-CbSfE1QD.js";import{L as d}from"./Line-DlwGtjpP.js";import{R as g}from"./ReferenceLine-BrulV3zC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bjmeh804.js";import"./index-DPZE1hYp.js";import"./index-CitLG62V.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-EeLa_nJM.js";import"./isWellBehavedNumber-B73u9WX2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dc_lFngx.js";import"./axisSelectors-C6YnqdB_.js";import"./d3-scale-sEI--FZR.js";import"./index-DSKcUbNG.js";import"./index-1-Kpwwt_.js";import"./renderedTicksSlice-DdMSNSAt.js";import"./index-CYPd_aD4.js";import"./CartesianChart-D-_oA4AU.js";import"./chartDataContext-CU7BnpPX.js";import"./CategoricalChart-BLUN9mEz.js";import"./CartesianAxis-D-JaI_zt.js";import"./Layer-T72FoYEi.js";import"./Text-DEJPj4XQ.js";import"./DOMUtils-mjR2JQA6.js";import"./useId-JkOEL8Mu.js";import"./useBackwardsCompatibleTheme-CpTahyhZ.js";import"./Label-BJjrjkoL.js";import"./ZIndexLayer-b9cpcpRU.js";import"./types-BooOBCdC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DpAcFiD4.js";import"./step-oaTKbJ5-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1juRf7B.js";import"./useAnimationId-7XVM7nxW.js";import"./ActivePoints-DUj5MP15.js";import"./Dot-DhnV0obD.js";import"./RegisterGraphicalItemId-COeScAua.js";import"./ErrorBarContext-DsK39YKv.js";import"./GraphicalItemClipPath-DroKw-TI.js";import"./SetGraphicalItem--pdnWjmL.js";import"./getRadiusAndStrokeWidthFromDot-D9Yg2xkO.js";import"./ActiveShapeUtils-P98ujLW0.js";import"./useGraphicalItemIdentity-DXn-ONdl.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
