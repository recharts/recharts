import{e as t}from"./iframe-m4iUvHHE.js";import{S as i}from"./ChartSizeDimensions-L8mur3p1.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-h_ZmhyNH.js";import{C as c}from"./ComposedChart-C6EOsY3Y.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-B2TAto9y.js";import{X as f}from"./XAxis-D0aRIGij.js";import{Y as M}from"./YAxis-CCDUaJX1.js";import{L as b}from"./Legend-CQ4XniSJ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyxbBsOP.js";import"./immer-g1bGLmSg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-F72CiqvA.js";import"./index-CrxMp6gE.js";import"./hooks-DWsntCpj.js";import"./axisSelectors-DfPlbHbP.js";import"./d3-scale-Y-jFDeRI.js";import"./zIndexSlice-CKy2olf2.js";import"./renderedTicksSlice-BEB6E7mo.js";import"./CartesianChart-_tfuwHZj.js";import"./chartDataContext-BiqezE3h.js";import"./CategoricalChart-9uAdVsVQ.js";import"./Layer-CcrS99IB.js";import"./ReactUtils-BGxD9cqm.js";import"./Label-BCusTt26.js";import"./Text-B9di0q31.js";import"./DOMUtils-BJmvgBqy.js";import"./ZIndexLayer-DebxKBww.js";import"./ActivePoints-MuJUPiBM.js";import"./Dot-NbYBXchV.js";import"./types-ipm49NW_.js";import"./RegisterGraphicalItemId-uusu-k8r.js";import"./ErrorBarContext-CisfXBtR.js";import"./GraphicalItemClipPath-BgZNml_V.js";import"./SetGraphicalItem-DEb8ASoe.js";import"./useAnimationId-CowdAHeu.js";import"./getRadiusAndStrokeWidthFromDot-uhw_xs2j.js";import"./ActiveShapeUtils-DWhLewKE.js";import"./isPlainObject-BVIwbHuq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNlZhouO.js";import"./Trapezoid-BQrLMZHr.js";import"./Sector-0LK2YG6H.js";import"./Symbols-B9jGSpgT.js";import"./symbol-Chx5djFD.js";import"./step-BaU1N5Sx.js";import"./Curve-lACOSqJl.js";import"./CartesianAxis-CqSuAZnU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-6zzYdDiL.js";import"./uniqBy-DhVYOpcE.js";import"./iteratee-Cfg_AXlo.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
