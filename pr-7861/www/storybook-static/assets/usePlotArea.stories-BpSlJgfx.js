import{R as t}from"./iframe-D0zbLhxA.js";import{j as a}from"./RechartsWrapper-BY5Xz_58.js";import{R as p}from"./zIndexSlice-CWkdbIA2.js";import{C as n}from"./ComposedChart-Bxco2poZ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-whJSU_O5.js";import{X as l}from"./XAxis-C4BjHZeA.js";import{Y as h}from"./YAxis-BZXRR7_6.js";import{L as c}from"./Legend-DbI3NbId.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BgsmPYXb.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BlTNsS6D.js";import"./throttle-B_CESfsw.js";import"./index-88DQaVXO.js";import"./index-CyOzo8aY.js";import"./isWellBehavedNumber-x1jcTYzd.js";import"./d3-scale-DfMtHGNT.js";import"./index-BWHvlcOR.js";import"./index-Blp0C-1x.js";import"./renderedTicksSlice-DXlRaIPl.js";import"./index-Bnqxj0FR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BS4vd5Ws.js";import"./chartDataContext-CXCNMTYE.js";import"./CategoricalChart-0fndcTvE.js";import"./Layer-CmDCK7Pe.js";import"./Curve-DcMb9zNQ.js";import"./types-CtSuVyzs.js";import"./step-BSEqRnvY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Wcsxci2q.js";import"./Label-BXZW4D8v.js";import"./Text-_UZJg8Mt.js";import"./DOMUtils-CI9OljrR.js";import"./useId-DQM9uYad.js";import"./useBackwardsCompatibleTheme-BiiWRDQN.js";import"./ZIndexLayer-BARNP0Xd.js";import"./useAnimationId-DmbXEcsZ.js";import"./ActivePoints-EMJbfe9W.js";import"./Dot-Dj6uRf99.js";import"./RegisterGraphicalItemId-FqWIkkm7.js";import"./ErrorBarContext-Bjv3Wf_t.js";import"./GraphicalItemClipPath-CTIN6h-2.js";import"./SetGraphicalItem-oTDI8Dya.js";import"./getRadiusAndStrokeWidthFromDot-CxIU_DtO.js";import"./ActiveShapeUtils-BN8uTuPe.js";import"./useGraphicalItemIdentity-Bpqle07f.js";import"./CartesianAxis-HOzTxsIt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D0FoESKy.js";import"./symbol-tnZAudYg.js";import"./useElementOffset-C4VfinFA.js";import"./uniqBy-B0UQ28Z4.js";import"./iteratee-DlJirvey.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
