import{e as t}from"./iframe-Cr_9Zxyz.js";import{S as i}from"./ChartSizeDimensions-BSIBvgzx.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-C67VePae.js";import{C as c}from"./ComposedChart-BP3-QQ_Z.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-gQxLIXL4.js";import{X as f}from"./XAxis-DoXEBn_P.js";import{Y as M}from"./YAxis-don10v8F.js";import{L as b}from"./Legend-C0TPdzjM.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-TCwXH7Ec.js";import"./immer-C4QSyCgb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqKKWRfj.js";import"./index-WCTFjGJ3.js";import"./hooks-BpLTq7P8.js";import"./axisSelectors-B1y7r4Cr.js";import"./d3-scale-BBKGKrVC.js";import"./zIndexSlice-DN_TI4P2.js";import"./renderedTicksSlice-CLpIiVNo.js";import"./CartesianChart-CrypXdK_.js";import"./chartDataContext-B_zHpYbg.js";import"./CategoricalChart-Dwl_niiN.js";import"./Layer-LRa_hkeo.js";import"./ReactUtils-B4MRvMvn.js";import"./Label-C4NmpEg6.js";import"./Text-B2FTpI2T.js";import"./DOMUtils-ZnDVm2Wt.js";import"./ZIndexLayer-DdInyA8Z.js";import"./ActivePoints-Bn9vOXXn.js";import"./Dot-B1MaLxXk.js";import"./types-DtvHHfJA.js";import"./RegisterGraphicalItemId-DimfmF2M.js";import"./ErrorBarContext-DhjdhMru.js";import"./GraphicalItemClipPath-CDQxSlO_.js";import"./SetGraphicalItem-CPb0K0Vx.js";import"./useAnimationId-CtG5S8C9.js";import"./getRadiusAndStrokeWidthFromDot-DY-AYx3Z.js";import"./ActiveShapeUtils-DQ3B1xFd.js";import"./isPlainObject-DzUH2tSn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CigjyTr6.js";import"./Trapezoid-BlblqctV.js";import"./Sector-oF4rAsT4.js";import"./Symbols-Q-kK09Rp.js";import"./symbol-Ch9ZDTsO.js";import"./step-BUGJ6v3P.js";import"./Curve-BqHbKpq8.js";import"./CartesianAxis-D2bUE24b.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BpxKPshg.js";import"./uniqBy-DKNQUoMm.js";import"./iteratee-DFCHVqZZ.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
