import{R as t}from"./iframe-D_SBmach.js";import{e as p}from"./CategoricalChart-lLmfaMcS.js";import{R as a}from"./zIndexSlice-C-84-lKY.js";import{C as s}from"./ComposedChart-D6p63Jnk.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-C9ajzZ_E.js";import{X as d}from"./XAxis-DH-ZgwOK.js";import{Y as h}from"./YAxis-DDmw5Iip.js";import{L as g}from"./Legend-DMOWzC1s.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CFoCu-Y8.js";import"./index-rdN2tPCT.js";import"./index-Dl7bNBwv.js";import"./index-cqta4xpR.js";import"./index-B3RrYXmh.js";import"./throttle-Dlx_LjAj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-T3miAVW7.js";import"./resolveDefaultProps-Bvyrx_D_.js";import"./isWellBehavedNumber-CqdfCsRm.js";import"./d3-scale-BqLpL1Tc.js";import"./renderedTicksSlice-D04XWQ7B.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-TtiOfZnr.js";import"./chartDataContext-DBogxY-2.js";import"./Layer-Be605v_j.js";import"./Curve-Mu286cSN.js";import"./types-CKo4Bnww.js";import"./step-DTNf_sWS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DZGph_C9.js";import"./Label-CdDqsnQd.js";import"./Text-Bw10gxla.js";import"./DOMUtils-DrunKDJC.js";import"./useBackwardsCompatibleTheme-CD7phNhZ.js";import"./ZIndexLayer-B6Mf8DJp.js";import"./useAnimationId-BA2h0Ua8.js";import"./ActivePoints-CURbINes.js";import"./Dot-CVIHEjDA.js";import"./RegisterGraphicalItemId-Cdozmspz.js";import"./ErrorBarContext-B-lCMwxo.js";import"./GraphicalItemClipPath-D8_vcKpW.js";import"./SetGraphicalItem-BiSwI4Xl.js";import"./getRadiusAndStrokeWidthFromDot-Cq9L4k3r.js";import"./ActiveShapeUtils-CZ0w88RB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BQ5_-jT8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BcJmvpQX.js";import"./symbol-D3RE43u2.js";import"./useElementOffset-DsoUZQYy.js";import"./uniqBy-DSeKXx74.js";import"./iteratee-C0hKcmwL.js";const ct={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(s,{data:n,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const lt=["UseOffset"];export{r as UseOffset,lt as __namedExportsOrder,ct as default};
