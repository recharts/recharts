import{e as t}from"./iframe-FqQriuOU.js";import{S as i}from"./ChartSizeDimensions-BmkjlCCd.js";import{ah as s,ac as g,ae as h,g as l}from"./arrayEqualityCheck-D81yCQ_E.js";import{C as c}from"./ComposedChart-C8Wy7GrP.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-4-mxtk0F.js";import{X as f}from"./XAxis-rE-0ziVR.js";import{Y as M}from"./YAxis-Bx3kycjW.js";import{L as b}from"./Legend-BZ5lxXMe.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CH-QvTob.js";import"./immer-majn-qZf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CApzUvyj.js";import"./index-B7L9uR1Y.js";import"./hooks-B_UbI8Xu.js";import"./axisSelectors-_fK9ZDWF.js";import"./d3-scale-i74XhqWc.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-f7paLzdj.js";import"./renderedTicksSlice-C4IzMNte.js";import"./CartesianChart-DL9N19jV.js";import"./chartDataContext-8vaUd_eG.js";import"./CategoricalChart-D0upkKoq.js";import"./Layer-dRSSbr5y.js";import"./Curve-bxiY4w-f.js";import"./types-CfmOzYIG.js";import"./step-DRejhJRi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BOrN0e6v.js";import"./Label-CKdOaAhH.js";import"./Text-DPCTz-gd.js";import"./DOMUtils-BuFom25w.js";import"./ZIndexLayer-C869JS3k.js";import"./useAnimationId-CwJGQlGj.js";import"./ActivePoints-p2Wn9c62.js";import"./Dot-CoDBEdb8.js";import"./RegisterGraphicalItemId-W17uiJWi.js";import"./ErrorBarContext-BDkPCebh.js";import"./GraphicalItemClipPath-BYvnIWBH.js";import"./SetGraphicalItem-w0uUjr7L.js";import"./getRadiusAndStrokeWidthFromDot-Bl0IsbtV.js";import"./ActiveShapeUtils-DpMDeTgr.js";import"./CartesianAxis-BeuIWSvD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DAX_okS0.js";import"./symbol-B9MBbnrG.js";import"./useElementOffset-B8C7PBsW.js";import"./uniqBy-B2F8-yBK.js";import"./iteratee-ZukpjJzA.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const Mt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const bt=["UseMargin"];export{a as UseMargin,bt as __namedExportsOrder,Mt as default};
