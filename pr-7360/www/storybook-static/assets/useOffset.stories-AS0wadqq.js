import{e as t}from"./iframe-HklBE7vu.js";import{O as p}from"./OffsetShower-CEG4HECi.js";import{X as a}from"./hooks-CnW7pryE.js";import{g as s}from"./arrayEqualityCheck-CG9NM7M7.js";import{C as n}from"./ComposedChart-BGfN3j9r.js";import{p as f}from"./Page-DPte-9pC.js";import{L as h}from"./Line-CUZjpINw.js";import{X as d}from"./XAxis-BeXZR1BO.js";import{Y as g}from"./YAxis-D8onK4in.js";import{L as c}from"./Legend-xz8sv_Ff.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-GhqI97PU.js";import"./immer-B5bJcxrJ.js";import"./axisSelectors-DQ1WchLm.js";import"./d3-scale-ByKoA0zW.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CmkmsSRd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BYIG_iFP.js";import"./index-QkgaeSYl.js";import"./zIndexSlice-CVyG9qRx.js";import"./renderedTicksSlice--_3RJj48.js";import"./CartesianChart-DtRgi5pX.js";import"./chartDataContext-I9Ggk7nE.js";import"./CategoricalChart-BN63kSx-.js";import"./Curve-CrXnBsHg.js";import"./types-D0dCN7Ox.js";import"./step-BUDT2jIN.js";import"./path-DyVhHtw_.js";import"./Layer-D8ZS5vyC.js";import"./ReactUtils-mFr3j9RO.js";import"./Label-ClB5KqOQ.js";import"./Text-Dt3ARXcw.js";import"./DOMUtils-BwtPQYwq.js";import"./ZIndexLayer-BPeCIwGs.js";import"./ActivePoints-D0HNFK49.js";import"./Dot-C8qeBV5T.js";import"./RegisterGraphicalItemId-BaLxd7fn.js";import"./ErrorBarContext-C1pX8SkM.js";import"./GraphicalItemClipPath-Xc6uO7Vp.js";import"./SetGraphicalItem-CjWW7GpL.js";import"./useAnimationId-Yfa74zNK.js";import"./getRadiusAndStrokeWidthFromDot-Bqn73jYn.js";import"./ActiveShapeUtils-CKRCWn6k.js";import"./CartesianAxis-C0qWYU4C.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B00rQK0H.js";import"./symbol-DGMnJi_X.js";import"./useElementOffset-Dsq1NBLL.js";import"./uniqBy-BzZ8JhX0.js";import"./iteratee-BhmnkMoJ.js";const dt={title:"API/hooks/useOffset",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},e={name:"useOffset",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:f,margin:r.margin},t.createElement(h,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(c,null),t.createElement(p,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <OffsetShower />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UseOffset"];export{e as UseOffset,gt as __namedExportsOrder,dt as default};
