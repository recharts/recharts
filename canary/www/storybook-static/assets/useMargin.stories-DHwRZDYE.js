import{e as t}from"./iframe-C5l4DaJO.js";import{S as i}from"./ChartSizeDimensions-MhlbxMFi.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-fM0600Tt.js";import{C as c}from"./ComposedChart-OPX83XMh.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-DrCzNtMt.js";import{X as f}from"./XAxis-ByPIKQU1.js";import{Y as M}from"./YAxis-Bv8R6otu.js";import{L as b}from"./Legend-BkA5LrBA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DwIPpqCH.js";import"./immer-BjHWRAG8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DiBHoctn.js";import"./index-D7g3MY6b.js";import"./hooks-CSO2fo2K.js";import"./axisSelectors-2uaPjYwk.js";import"./d3-scale-BfKzTeEs.js";import"./zIndexSlice-BEG784rk.js";import"./renderedTicksSlice-DaHjC-C2.js";import"./CartesianChart-DaKOKwGw.js";import"./chartDataContext-m4J49DgA.js";import"./CategoricalChart-z5J8qEz7.js";import"./Layer-BQ7ZElOW.js";import"./ReactUtils-C_GhcNSF.js";import"./Label-CxCh3fMv.js";import"./Text-BNyB8yLu.js";import"./DOMUtils-rl_vKHVV.js";import"./ZIndexLayer-DhZlyZCE.js";import"./ActivePoints-DwJBd7DK.js";import"./Dot-DaM5pVyw.js";import"./types-CjQ8Fnwy.js";import"./RegisterGraphicalItemId-DYWgcQMi.js";import"./ErrorBarContext-Cu_fSz69.js";import"./GraphicalItemClipPath-H584rNDL.js";import"./SetGraphicalItem-DKJsTKLV.js";import"./useAnimationId-Ivno0Gk6.js";import"./getRadiusAndStrokeWidthFromDot-Cq3JaBlL.js";import"./ActiveShapeUtils-BesHP-Xv.js";import"./isPlainObject-Bb91VWq3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BvzLcgoo.js";import"./Trapezoid-Mm7QWflE.js";import"./Sector-BXKHAeCR.js";import"./Symbols-CUAzhRbj.js";import"./symbol-Cm5jk-xC.js";import"./step-5ABOenpE.js";import"./Curve-C8kgiu5F.js";import"./CartesianAxis-DstjLvt8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CyBq5cT_.js";import"./uniqBy-BufKpw2a.js";import"./iteratee-CTT2mLKG.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <MarginShower />
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
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Ct=["UseMargin"];export{a as UseMargin,Ct as __namedExportsOrder,wt as default};
