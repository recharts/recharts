import{c as t}from"./iframe-Bw01G05S.js";import{d as p}from"./CategoricalChart-CJ_zmDdd.js";import{g as a}from"./zIndexSlice-BVJPDscV.js";import{C as s}from"./ComposedChart-DiZxKxJ7.js";import{p as n}from"./Page-DPte-9pC.js";import{L as f}from"./Line-Z8smfELB.js";import{X as d}from"./XAxis-TrLbUf6y.js";import{Y as h}from"./YAxis-leBvxI0P.js";import{L as g}from"./Legend-BTXBFyzF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dy3I_vud.js";import"./index-ChbgLzNl.js";import"./index-CnqP2OOu.js";import"./index-CpLIt3E_.js";import"./index-gPPvxt9l.js";import"./immer-vKd3rXCH.js";import"./get-PLF287kI.js";import"./renderedTicksSlice-BSWqpX2F.js";import"./axisSelectors-CYrXIzpV.js";import"./d3-scale-C81Lq6p_.js";import"./resolveDefaultProps-BX9yAQwT.js";import"./isWellBehavedNumber-BdaQsoH1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CmfxvnV2.js";import"./chartDataContext-DTGe0ZBk.js";import"./Curve-CGu0Zh8a.js";import"./types-BkmoQN99.js";import"./step-Ci-i76rd.js";import"./path-DyVhHtw_.js";import"./Layer-_mE6wvdm.js";import"./ReactUtils-CPtpn3OS.js";import"./Label-0YWOaiFB.js";import"./Text-qrCQLdvB.js";import"./DOMUtils-CB0xgJC5.js";import"./ZIndexLayer-CUHrFVWb.js";import"./ActivePoints-CLH-5Llk.js";import"./Dot-KFQGNzLM.js";import"./RegisterGraphicalItemId-C6zAsVLj.js";import"./ErrorBarContext-DD6wo7ll.js";import"./GraphicalItemClipPath-Cn2vbNRH.js";import"./SetGraphicalItem-CbgDA4Hu.js";import"./useAnimationId-DfklYMDy.js";import"./getRadiusAndStrokeWidthFromDot-B2Lc250a.js";import"./ActiveShapeUtils-ChrAkVLT.js";import"./CartesianAxis-D2bv38Ox.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-OmH1xCgA.js";import"./symbol-yiQ3AMIL.js";import"./useElementOffset-BJf-bgFc.js";import"./uniqBy-CJKAqM1m.js";import"./iteratee-CJNbtgLs.js";const dt={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(s,{data:n,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ht=["UseOffset"];export{r as UseOffset,ht as __namedExportsOrder,dt as default};
