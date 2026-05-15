import{e as t}from"./iframe-CFLjOTm5.js";import{S as i}from"./ChartSizeDimensions-DagJBs5z.js";import{ag as s,ab as g,ad as h,g as l}from"./arrayEqualityCheck-ChmsrC0B.js";import{C as d}from"./ComposedChart-FER9Vi0e.js";import{p as c}from"./Page-DPte-9pC.js";import{L as u}from"./Line-Vg9WsR_0.js";import{X as f}from"./XAxis-CPArG0UG.js";import{Y as b}from"./YAxis-D1od4iBb.js";import{L as M}from"./Legend-BbddleL8.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BU0Jf3lU.js";import"./immer-e_Tfrumf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7LYgHfU.js";import"./index-DU898aRA.js";import"./hooks-C_Gw3bpR.js";import"./axisSelectors-DczBvRuT.js";import"./d3-scale-CTwBFda5.js";import"./zIndexSlice-Cx77az4x.js";import"./renderedTicksSlice-odoaHiua.js";import"./CartesianChart-Dkwg52u_.js";import"./chartDataContext-CdLUr7Zf.js";import"./CategoricalChart-BQR3q1EG.js";import"./Layer-CWq3y3ul.js";import"./ReactUtils-DhONHYWu.js";import"./Label-BSOdMnMn.js";import"./Text-BZYuARJv.js";import"./DOMUtils-DJPQYNDH.js";import"./ZIndexLayer-D7dGD0_V.js";import"./ActivePoints-9HVyXSwD.js";import"./Dot-BsIP-wxa.js";import"./types-CgNdS23P.js";import"./RegisterGraphicalItemId-E3PAioKC.js";import"./ErrorBarContext--tEIgjZN.js";import"./GraphicalItemClipPath-Diu1h3xz.js";import"./SetGraphicalItem-Tg4ql8Pw.js";import"./useAnimationId-DK1cyyuV.js";import"./getRadiusAndStrokeWidthFromDot-CiQZJYhU.js";import"./ActiveShapeUtils-DrwY_Mc1.js";import"./isPlainObject-CzNO0PsU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DwfIT2qv.js";import"./Trapezoid-B5Lh4oRr.js";import"./Sector-DsUts6aH.js";import"./Symbols-CkgCxPkV.js";import"./symbol-BeYyKtHZ.js";import"./step-BuRaAczm.js";import"./Curve-BhvAwYBS.js";import"./CartesianAxis-BpdXJUIh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-C2egQmGh.js";import"./uniqBy-C7HTjv5J.js";import"./iteratee-BzNhxdj8.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(d,{data:c,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(b,null),t.createElement(M,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
