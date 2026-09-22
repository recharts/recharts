import{R as e}from"./iframe-D0zbLhxA.js";import{R as i}from"./zIndexSlice-CWkdbIA2.js";import{C as n}from"./ComposedChart-Bxco2poZ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Dxz-EVsG.js";import{X as s}from"./XAxis-C4BjHZeA.js";import{Y as c}from"./YAxis-BZXRR7_6.js";import{L as d}from"./Line-whJSU_O5.js";import{R as g}from"./ReferenceLine-C7Pgj2l5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B_CESfsw.js";import"./index-88DQaVXO.js";import"./index-CyOzo8aY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BgsmPYXb.js";import"./isWellBehavedNumber-x1jcTYzd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BY5Xz_58.js";import"./axisSelectors-BlTNsS6D.js";import"./d3-scale-DfMtHGNT.js";import"./index-BWHvlcOR.js";import"./index-Blp0C-1x.js";import"./renderedTicksSlice-DXlRaIPl.js";import"./index-Bnqxj0FR.js";import"./CartesianChart-BS4vd5Ws.js";import"./chartDataContext-CXCNMTYE.js";import"./CategoricalChart-0fndcTvE.js";import"./CartesianAxis-HOzTxsIt.js";import"./Layer-CmDCK7Pe.js";import"./Text-_UZJg8Mt.js";import"./DOMUtils-CI9OljrR.js";import"./useId-DQM9uYad.js";import"./useBackwardsCompatibleTheme-BiiWRDQN.js";import"./Label-BXZW4D8v.js";import"./ZIndexLayer-BARNP0Xd.js";import"./types-CtSuVyzs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DcMb9zNQ.js";import"./step-BSEqRnvY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Wcsxci2q.js";import"./useAnimationId-DmbXEcsZ.js";import"./ActivePoints-EMJbfe9W.js";import"./Dot-Dj6uRf99.js";import"./RegisterGraphicalItemId-FqWIkkm7.js";import"./ErrorBarContext-Bjv3Wf_t.js";import"./GraphicalItemClipPath-CTIN6h-2.js";import"./SetGraphicalItem-oTDI8Dya.js";import"./getRadiusAndStrokeWidthFromDot-CxIU_DtO.js";import"./ActiveShapeUtils-BN8uTuPe.js";import"./useGraphicalItemIdentity-Bpqle07f.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
