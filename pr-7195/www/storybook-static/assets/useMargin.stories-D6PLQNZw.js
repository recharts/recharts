import{e as t}from"./iframe-Ch1Isql8.js";import{S as i}from"./ChartSizeDimensions-Xxd3TXQk.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-BCEbDsDx.js";import{C as c}from"./ComposedChart-BG01JFWy.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-Cj_RlCcR.js";import{X as f}from"./XAxis-BKww8jIv.js";import{Y as M}from"./YAxis-BZ1lWBvu.js";import{L as b}from"./Legend-XSH_rsV0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C2WRALEr.js";import"./immer-BTgrVrx0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHlnvpBC.js";import"./index-BQodkfcp.js";import"./hooks-DIQ-JHwY.js";import"./axisSelectors-0Ej_8yTo.js";import"./d3-scale-CrbEySHr.js";import"./zIndexSlice-CfYpWTyk.js";import"./renderedTicksSlice-B_3Gl1Hk.js";import"./CartesianChart-CM5Qb5gP.js";import"./chartDataContext-jCxwHdJc.js";import"./CategoricalChart-DFR8bKN5.js";import"./Layer-BO4GuAqP.js";import"./ReactUtils-CsOHi-wi.js";import"./Label-DD8AaqpA.js";import"./Text-BVN_POYl.js";import"./DOMUtils-10gf_B-M.js";import"./ZIndexLayer-DjVbUmgd.js";import"./ActivePoints-BoXPQfRa.js";import"./Dot-BiNuTUfQ.js";import"./types-BJb3G4uR.js";import"./RegisterGraphicalItemId-B38aETS6.js";import"./ErrorBarContext-B1gBZht8.js";import"./GraphicalItemClipPath-5ic9tQHz.js";import"./SetGraphicalItem-CK5a6DJE.js";import"./useAnimationId-BC-9oBmZ.js";import"./getRadiusAndStrokeWidthFromDot-CEWlgPHm.js";import"./ActiveShapeUtils-Ds4ws-40.js";import"./isPlainObject-CbEMMj1e.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DcZ1nspL.js";import"./Trapezoid-CyEP7tU2.js";import"./Sector-DNP4xewC.js";import"./Symbols-hNJtZeth.js";import"./symbol-DKQgrSwN.js";import"./step-B9yE4hVt.js";import"./Curve-DgBmrfnw.js";import"./CartesianAxis-BTQibmSQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BnNRxgQ2.js";import"./uniqBy-C0ShPv6b.js";import"./iteratee-BHbBqIkI.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
