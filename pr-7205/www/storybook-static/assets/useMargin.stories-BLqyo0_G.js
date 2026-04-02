import{e as t}from"./iframe-GfPTcwVI.js";import{S as i}from"./ChartSizeDimensions-BaFn1hfG.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-zByCBXfp.js";import{C as c}from"./ComposedChart-g_3yl1AM.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-CQvFBi_4.js";import{X as f}from"./XAxis-D09jYQEI.js";import{Y as M}from"./YAxis-CAzK1_Cz.js";import{L as b}from"./Legend-D57hLtU6.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyMlioZM.js";import"./immer-C_ivLHTT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-xCEfQ3e6.js";import"./index-BPTb04yT.js";import"./hooks-CkLAhtAF.js";import"./axisSelectors-C1I30lvY.js";import"./d3-scale-CZ7HbC41.js";import"./zIndexSlice-BiywrOzN.js";import"./renderedTicksSlice-DubTevQM.js";import"./CartesianChart-C7artJXa.js";import"./chartDataContext-Dnq1iHBW.js";import"./CategoricalChart-DT84xA7C.js";import"./Layer-D5BHTSBb.js";import"./ReactUtils-D6XtI53O.js";import"./Label-Dcg-6Pxd.js";import"./Text-Cz6Ir0Bd.js";import"./DOMUtils-CBAOKK6G.js";import"./ZIndexLayer-ci0MSbfQ.js";import"./ActivePoints-DiX9hpdl.js";import"./Dot-B-wtPhzZ.js";import"./types-D3MLb6DN.js";import"./RegisterGraphicalItemId-BQasV6-Q.js";import"./ErrorBarContext-C9NklHyW.js";import"./GraphicalItemClipPath-DGk_Ausf.js";import"./SetGraphicalItem-v2qQdmnb.js";import"./useAnimationId-CJpqr1GQ.js";import"./getRadiusAndStrokeWidthFromDot-C8_IZqg1.js";import"./ActiveShapeUtils-DMmYEdu0.js";import"./isPlainObject-2G-hgaEW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChBxJEym.js";import"./Trapezoid-CUiisPn6.js";import"./Sector-F_1AI-V0.js";import"./Symbols-BG3HhGrw.js";import"./symbol-Dj4Qey2P.js";import"./step-BJ9jGGmt.js";import"./Curve-sYWT_Cke.js";import"./CartesianAxis-BgLkReml.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Cj2S4Ntr.js";import"./uniqBy-B45iBOfE.js";import"./iteratee-Jsq1qhFx.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
