import{e as t}from"./iframe-HklBE7vu.js";import{S as i}from"./ChartSizeDimensions-GhqI97PU.js";import{ah as p,ac as g,ae as h,g as l}from"./arrayEqualityCheck-CG9NM7M7.js";import{C as c}from"./ComposedChart-BGfN3j9r.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-CUZjpINw.js";import{X as f}from"./XAxis-BeXZR1BO.js";import{Y as M}from"./YAxis-D8onK4in.js";import{L as b}from"./Legend-xz8sv_Ff.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CmkmsSRd.js";import"./immer-B5bJcxrJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BYIG_iFP.js";import"./index-QkgaeSYl.js";import"./hooks-CnW7pryE.js";import"./axisSelectors-DQ1WchLm.js";import"./d3-scale-ByKoA0zW.js";import"./zIndexSlice-CVyG9qRx.js";import"./renderedTicksSlice--_3RJj48.js";import"./CartesianChart-DtRgi5pX.js";import"./chartDataContext-I9Ggk7nE.js";import"./CategoricalChart-BN63kSx-.js";import"./Curve-CrXnBsHg.js";import"./types-D0dCN7Ox.js";import"./step-BUDT2jIN.js";import"./path-DyVhHtw_.js";import"./Layer-D8ZS5vyC.js";import"./ReactUtils-mFr3j9RO.js";import"./Label-ClB5KqOQ.js";import"./Text-Dt3ARXcw.js";import"./DOMUtils-BwtPQYwq.js";import"./ZIndexLayer-BPeCIwGs.js";import"./ActivePoints-D0HNFK49.js";import"./Dot-C8qeBV5T.js";import"./RegisterGraphicalItemId-BaLxd7fn.js";import"./ErrorBarContext-C1pX8SkM.js";import"./GraphicalItemClipPath-Xc6uO7Vp.js";import"./SetGraphicalItem-CjWW7GpL.js";import"./useAnimationId-Yfa74zNK.js";import"./getRadiusAndStrokeWidthFromDot-Bqn73jYn.js";import"./ActiveShapeUtils-CKRCWn6k.js";import"./CartesianAxis-C0qWYU4C.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B00rQK0H.js";import"./symbol-DGMnJi_X.js";import"./useElementOffset-Dsq1NBLL.js";import"./uniqBy-BzZ8JhX0.js";import"./iteratee-BhmnkMoJ.js";function E(){const r=p(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const ft={title:"API/hooks/useMargin",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,s;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Mt=["UseMargin"];export{a as UseMargin,Mt as __namedExportsOrder,ft as default};
