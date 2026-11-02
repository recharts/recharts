import{R as e}from"./iframe-DVXtBbhv.js";import{R as i}from"./zIndexSlice-CRXmCTqm.js";import{C as n}from"./ComposedChart-BchTIeWN.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BkgNejfq.js";import{X as s}from"./XAxis-BQ7gOxOo.js";import{Y as c}from"./YAxis-e33_-5yv.js";import{L as d}from"./Line-ZRT5g1vt.js";import{R as g}from"./ReferenceLine-D_IK2AKM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-eZCAl6aH.js";import"./throttle-CSTRLONy.js";import"./index-kgrSM8GI.js";import"./index-HiZVMws2.js";import"./RechartsWrapper-AdQm7Ax9.js";import"./axisSelectors-M5GsU3rg.js";import"./polarAxisSelectors-Jcl3obl_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ctk2L_AK.js";import"./index-BfyWBC3f.js";import"./index-CMkKBRRd.js";import"./renderedTicksSlice-ZV6qlBU2.js";import"./index-BZygq-Tx.js";import"./fillDefinitions-RTxS13Os.js";import"./CartesianChart-AaBKVVVh.js";import"./ZIndexPortal-D-pQJaCe.js";import"./CategoricalChart-DkOrwY__.js";import"./CartesianAxis-BnuaOFtw.js";import"./Layer-DvCe8pYL.js";import"./Text-vABaHyza.js";import"./DOMUtils-BAyS9uvf.js";import"./ZIndexLayer-CLiiJgzL.js";import"./Label-5Ji-gJCy.js";import"./types-DRd1AoLJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-Cv9dH7Wv.js";import"./step-CaWVPUsr.js";import"./path-DyVhHtw_.js";import"./LabelList-h2AkLue_.js";import"./ActivePoints-COJ33MUQ.js";import"./Dot-C4qnCcQo.js";import"./activeStyles-C5r4Jq_u.js";import"./useAnimationId-mwIlAEpa.js";import"./dataEntryStyles-aRHeEgvk.js";import"./Symbols-_bj5ojYc.js";import"./symbol-w9HomPlm.js";import"./ErrorBarContext-DvlMCK3a.js";import"./SetGraphicalItem-DIzHPpXP.js";import"./getRadiusAndStrokeWidthFromDot-CoVHwyP0.js";import"./ActiveShapeUtils-nIAhhh4O.js";import"./useEffectiveDataKey-sNV4f9xq.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
