import{R as t}from"./iframe-CovNYYUo.js";import{j as a}from"./RechartsWrapper-CcAFjHOR.js";import{R as p}from"./zIndexSlice-CG1QRjTL.js";import{C as n}from"./ComposedChart-DrZWGeZy.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CMjTMYY1.js";import{X as l}from"./XAxis-Chp7Zboz.js";import{Y as h}from"./YAxis-C8zfjK9y.js";import{L as c}from"./Legend-Dz5sbpXT.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C3KXfaUm.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DLPfwtJa.js";import"./throttle-DFV15FmS.js";import"./index-BOOo10Dt.js";import"./index-BX1OwXWy.js";import"./isWellBehavedNumber-CBjh5bWe.js";import"./d3-scale-8-fomhbE.js";import"./index-CJEqzZUU.js";import"./index-QRiHEery.js";import"./renderedTicksSlice-CESc-GFX.js";import"./index-B2LjI-r6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-90if4UGz.js";import"./chartDataContext-H-ub9DU9.js";import"./CategoricalChart-BDIwdK2u.js";import"./Layer-DKlwDXlR.js";import"./Curve-CpiWutfx.js";import"./types-KNQCcPDF.js";import"./step-CsDIgpPD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CJ9rAey6.js";import"./Label-9Le1xeRu.js";import"./Text-DEuItJ4K.js";import"./DOMUtils-De4xq-vL.js";import"./useId-Cjo1HJUq.js";import"./useBackwardsCompatibleTheme-DN97qP5V.js";import"./ZIndexLayer-ZvhdQo8-.js";import"./useAnimationId-JaizdS8W.js";import"./ActivePoints-D3M5ri8z.js";import"./Dot-DDfjuoX5.js";import"./RegisterGraphicalItemId-Bcqk9WK5.js";import"./ErrorBarContext-QhTrXeZ4.js";import"./GraphicalItemClipPath-Ba1ve3pE.js";import"./SetGraphicalItem-CMRsJ6yg.js";import"./getRadiusAndStrokeWidthFromDot-DnZmCba8.js";import"./ActiveShapeUtils-D5kbOuDR.js";import"./useGraphicalItemIdentity-Dsva0Zcm.js";import"./CartesianAxis--m_-6qlQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BN8PbOpm.js";import"./symbol-0at1p0JS.js";import"./useElementOffset-BHWyIDmU.js";import"./uniqBy-P1sDwhSw.js";import"./iteratee-Cj-wo9jc.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
