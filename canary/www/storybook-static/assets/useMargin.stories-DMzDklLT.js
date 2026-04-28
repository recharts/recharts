import{e as t}from"./iframe-C-pXZx8X.js";import{S as i}from"./ChartSizeDimensions-7zC2ccyN.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-3ozDp3-_.js";import{C as c}from"./ComposedChart-2Cv-F1wi.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-BOal81Oz.js";import{X as f}from"./XAxis-Cso_vWau.js";import{Y as M}from"./YAxis-Cf-PEWST.js";import{L as b}from"./Legend-BT-Rzo6C.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cEBRbYcQ.js";import"./immer-BPSGuEHb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAPnfiXY.js";import"./index-BNdn82my.js";import"./hooks-r8g2kJ2v.js";import"./axisSelectors-DSvN8duu.js";import"./d3-scale-DB0MXZYa.js";import"./zIndexSlice-DrJF7HQv.js";import"./renderedTicksSlice-DMz1msG5.js";import"./CartesianChart-DOSPFIH6.js";import"./chartDataContext-DGhRpyKC.js";import"./CategoricalChart-DtUHVQpT.js";import"./Layer-B6gfj40j.js";import"./ReactUtils-H7Wf3vTm.js";import"./Label-CSYOUhma.js";import"./Text-BgpDM3B5.js";import"./DOMUtils-DRd1JeLt.js";import"./ZIndexLayer-C3MbX-IF.js";import"./ActivePoints-DJBfU3jH.js";import"./Dot-DLckMiiT.js";import"./types-TOcuhXpR.js";import"./RegisterGraphicalItemId-DGn9oQ3L.js";import"./ErrorBarContext-DCKdVGWu.js";import"./GraphicalItemClipPath-DVPpijAl.js";import"./SetGraphicalItem-BA0j0x-s.js";import"./useAnimationId-Cz59vryg.js";import"./getRadiusAndStrokeWidthFromDot-C9K8kJrs.js";import"./ActiveShapeUtils-ytK3Mr7g.js";import"./isPlainObject-CpM-pRk6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DKyirF4T.js";import"./Trapezoid-DrJg1aIg.js";import"./Sector-D1AnDLTs.js";import"./Symbols-B0EVt28X.js";import"./symbol-Cn7BoW2g.js";import"./step-CZ17sXck.js";import"./Curve-CX8mbWGt.js";import"./CartesianAxis-DSUJUk3Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CrfjAq51.js";import"./uniqBy-39GcZYmA.js";import"./iteratee-DR1zOXOU.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
