import{R as t}from"./iframe-DVXtBbhv.js";import{z as a}from"./RechartsWrapper-AdQm7Ax9.js";import{R as p}from"./zIndexSlice-CRXmCTqm.js";import{C as n}from"./ComposedChart-BchTIeWN.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-ZRT5g1vt.js";import{X as l}from"./XAxis-BQ7gOxOo.js";import{Y as h}from"./YAxis-e33_-5yv.js";import{L as c}from"./Legend-Dlxza6ak.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-eZCAl6aH.js";import"./get-cF5BDHN6.js";import"./axisSelectors-M5GsU3rg.js";import"./throttle-CSTRLONy.js";import"./index-kgrSM8GI.js";import"./index-HiZVMws2.js";import"./polarAxisSelectors-Jcl3obl_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ctk2L_AK.js";import"./index-BfyWBC3f.js";import"./index-CMkKBRRd.js";import"./renderedTicksSlice-ZV6qlBU2.js";import"./index-BZygq-Tx.js";import"./fillDefinitions-RTxS13Os.js";import"./CartesianChart-AaBKVVVh.js";import"./ZIndexPortal-D-pQJaCe.js";import"./CategoricalChart-DkOrwY__.js";import"./Layer-DvCe8pYL.js";import"./Curve-Cv9dH7Wv.js";import"./types-DRd1AoLJ.js";import"./step-CaWVPUsr.js";import"./path-DyVhHtw_.js";import"./LabelList-h2AkLue_.js";import"./Label-5Ji-gJCy.js";import"./Text-vABaHyza.js";import"./DOMUtils-BAyS9uvf.js";import"./ZIndexLayer-CLiiJgzL.js";import"./ActivePoints-COJ33MUQ.js";import"./Dot-C4qnCcQo.js";import"./activeStyles-C5r4Jq_u.js";import"./useAnimationId-mwIlAEpa.js";import"./dataEntryStyles-aRHeEgvk.js";import"./Symbols-_bj5ojYc.js";import"./symbol-w9HomPlm.js";import"./ErrorBarContext-DvlMCK3a.js";import"./SetGraphicalItem-DIzHPpXP.js";import"./getRadiusAndStrokeWidthFromDot-CoVHwyP0.js";import"./ActiveShapeUtils-nIAhhh4O.js";import"./useEffectiveDataKey-sNV4f9xq.js";import"./CartesianAxis-BnuaOFtw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-R8U0hgkF.js";import"./uniqBy-DRpOlyJe.js";import"./iteratee-BH10e2Wz.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
