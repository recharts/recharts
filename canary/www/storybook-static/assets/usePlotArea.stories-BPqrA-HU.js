import{R as t}from"./iframe-CsUJaUxM.js";import{j as a}from"./RechartsWrapper-T8mD1Lc3.js";import{R as p}from"./zIndexSlice-DR8GOdx_.js";import{C as n}from"./ComposedChart-v1mD6g8I.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-T7c7_Mqn.js";import{X as l}from"./XAxis-CECMNFnt.js";import{Y as h}from"./YAxis-oUxgU8a1.js";import{L as c}from"./Legend-BqCds3GH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-wCngT9vT.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CPJkZcPs.js";import"./throttle-jYQKZYpr.js";import"./index-DwbFMAfW.js";import"./index-CuzTPq-B.js";import"./isWellBehavedNumber-B1KHZ9NA.js";import"./d3-scale-BlcUMonb.js";import"./index-B6LqR4R9.js";import"./index-LRMsLTDO.js";import"./renderedTicksSlice-DMUlxU_r.js";import"./index-BkMQdhAs.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-9AGq9zI6.js";import"./chartDataContext-Dl9PHzyn.js";import"./CategoricalChart-BPTMFHzn.js";import"./Layer-BL2WKRfB.js";import"./Curve-BBNZ0-qm.js";import"./types-DY32nFAv.js";import"./step-E2BXM1O_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BwJboHDv.js";import"./Label-BBIMhlH3.js";import"./Text-Ca7ex0z4.js";import"./DOMUtils-DV9i-gvX.js";import"./useId-DskunR0V.js";import"./useBackwardsCompatibleTheme-CzetmO85.js";import"./ZIndexLayer-y8FwKDfZ.js";import"./useAnimationId-CIIiKuIL.js";import"./ActivePoints-DgXpbHzY.js";import"./Dot-3GIj0k7o.js";import"./RegisterGraphicalItemId-BOfAVeru.js";import"./ErrorBarContext-BOrR3fwL.js";import"./GraphicalItemClipPath-yorSgC5b.js";import"./SetGraphicalItem-y4Qrn0nd.js";import"./getRadiusAndStrokeWidthFromDot-qziiS-Bg.js";import"./ActiveShapeUtils-CrmNWRMG.js";import"./useGraphicalItemIdentity-Dtj6CrmT.js";import"./CartesianAxis-DGUFe4-P.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CM0b_dES.js";import"./symbol-COICJbUr.js";import"./useElementOffset-C_sTQTtU.js";import"./uniqBy-BPwJ3JcN.js";import"./iteratee-BC6ZgAay.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
